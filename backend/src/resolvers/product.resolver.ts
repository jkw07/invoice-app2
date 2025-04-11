import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { ProductService } from '../services/product.service';
import { UnauthorizedException, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { Request } from 'express';
import { UpdateProductInput } from '../dto/update-product.input';
import { CreateProductInput } from '../dto/create-product.input';
import { Product } from 'src/@generated/product/product.model';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => [Product])
  async getProductsByCompany(
    @Context() context: { req: Request },
    @Args('companyId', { type: () => Int }) companyId: number,
  ) {
    const userId = getUserIdFromContext(context);
    return this.productService.getProductsByCompany(userId, companyId);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => Product)
  async getProductById(
    @Context() context: { req: Request },
    @Args('productId', { type: () => Int }) productId: number,
  ) {
    const userId = getUserIdFromContext(context);
    return this.productService.getProductById(userId, productId);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Product)
  async addProduct(
    @Context() context: { req: Request },
    @Args('input') input: CreateProductInput,
  ): Promise<Product> {
    const userId = getUserIdFromContext(context);
    return this.productService.addProduct(userId, input);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Product)
  async deleteProduct(
    @Context() context: { req: Request },
    @Args('productId', { type: () => Int }) productId: number,
  ) {
    const userId = getUserIdFromContext(context);
    return this.productService.deleteProduct(userId, productId);
  }

  @Mutation(() => Product)
  @UseGuards(GqlAuthGuard)
  async updateProduct(
    @Context() context: { req: Request },
    @Args('productId', { type: () => Int }) productId: number,
    @Args('input') input: UpdateProductInput,
  ) {
    const userId = getUserIdFromContext(context);
    return this.productService.updateProduct(userId, productId, input);
  }
}

function getUserIdFromContext(context: { req: Request }): string {
  const userId = context.req.user?.sub;
  if (!userId) {
    throw new UnauthorizedException('USER_NOT_AUTHENTICATED');
  }
  return userId;
}
