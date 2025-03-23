import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoiceCreateWithoutPaymentInput } from './invoice-create-without-payment.input';
import { Type } from 'class-transformer';
import { InvoiceCreateOrConnectWithoutPaymentInput } from './invoice-create-or-connect-without-payment.input';
import { InvoiceCreateManyPaymentInputEnvelope } from './invoice-create-many-payment-input-envelope.input';
import { Prisma } from '@prisma/client';
import { InvoiceWhereUniqueInput } from './invoice-where-unique.input';

@InputType()
export class InvoiceUncheckedCreateNestedManyWithoutPaymentInput {

    @Field(() => [InvoiceCreateWithoutPaymentInput], {nullable:true})
    @Type(() => InvoiceCreateWithoutPaymentInput)
    create?: Array<InvoiceCreateWithoutPaymentInput>;

    @Field(() => [InvoiceCreateOrConnectWithoutPaymentInput], {nullable:true})
    @Type(() => InvoiceCreateOrConnectWithoutPaymentInput)
    connectOrCreate?: Array<InvoiceCreateOrConnectWithoutPaymentInput>;

    @Field(() => InvoiceCreateManyPaymentInputEnvelope, {nullable:true})
    @Type(() => InvoiceCreateManyPaymentInputEnvelope)
    createMany?: InvoiceCreateManyPaymentInputEnvelope;

    @Field(() => [InvoiceWhereUniqueInput], {nullable:true})
    @Type(() => InvoiceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>>;
}
