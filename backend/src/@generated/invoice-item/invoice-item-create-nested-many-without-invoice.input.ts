import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoiceItemCreateWithoutInvoiceInput } from './invoice-item-create-without-invoice.input';
import { Type } from 'class-transformer';
import { InvoiceItemCreateOrConnectWithoutInvoiceInput } from './invoice-item-create-or-connect-without-invoice.input';
import { InvoiceItemCreateManyInvoiceInputEnvelope } from './invoice-item-create-many-invoice-input-envelope.input';
import { Prisma } from '@prisma/client';
import { InvoiceItemWhereUniqueInput } from './invoice-item-where-unique.input';

@InputType()
export class InvoiceItemCreateNestedManyWithoutInvoiceInput {

    @Field(() => [InvoiceItemCreateWithoutInvoiceInput], {nullable:true})
    @Type(() => InvoiceItemCreateWithoutInvoiceInput)
    create?: Array<InvoiceItemCreateWithoutInvoiceInput>;

    @Field(() => [InvoiceItemCreateOrConnectWithoutInvoiceInput], {nullable:true})
    @Type(() => InvoiceItemCreateOrConnectWithoutInvoiceInput)
    connectOrCreate?: Array<InvoiceItemCreateOrConnectWithoutInvoiceInput>;

    @Field(() => InvoiceItemCreateManyInvoiceInputEnvelope, {nullable:true})
    @Type(() => InvoiceItemCreateManyInvoiceInputEnvelope)
    createMany?: InvoiceItemCreateManyInvoiceInputEnvelope;

    @Field(() => [InvoiceItemWhereUniqueInput], {nullable:true})
    @Type(() => InvoiceItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InvoiceItemWhereUniqueInput, 'id'>>;
}
