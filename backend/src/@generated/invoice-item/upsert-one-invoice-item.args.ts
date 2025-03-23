import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InvoiceItemWhereUniqueInput } from './invoice-item-where-unique.input';
import { Type } from 'class-transformer';
import { InvoiceItemCreateInput } from './invoice-item-create.input';
import { InvoiceItemUpdateInput } from './invoice-item-update.input';

@ArgsType()
export class UpsertOneInvoiceItemArgs {

    @Field(() => InvoiceItemWhereUniqueInput, {nullable:false})
    @Type(() => InvoiceItemWhereUniqueInput)
    where!: Prisma.AtLeast<InvoiceItemWhereUniqueInput, 'id'>;

    @Field(() => InvoiceItemCreateInput, {nullable:false})
    @Type(() => InvoiceItemCreateInput)
    create!: InvoiceItemCreateInput;

    @Field(() => InvoiceItemUpdateInput, {nullable:false})
    @Type(() => InvoiceItemUpdateInput)
    update!: InvoiceItemUpdateInput;
}
