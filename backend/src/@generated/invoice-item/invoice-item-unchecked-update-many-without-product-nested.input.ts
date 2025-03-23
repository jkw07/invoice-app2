import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoiceItemCreateWithoutProductInput } from './invoice-item-create-without-product.input';
import { Type } from 'class-transformer';
import { InvoiceItemCreateOrConnectWithoutProductInput } from './invoice-item-create-or-connect-without-product.input';
import { InvoiceItemUpsertWithWhereUniqueWithoutProductInput } from './invoice-item-upsert-with-where-unique-without-product.input';
import { InvoiceItemCreateManyProductInputEnvelope } from './invoice-item-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { InvoiceItemWhereUniqueInput } from './invoice-item-where-unique.input';
import { InvoiceItemUpdateWithWhereUniqueWithoutProductInput } from './invoice-item-update-with-where-unique-without-product.input';
import { InvoiceItemUpdateManyWithWhereWithoutProductInput } from './invoice-item-update-many-with-where-without-product.input';
import { InvoiceItemScalarWhereInput } from './invoice-item-scalar-where.input';

@InputType()
export class InvoiceItemUncheckedUpdateManyWithoutProductNestedInput {

    @Field(() => [InvoiceItemCreateWithoutProductInput], {nullable:true})
    @Type(() => InvoiceItemCreateWithoutProductInput)
    create?: Array<InvoiceItemCreateWithoutProductInput>;

    @Field(() => [InvoiceItemCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => InvoiceItemCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<InvoiceItemCreateOrConnectWithoutProductInput>;

    @Field(() => [InvoiceItemUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => InvoiceItemUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<InvoiceItemUpsertWithWhereUniqueWithoutProductInput>;

    @Field(() => InvoiceItemCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => InvoiceItemCreateManyProductInputEnvelope)
    createMany?: InvoiceItemCreateManyProductInputEnvelope;

    @Field(() => [InvoiceItemWhereUniqueInput], {nullable:true})
    @Type(() => InvoiceItemWhereUniqueInput)
    set?: Array<Prisma.AtLeast<InvoiceItemWhereUniqueInput, 'id'>>;

    @Field(() => [InvoiceItemWhereUniqueInput], {nullable:true})
    @Type(() => InvoiceItemWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<InvoiceItemWhereUniqueInput, 'id'>>;

    @Field(() => [InvoiceItemWhereUniqueInput], {nullable:true})
    @Type(() => InvoiceItemWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<InvoiceItemWhereUniqueInput, 'id'>>;

    @Field(() => [InvoiceItemWhereUniqueInput], {nullable:true})
    @Type(() => InvoiceItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InvoiceItemWhereUniqueInput, 'id'>>;

    @Field(() => [InvoiceItemUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => InvoiceItemUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<InvoiceItemUpdateWithWhereUniqueWithoutProductInput>;

    @Field(() => [InvoiceItemUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => InvoiceItemUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<InvoiceItemUpdateManyWithWhereWithoutProductInput>;

    @Field(() => [InvoiceItemScalarWhereInput], {nullable:true})
    @Type(() => InvoiceItemScalarWhereInput)
    deleteMany?: Array<InvoiceItemScalarWhereInput>;
}
