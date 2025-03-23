import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InvoiceWhereUniqueInput } from './invoice-where-unique.input';
import { Type } from 'class-transformer';
import { InvoiceUpdateWithoutPaymentInput } from './invoice-update-without-payment.input';

@InputType()
export class InvoiceUpdateWithWhereUniqueWithoutPaymentInput {

    @Field(() => InvoiceWhereUniqueInput, {nullable:false})
    @Type(() => InvoiceWhereUniqueInput)
    where!: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>;

    @Field(() => InvoiceUpdateWithoutPaymentInput, {nullable:false})
    @Type(() => InvoiceUpdateWithoutPaymentInput)
    data!: InvoiceUpdateWithoutPaymentInput;
}
