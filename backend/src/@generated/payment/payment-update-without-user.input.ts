import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { InvoiceUpdateManyWithoutPaymentNestedInput } from '../invoice/invoice-update-many-without-payment-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class PaymentUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    method?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => InvoiceUpdateManyWithoutPaymentNestedInput, {nullable:true})
    @Type(() => InvoiceUpdateManyWithoutPaymentNestedInput)
    invoices?: InvoiceUpdateManyWithoutPaymentNestedInput;
}
