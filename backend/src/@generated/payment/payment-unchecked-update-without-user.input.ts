import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { InvoiceUncheckedUpdateManyWithoutPaymentNestedInput } from '../invoice/invoice-unchecked-update-many-without-payment-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class PaymentUncheckedUpdateWithoutUserInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    method?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => InvoiceUncheckedUpdateManyWithoutPaymentNestedInput, {nullable:true})
    @Type(() => InvoiceUncheckedUpdateManyWithoutPaymentNestedInput)
    invoices?: InvoiceUncheckedUpdateManyWithoutPaymentNestedInput;
}
