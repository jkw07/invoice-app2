import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoiceCreateWithoutPaymentInput } from './invoice-create-without-payment.input';
import { Type } from 'class-transformer';
import { InvoiceCreateOrConnectWithoutPaymentInput } from './invoice-create-or-connect-without-payment.input';
import { InvoiceUpsertWithWhereUniqueWithoutPaymentInput } from './invoice-upsert-with-where-unique-without-payment.input';
import { InvoiceCreateManyPaymentInputEnvelope } from './invoice-create-many-payment-input-envelope.input';
import { Prisma } from '@prisma/client';
import { InvoiceWhereUniqueInput } from './invoice-where-unique.input';
import { InvoiceUpdateWithWhereUniqueWithoutPaymentInput } from './invoice-update-with-where-unique-without-payment.input';
import { InvoiceUpdateManyWithWhereWithoutPaymentInput } from './invoice-update-many-with-where-without-payment.input';
import { InvoiceScalarWhereInput } from './invoice-scalar-where.input';

@InputType()
export class InvoiceUncheckedUpdateManyWithoutPaymentNestedInput {

    @Field(() => [InvoiceCreateWithoutPaymentInput], {nullable:true})
    @Type(() => InvoiceCreateWithoutPaymentInput)
    create?: Array<InvoiceCreateWithoutPaymentInput>;

    @Field(() => [InvoiceCreateOrConnectWithoutPaymentInput], {nullable:true})
    @Type(() => InvoiceCreateOrConnectWithoutPaymentInput)
    connectOrCreate?: Array<InvoiceCreateOrConnectWithoutPaymentInput>;

    @Field(() => [InvoiceUpsertWithWhereUniqueWithoutPaymentInput], {nullable:true})
    @Type(() => InvoiceUpsertWithWhereUniqueWithoutPaymentInput)
    upsert?: Array<InvoiceUpsertWithWhereUniqueWithoutPaymentInput>;

    @Field(() => InvoiceCreateManyPaymentInputEnvelope, {nullable:true})
    @Type(() => InvoiceCreateManyPaymentInputEnvelope)
    createMany?: InvoiceCreateManyPaymentInputEnvelope;

    @Field(() => [InvoiceWhereUniqueInput], {nullable:true})
    @Type(() => InvoiceWhereUniqueInput)
    set?: Array<Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>>;

    @Field(() => [InvoiceWhereUniqueInput], {nullable:true})
    @Type(() => InvoiceWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>>;

    @Field(() => [InvoiceWhereUniqueInput], {nullable:true})
    @Type(() => InvoiceWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>>;

    @Field(() => [InvoiceWhereUniqueInput], {nullable:true})
    @Type(() => InvoiceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>>;

    @Field(() => [InvoiceUpdateWithWhereUniqueWithoutPaymentInput], {nullable:true})
    @Type(() => InvoiceUpdateWithWhereUniqueWithoutPaymentInput)
    update?: Array<InvoiceUpdateWithWhereUniqueWithoutPaymentInput>;

    @Field(() => [InvoiceUpdateManyWithWhereWithoutPaymentInput], {nullable:true})
    @Type(() => InvoiceUpdateManyWithWhereWithoutPaymentInput)
    updateMany?: Array<InvoiceUpdateManyWithWhereWithoutPaymentInput>;

    @Field(() => [InvoiceScalarWhereInput], {nullable:true})
    @Type(() => InvoiceScalarWhereInput)
    deleteMany?: Array<InvoiceScalarWhereInput>;
}
