import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { InvoiceUncheckedCreateNestedManyWithoutPaymentInput } from '../invoice/invoice-unchecked-create-nested-many-without-payment.input';
import { Type } from 'class-transformer';

@InputType()
export class PaymentUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    method!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => InvoiceUncheckedCreateNestedManyWithoutPaymentInput, {nullable:true})
    @Type(() => InvoiceUncheckedCreateNestedManyWithoutPaymentInput)
    invoices?: InvoiceUncheckedCreateNestedManyWithoutPaymentInput;
}
