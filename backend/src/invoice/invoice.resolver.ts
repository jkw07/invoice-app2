import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { InvoiceService } from './invoice.service';
import { Invoice } from '../@generated/invoice/invoice.model';
import { ForbiddenException, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { Request } from 'express';
import { UpdateInvoiceInput } from './dto/update-invoice.input';
import { CreateInvoiceInput } from './dto/create-invoice.input';

@Resolver(() => Invoice)
export class InvoiceResolver {
  constructor(private readonly invoiceService: InvoiceService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => [Invoice])
  async getInvoices(
    @Context() context: { req: Request },
    @Args('companyId', { type: () => Int }) companyId: number,
  ) {
    const userId = getUserIdFromContext(context);
    return this.invoiceService.getInvoicesByCompany(userId, companyId);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => Invoice)
  async getInvoiceById(
    @Context() context: { req: Request },
    @Args('invoiceId', { type: () => Int }) invoiceId: number,
    @Args('companyId', { type: () => Int }) companyId: number,
  ) {
    const userId = getUserIdFromContext(context);
    return this.invoiceService.getInvoiceById(userId, invoiceId, companyId);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Invoice)
  async addInvoice(
    @Context() context: { req: Request },
    @Args('data') data: CreateInvoiceInput,
  ) {
    const userId = getUserIdFromContext(context);
    return this.invoiceService.addInvoice(userId, data);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Invoice)
  async deleteInvoice(
    @Context() context: { req: Request },
    @Args('invoiceId', { type: () => Int }) invoiceId: number,
  ) {
    const userId = getUserIdFromContext(context);
    return this.invoiceService.deleteInvoice(userId, invoiceId);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Invoice)
  async updateInvoice(
    @Context() context: { req: Request },
    @Args('invoiceId', { type: () => Int }) invoiceId: number,
    @Args('data') data: UpdateInvoiceInput,
  ) {
    const userId = getUserIdFromContext(context);
    return this.invoiceService.updateInvoice(userId, invoiceId, data);
  }
}

function getUserIdFromContext(context: { req: Request }): string {
  const userId = context.req.user?.sub;
  if (!userId) {
    throw new ForbiddenException('User not authenticated');
  }
  return userId;
}
