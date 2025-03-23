import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InvoiceWhereUniqueInput } from './invoice-where-unique.input';
import { Type } from 'class-transformer';
import { InvoiceUpdateWithoutPaymentInput } from './invoice-update-without-payment.input';
import { InvoiceCreateWithoutPaymentInput } from './invoice-create-without-payment.input';

@InputType()
export class InvoiceUpsertWithWhereUniqueWithoutPaymentInput {

    @Field(() => InvoiceWhereUniqueInput, {nullable:false})
    @Type(() => InvoiceWhereUniqueInput)
    where!: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>;

    @Field(() => InvoiceUpdateWithoutPaymentInput, {nullable:false})
    @Type(() => InvoiceUpdateWithoutPaymentInput)
    update!: InvoiceUpdateWithoutPaymentInput;

    @Field(() => InvoiceCreateWithoutPaymentInput, {nullable:false})
    @Type(() => InvoiceCreateWithoutPaymentInput)
    create!: InvoiceCreateWithoutPaymentInput;
}
