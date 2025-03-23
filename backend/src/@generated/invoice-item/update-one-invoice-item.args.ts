import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InvoiceItemUpdateInput } from './invoice-item-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { InvoiceItemWhereUniqueInput } from './invoice-item-where-unique.input';

@ArgsType()
export class UpdateOneInvoiceItemArgs {

    @Field(() => InvoiceItemUpdateInput, {nullable:false})
    @Type(() => InvoiceItemUpdateInput)
    data!: InvoiceItemUpdateInput;

    @Field(() => InvoiceItemWhereUniqueInput, {nullable:false})
    @Type(() => InvoiceItemWhereUniqueInput)
    where!: Prisma.AtLeast<InvoiceItemWhereUniqueInput, 'id'>;
}
