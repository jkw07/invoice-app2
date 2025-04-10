import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductInput } from 'src/dto/create-product.input';
import { UpdateProductInput } from 'src/dto/update-product.input';
import { Product, VatRate } from '@prisma/client';

@Injectable()
export class ProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  async checkUserCompanyAccess(
    userId: string,
    companyId: number,
  ): Promise<boolean> {
    const company = await this.prisma.company.findFirst({
      where: {
        id: companyId,
        userId: userId,
      },
    });
    return !!company;
  }

  async addProduct(data: CreateProductInput): Promise<Product> {
    return this.prisma.product.create({
      data: {
        ...data,
      },
    });
  }

  async getProductsByCompany(
    companyId: number,
  ): Promise<(Product & { vatRate: VatRate })[]> {
    return this.prisma.product.findMany({
      where: { companyId },
      include: {
        vatRate: true,
      },
    });
  }

  async getProductById(
    productId: number,
  ): Promise<(Product & { vatRate: VatRate }) | null> {
    return this.prisma.product.findUnique({
      where: { id: productId },
      include: {
        vatRate: true,
      },
    });
  }

  async deleteProduct(productId: number): Promise<Product> {
    return this.prisma.product.delete({
      where: { id: productId },
    });
  }

  async updateProduct(
    productId: number,
    data: UpdateProductInput,
  ): Promise<Product> {
    return this.prisma.product.update({
      where: { id: productId },
      data,
    });
  }

  async countInvoiceItemsForProduct(productId: number): Promise<number> {
    return this.prisma.invoiceItem.count({
      where: { productId: productId },
    });
  }
}
