import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { PaymentService } from '../services/payment.service';
import { UseGuards, UnauthorizedException } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { Payment } from 'src/@generated/payment/payment.model';
import { Request } from 'express';
import { CreatePaymentInput } from '../dto/create-payment.input';
import { UpdatePaymentInput } from '../dto/update-payment.input';

@Resolver(() => Payment)
export class PaymentResolver {
  constructor(private readonly paymentService: PaymentService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Payment)
  async createPaymentMethod(
    @Context() context: { req: Request },
    @Args('input') input: CreatePaymentInput,
  ): Promise<Payment> {
    const userId = getUserIdFromContext(context);
    return this.paymentService.createPaymentMethod(userId, input);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [Payment])
  async getPaymentMethodsByUser(
    @Context() context: { req: Request },
  ): Promise<Payment[]> {
    const userId = getUserIdFromContext(context);
    return this.paymentService.getPaymentMethodsByUser(userId);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => Payment)
  async getPaymentMethodById(
    @Context() context: { req: Request },
    @Args('paymentId', { type: () => Int }) paymentId: number,
  ): Promise<Payment> {
    const userId = getUserIdFromContext(context);
    return this.paymentService.getPaymentMethodById(userId, paymentId);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Payment)
  async updatePaymentMethod(
    @Context() context: { req: Request },
    @Args('paymentId', { type: () => Int }) paymentId: number,
    @Args('input') input: UpdatePaymentInput,
  ): Promise<Payment> {
    const userId = getUserIdFromContext(context);
    return this.paymentService.updatePaymentMethod(userId, paymentId, input);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Payment)
  async deletePaymentMethod(
    @Context() context: { req: Request },
    @Args('paymentId', { type: () => Int }) paymentId: number,
  ): Promise<Payment> {
    const userId = getUserIdFromContext(context);
    return this.paymentService.deletePaymentMethod(userId, paymentId);
  }
}

function getUserIdFromContext(context: { req: Request }): string {
  const userId = context.req.user?.sub;
  if (!userId) {
    throw new UnauthorizedException('USER_NOT_AUTHENTICATED');
  }
  return userId;
}
