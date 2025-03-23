import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentCreateWithoutInvoicesInput } from './payment-create-without-invoices.input';
import { Type } from 'class-transformer';
import { PaymentCreateOrConnectWithoutInvoicesInput } from './payment-create-or-connect-without-invoices.input';
import { Prisma } from '@prisma/client';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';

@InputType()
export class PaymentCreateNestedOneWithoutInvoicesInput {

    @Field(() => PaymentCreateWithoutInvoicesInput, {nullable:true})
    @Type(() => PaymentCreateWithoutInvoicesInput)
    create?: PaymentCreateWithoutInvoicesInput;

    @Field(() => PaymentCreateOrConnectWithoutInvoicesInput, {nullable:true})
    @Type(() => PaymentCreateOrConnectWithoutInvoicesInput)
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoicesInput;

    @Field(() => PaymentWhereUniqueInput, {nullable:true})
    @Type(() => PaymentWhereUniqueInput)
    connect?: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'method'>;
}
