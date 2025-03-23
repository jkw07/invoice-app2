import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoiceItemCreateWithoutInvoiceInput } from './invoice-item-create-without-invoice.input';
import { Type } from 'class-transformer';
import { InvoiceItemCreateOrConnectWithoutInvoiceInput } from './invoice-item-create-or-connect-without-invoice.input';
import { InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput } from './invoice-item-upsert-with-where-unique-without-invoice.input';
import { InvoiceItemCreateManyInvoiceInputEnvelope } from './invoice-item-create-many-invoice-input-envelope.input';
import { Prisma } from '@prisma/client';
import { InvoiceItemWhereUniqueInput } from './invoice-item-where-unique.input';
import { InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput } from './invoice-item-update-with-where-unique-without-invoice.input';
import { InvoiceItemUpdateManyWithWhereWithoutInvoiceInput } from './invoice-item-update-many-with-where-without-invoice.input';
import { InvoiceItemScalarWhereInput } from './invoice-item-scalar-where.input';

@InputType()
export class InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput {

    @Field(() => [InvoiceItemCreateWithoutInvoiceInput], {nullable:true})
    @Type(() => InvoiceItemCreateWithoutInvoiceInput)
    create?: Array<InvoiceItemCreateWithoutInvoiceInput>;

    @Field(() => [InvoiceItemCreateOrConnectWithoutInvoiceInput], {nullable:true})
    @Type(() => InvoiceItemCreateOrConnectWithoutInvoiceInput)
    connectOrCreate?: Array<InvoiceItemCreateOrConnectWithoutInvoiceInput>;

    @Field(() => [InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput], {nullable:true})
    @Type(() => InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput)
    upsert?: Array<InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput>;

    @Field(() => InvoiceItemCreateManyInvoiceInputEnvelope, {nullable:true})
    @Type(() => InvoiceItemCreateManyInvoiceInputEnvelope)
    createMany?: InvoiceItemCreateManyInvoiceInputEnvelope;

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

    @Field(() => [InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput], {nullable:true})
    @Type(() => InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput)
    update?: Array<InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput>;

    @Field(() => [InvoiceItemUpdateManyWithWhereWithoutInvoiceInput], {nullable:true})
    @Type(() => InvoiceItemUpdateManyWithWhereWithoutInvoiceInput)
    updateMany?: Array<InvoiceItemUpdateManyWithWhereWithoutInvoiceInput>;

    @Field(() => [InvoiceItemScalarWhereInput], {nullable:true})
    @Type(() => InvoiceItemScalarWhereInput)
    deleteMany?: Array<InvoiceItemScalarWhereInput>;
}
