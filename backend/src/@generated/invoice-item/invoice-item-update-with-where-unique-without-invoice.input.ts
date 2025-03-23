import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InvoiceItemWhereUniqueInput } from './invoice-item-where-unique.input';
import { Type } from 'class-transformer';
import { InvoiceItemUpdateWithoutInvoiceInput } from './invoice-item-update-without-invoice.input';

@InputType()
export class InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput {

    @Field(() => InvoiceItemWhereUniqueInput, {nullable:false})
    @Type(() => InvoiceItemWhereUniqueInput)
    where!: Prisma.AtLeast<InvoiceItemWhereUniqueInput, 'id'>;

    @Field(() => InvoiceItemUpdateWithoutInvoiceInput, {nullable:false})
    @Type(() => InvoiceItemUpdateWithoutInvoiceInput)
    data!: InvoiceItemUpdateWithoutInvoiceInput;
}
