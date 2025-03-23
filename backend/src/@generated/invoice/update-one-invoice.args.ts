import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InvoiceUpdateInput } from './invoice-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { InvoiceWhereUniqueInput } from './invoice-where-unique.input';

@ArgsType()
export class UpdateOneInvoiceArgs {

    @Field(() => InvoiceUpdateInput, {nullable:false})
    @Type(() => InvoiceUpdateInput)
    data!: InvoiceUpdateInput;

    @Field(() => InvoiceWhereUniqueInput, {nullable:false})
    @Type(() => InvoiceWhereUniqueInput)
    where!: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>;
}
