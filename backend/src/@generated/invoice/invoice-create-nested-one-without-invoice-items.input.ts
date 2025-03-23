import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoiceCreateWithoutInvoiceItemsInput } from './invoice-create-without-invoice-items.input';
import { Type } from 'class-transformer';
import { InvoiceCreateOrConnectWithoutInvoiceItemsInput } from './invoice-create-or-connect-without-invoice-items.input';
import { Prisma } from '@prisma/client';
import { InvoiceWhereUniqueInput } from './invoice-where-unique.input';

@InputType()
export class InvoiceCreateNestedOneWithoutInvoiceItemsInput {

    @Field(() => InvoiceCreateWithoutInvoiceItemsInput, {nullable:true})
    @Type(() => InvoiceCreateWithoutInvoiceItemsInput)
    create?: InvoiceCreateWithoutInvoiceItemsInput;

    @Field(() => InvoiceCreateOrConnectWithoutInvoiceItemsInput, {nullable:true})
    @Type(() => InvoiceCreateOrConnectWithoutInvoiceItemsInput)
    connectOrCreate?: InvoiceCreateOrConnectWithoutInvoiceItemsInput;

    @Field(() => InvoiceWhereUniqueInput, {nullable:true})
    @Type(() => InvoiceWhereUniqueInput)
    connect?: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>;
}
