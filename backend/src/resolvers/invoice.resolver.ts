import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { InvoiceService } from '../services/invoice.service';
import { Invoice } from '../@generated/invoice/invoice.model';
import { UnauthorizedException, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { Request } from 'express';
import { UpdateInvoiceInput } from '../dto/update-invoice.input';
import { CreateInvoiceInput } from '../dto/create-invoice.input';
import { CreateInvoiceItemInput } from 'src/dto/create-invoice-item.input';

@Resolver(() => Invoice)
export class InvoiceResolver {
  constructor(private readonly invoiceService: InvoiceService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => [Invoice])
  async getInvoicesByCompany(
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
  ) {
    const userId = getUserIdFromContext(context);
    return this.invoiceService.getInvoiceById(userId, invoiceId);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Invoice)
  async addInvoiceWithItems(
    @Context() context: { req: Request },
    @Args('inputInvoice') inputInvoice: CreateInvoiceInput,
    @Args('inputItem', { type: () => [CreateInvoiceItemInput] })
    inputItem: CreateInvoiceItemInput[],
  ) {
    const userId = getUserIdFromContext(context);
    return this.invoiceService.addInvoiceWithItems(
      userId,
      inputInvoice,
      inputItem,
    );
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
  async updateInvoiceWithItems(
    @Context() context: { req: Request },
    @Args('invoiceId', { type: () => Int }) invoiceId: number,
    @Args('inputInvoice') inputInvoice: UpdateInvoiceInput,
    @Args('inputItem', { type: () => [CreateInvoiceItemInput] })
    inputItem: CreateInvoiceItemInput[],
  ) {
    const userId = getUserIdFromContext(context);
    return this.invoiceService.updateInvoiceWithItems(
      userId,
      invoiceId,
      inputInvoice,
      inputItem,
    );
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Invoice)
  async updateInvoiceStatus(
    @Context() context: { req: Request },
    @Args('invoiceId', { type: () => Int }) invoiceId: number,
    @Args('inputInvoice') inputInvoice: UpdateInvoiceInput,
  ) {
    const userId = getUserIdFromContext(context);
    return this.invoiceService.updateInvoiceStatus(
      userId,
      invoiceId,
      inputInvoice,
    );
  }
}

function getUserIdFromContext(context: { req: Request }): string {
  const userId = context.req.user?.sub;
  if (!userId) {
    throw new UnauthorizedException('USER_NOT_AUTHENTICATED');
  }
  return userId;
}
