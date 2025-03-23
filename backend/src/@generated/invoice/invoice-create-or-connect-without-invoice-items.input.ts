import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InvoiceWhereUniqueInput } from './invoice-where-unique.input';
import { Type } from 'class-transformer';
import { InvoiceCreateWithoutInvoiceItemsInput } from './invoice-create-without-invoice-items.input';

@InputType()
export class InvoiceCreateOrConnectWithoutInvoiceItemsInput {

    @Field(() => InvoiceWhereUniqueInput, {nullable:false})
    @Type(() => InvoiceWhereUniqueInput)
    where!: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>;

    @Field(() => InvoiceCreateWithoutInvoiceItemsInput, {nullable:false})
    @Type(() => InvoiceCreateWithoutInvoiceItemsInput)
    create!: InvoiceCreateWithoutInvoiceItemsInput;
}
