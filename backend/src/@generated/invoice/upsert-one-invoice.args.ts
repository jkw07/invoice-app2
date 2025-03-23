import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InvoiceWhereUniqueInput } from './invoice-where-unique.input';
import { Type } from 'class-transformer';
import { InvoiceCreateInput } from './invoice-create.input';
import { InvoiceUpdateInput } from './invoice-update.input';

@ArgsType()
export class UpsertOneInvoiceArgs {

    @Field(() => InvoiceWhereUniqueInput, {nullable:false})
    @Type(() => InvoiceWhereUniqueInput)
    where!: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>;

    @Field(() => InvoiceCreateInput, {nullable:false})
    @Type(() => InvoiceCreateInput)
    create!: InvoiceCreateInput;

    @Field(() => InvoiceUpdateInput, {nullable:false})
    @Type(() => InvoiceUpdateInput)
    update!: InvoiceUpdateInput;
}
