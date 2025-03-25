import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutPaymentsInput } from '../user/user-create-nested-one-without-payments.input';
import { Type } from 'class-transformer';
import { InvoiceCreateNestedManyWithoutPaymentInput } from '../invoice/invoice-create-nested-many-without-payment.input';

@InputType()
export class PaymentCreateInput {

    @Field(() => String, {nullable:false})
    method!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutPaymentsInput, {nullable:true})
    @Type(() => UserCreateNestedOneWithoutPaymentsInput)
    user?: UserCreateNestedOneWithoutPaymentsInput;

    @Field(() => InvoiceCreateNestedManyWithoutPaymentInput, {nullable:true})
    @Type(() => InvoiceCreateNestedManyWithoutPaymentInput)
    invoices?: InvoiceCreateNestedManyWithoutPaymentInput;
}
