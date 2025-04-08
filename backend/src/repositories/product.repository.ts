import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductInput } from 'src/product/dto/create-product.input';
import { UpdateProductInput } from 'src/product/dto/update-product.input';

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

  async addProduct(data: CreateProductInput) {
    return this.prisma.product.create({
      data: {
        ...data,
      },
    });
  }

  async getProductsByCompany(companyId: number) {
    return this.prisma.product.findMany({
      where: { companyId },
      include: {
        vatRate: true,
      },
    });
  }

  async getProductById(productId: number) {
    return this.prisma.product.findUnique({
      where: { id: productId },
      include: {
        vatRate: true,
      },
    });
  }

  async deleteProduct(productId: number) {
    return this.prisma.product.delete({
      where: { id: productId },
    });
  }

  async updateProduct(productId: number, data: UpdateProductInput) {
    return this.prisma.product.update({
      where: { id: productId },
      data,
    });
  }
}
