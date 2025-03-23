import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InvoiceItemWhereUniqueInput } from './invoice-item-where-unique.input';
import { Type } from 'class-transformer';
import { InvoiceItemCreateWithoutInvoiceInput } from './invoice-item-create-without-invoice.input';

@InputType()
export class InvoiceItemCreateOrConnectWithoutInvoiceInput {

    @Field(() => InvoiceItemWhereUniqueInput, {nullable:false})
    @Type(() => InvoiceItemWhereUniqueInput)
    where!: Prisma.AtLeast<InvoiceItemWhereUniqueInput, 'id'>;

    @Field(() => InvoiceItemCreateWithoutInvoiceInput, {nullable:false})
    @Type(() => InvoiceItemCreateWithoutInvoiceInput)
    create!: InvoiceItemCreateWithoutInvoiceInput;
}
