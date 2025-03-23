import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';
import { Type } from 'class-transformer';
import { PaymentCreateWithoutInvoicesInput } from './payment-create-without-invoices.input';

@InputType()
export class PaymentCreateOrConnectWithoutInvoicesInput {

    @Field(() => PaymentWhereUniqueInput, {nullable:false})
    @Type(() => PaymentWhereUniqueInput)
    where!: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'method'>;

    @Field(() => PaymentCreateWithoutInvoicesInput, {nullable:false})
    @Type(() => PaymentCreateWithoutInvoicesInput)
    create!: PaymentCreateWithoutInvoicesInput;
}
