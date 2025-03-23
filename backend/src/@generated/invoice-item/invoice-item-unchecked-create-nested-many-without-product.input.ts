import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoiceItemCreateWithoutProductInput } from './invoice-item-create-without-product.input';
import { Type } from 'class-transformer';
import { InvoiceItemCreateOrConnectWithoutProductInput } from './invoice-item-create-or-connect-without-product.input';
import { InvoiceItemCreateManyProductInputEnvelope } from './invoice-item-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { InvoiceItemWhereUniqueInput } from './invoice-item-where-unique.input';

@InputType()
export class InvoiceItemUncheckedCreateNestedManyWithoutProductInput {

    @Field(() => [InvoiceItemCreateWithoutProductInput], {nullable:true})
    @Type(() => InvoiceItemCreateWithoutProductInput)
    create?: Array<InvoiceItemCreateWithoutProductInput>;

    @Field(() => [InvoiceItemCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => InvoiceItemCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<InvoiceItemCreateOrConnectWithoutProductInput>;

    @Field(() => InvoiceItemCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => InvoiceItemCreateManyProductInputEnvelope)
    createMany?: InvoiceItemCreateManyProductInputEnvelope;

    @Field(() => [InvoiceItemWhereUniqueInput], {nullable:true})
    @Type(() => InvoiceItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InvoiceItemWhereUniqueInput, 'id'>>;
}
