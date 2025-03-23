import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentWhereInput } from './payment-where.input';
import { Type } from 'class-transformer';
import { PaymentUpdateWithoutInvoicesInput } from './payment-update-without-invoices.input';

@InputType()
export class PaymentUpdateToOneWithWhereWithoutInvoicesInput {

    @Field(() => PaymentWhereInput, {nullable:true})
    @Type(() => PaymentWhereInput)
    where?: PaymentWhereInput;

    @Field(() => PaymentUpdateWithoutInvoicesInput, {nullable:false})
    @Type(() => PaymentUpdateWithoutInvoicesInput)
    data!: PaymentUpdateWithoutInvoicesInput;
}
