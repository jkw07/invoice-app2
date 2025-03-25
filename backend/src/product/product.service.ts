import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { UpdateProductInput } from './dto/update-product.input';
import { CreateProductInput } from './dto/create-product.input';
import { ProductRepository } from '../repositories/product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async addProduct(userId: string, data: CreateProductInput) {
    const hasAccess = await this.productRepository.checkUserCompanyAccess(
      userId,
      data.companyId,
    );
    if (!hasAccess) {
      throw new ForbiddenException('You do not have access to this company');
    }
    return this.productRepository.addProduct(data);
  }

  async getProductsByCompany(userId: string, companyId: number) {
    const hasAccess = await this.productRepository.checkUserCompanyAccess(
      userId,
      companyId,
    );
    if (!hasAccess) {
      throw new ForbiddenException('You do not have access to this company');
    }
    return this.productRepository.getProductsByCompany(companyId);
  }

  async getProductById(userId: string, productId: number) {
    const product = await this.productRepository.getProductById(productId);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    const hasAccess = await this.productRepository.checkUserCompanyAccess(
      userId,
      product.companyId,
    );
    if (!hasAccess) {
      throw new ForbiddenException('You do not have access to this company');
    }

    return product;
  }

  async deleteProduct(userId: string, productId: number) {
    const product = await this.productRepository.getProductById(productId);
    if (!product) {
      throw new NotFoundException('Client not found');
    }
    const hasAccess = await this.productRepository.checkUserCompanyAccess(
      userId,
      product.companyId,
    );
    if (!hasAccess) {
      throw new ForbiddenException('You do not have access to this company');
    }
    return this.productRepository.deleteProduct(productId);
  }

  async updateProduct(
    userId: string,
    productId: number,
    data: UpdateProductInput,
  ) {
    const product = await this.productRepository.getProductById(productId);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    const hasAccess = await this.productRepository.checkUserCompanyAccess(
      userId,
      product.companyId,
    );
    if (!hasAccess) {
      throw new ForbiddenException('You do not have access to this company');
    }

    return this.productRepository.updateProduct(productId, data);
  }
}
