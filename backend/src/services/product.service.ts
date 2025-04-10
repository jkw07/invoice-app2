import {
  Injectable,
  ForbiddenException,
  NotFoundException,
  Inject,
  BadRequestException,
} from '@nestjs/common';
import { UpdateProductInput } from '../dto/update-product.input';
import { CreateProductInput } from '../dto/create-product.input';
import { ProductRepository } from '../repositories/product.repository';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Product } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly productRepository: ProductRepository,
  ) {}

  private async checkAccessOrThrow(userId: string, companyId: number) {
    const hasAccess = await this.productRepository.checkUserCompanyAccess(
      userId,
      companyId,
    );
    if (!hasAccess) {
      throw new ForbiddenException('ACCESS_DENIED');
    }
  }

  async addProduct(userId: string, data: CreateProductInput): Promise<Product> {
    await this.checkAccessOrThrow(userId, data.companyId);
    await this.cacheManager.del(`productsList:${data.companyId}`);
    return this.productRepository.addProduct(data);
  }

  async getProductsByCompany(
    userId: string,
    companyId: number,
  ): Promise<Product[]> {
    await this.checkAccessOrThrow(userId, companyId);
    const cacheKey = `productsList:${companyId}`;
    const cached = await this.cacheManager.get<Product[]>(cacheKey);
    if (cached) {
      return cached;
    }
    const products =
      await this.productRepository.getProductsByCompany(companyId);
    for (const product of products) {
      const itemKey = `product:${product.id}`;
      await this.cacheManager.set(itemKey, product, 300);
    }
    await this.cacheManager.set(cacheKey, products, 300);
    return products;
  }

  async getProductById(userId: string, productId: number): Promise<Product> {
    const cacheKey = `product:${productId}`;
    const cached = await this.cacheManager.get<Product>(cacheKey);
    if (cached) {
      await this.checkAccessOrThrow(userId, cached.companyId);
      return cached;
    }
    const product = await this.productRepository.getProductById(productId);

    if (!product) {
      throw new NotFoundException('PRODUCT_NOT_FOUND');
    }

    await this.checkAccessOrThrow(userId, product.companyId);
    await this.cacheManager.set(cacheKey, product, 300);
    return product;
  }

  async deleteProduct(userId: string, productId: number): Promise<Product> {
    const product = await this.productRepository.getProductById(productId);
    if (!product) {
      throw new NotFoundException('PRODUCT_NOT_FOUND');
    }
    await this.checkAccessOrThrow(userId, product.companyId);
    const count =
      await this.productRepository.countInvoiceItemsForProduct(productId);
    if (count > 0) {
      throw new BadRequestException('PRODUCT_HAS_INVOICES');
    }
    const result = await this.productRepository.deleteProduct(productId);
    await this.cacheManager.del(`product:${productId}`);
    await this.cacheManager.del(`productsList:${product.companyId}`);
    return result;
  }

  async updateProduct(
    userId: string,
    productId: number,
    data: UpdateProductInput,
  ): Promise<Product> {
    const product = await this.productRepository.getProductById(productId);
    if (!product) {
      throw new NotFoundException('PRODUCT_NOT_FOUND');
    }
    await this.checkAccessOrThrow(userId, product.companyId);
    const count =
      await this.productRepository.countInvoiceItemsForProduct(productId);
    if (count > 0) {
      throw new BadRequestException('PRODUCT_HAS_INVOICES');
    }
    const updated = await this.productRepository.updateProduct(productId, data);
    await this.cacheManager.del(`product:${productId}`);
    await this.cacheManager.del(`productsList:${product.companyId}`);
    return updated;
  }
}
