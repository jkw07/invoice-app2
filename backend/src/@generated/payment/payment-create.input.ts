import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoiceCreateNestedManyWithoutPaymentInput } from '../invoice/invoice-create-nested-many-without-payment.input';
import { Type } from 'class-transformer';

@InputType()
export class PaymentCreateInput {

    @Field(() => String, {nullable:false})
    method!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => InvoiceCreateNestedManyWithoutPaymentInput, {nullable:true})
    @Type(() => InvoiceCreateNestedManyWithoutPaymentInput)
    invoices?: InvoiceCreateNestedManyWithoutPaymentInput;
}
