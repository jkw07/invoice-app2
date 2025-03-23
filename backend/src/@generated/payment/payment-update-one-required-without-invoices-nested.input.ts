import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentCreateWithoutInvoicesInput } from './payment-create-without-invoices.input';
import { Type } from 'class-transformer';
import { PaymentCreateOrConnectWithoutInvoicesInput } from './payment-create-or-connect-without-invoices.input';
import { PaymentUpsertWithoutInvoicesInput } from './payment-upsert-without-invoices.input';
import { Prisma } from '@prisma/client';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';
import { PaymentUpdateToOneWithWhereWithoutInvoicesInput } from './payment-update-to-one-with-where-without-invoices.input';

@InputType()
export class PaymentUpdateOneRequiredWithoutInvoicesNestedInput {

    @Field(() => PaymentCreateWithoutInvoicesInput, {nullable:true})
    @Type(() => PaymentCreateWithoutInvoicesInput)
    create?: PaymentCreateWithoutInvoicesInput;

    @Field(() => PaymentCreateOrConnectWithoutInvoicesInput, {nullable:true})
    @Type(() => PaymentCreateOrConnectWithoutInvoicesInput)
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoicesInput;

    @Field(() => PaymentUpsertWithoutInvoicesInput, {nullable:true})
    @Type(() => PaymentUpsertWithoutInvoicesInput)
    upsert?: PaymentUpsertWithoutInvoicesInput;

    @Field(() => PaymentWhereUniqueInput, {nullable:true})
    @Type(() => PaymentWhereUniqueInput)
    connect?: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'method'>;

    @Field(() => PaymentUpdateToOneWithWhereWithoutInvoicesInput, {nullable:true})
    @Type(() => PaymentUpdateToOneWithWhereWithoutInvoicesInput)
    update?: PaymentUpdateToOneWithWhereWithoutInvoicesInput;
}
