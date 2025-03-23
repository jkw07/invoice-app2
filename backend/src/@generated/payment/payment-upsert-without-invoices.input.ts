import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentUpdateWithoutInvoicesInput } from './payment-update-without-invoices.input';
import { Type } from 'class-transformer';
import { PaymentCreateWithoutInvoicesInput } from './payment-create-without-invoices.input';
import { PaymentWhereInput } from './payment-where.input';

@InputType()
export class PaymentUpsertWithoutInvoicesInput {

    @Field(() => PaymentUpdateWithoutInvoicesInput, {nullable:false})
    @Type(() => PaymentUpdateWithoutInvoicesInput)
    update!: PaymentUpdateWithoutInvoicesInput;

    @Field(() => PaymentCreateWithoutInvoicesInput, {nullable:false})
    @Type(() => PaymentCreateWithoutInvoicesInput)
    create!: PaymentCreateWithoutInvoicesInput;

    @Field(() => PaymentWhereInput, {nullable:true})
    @Type(() => PaymentWhereInput)
    where?: PaymentWhereInput;
}
