import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { EnumStatusFieldUpdateOperationsInput } from '../prisma/enum-status-field-update-operations.input';
import { ClientUpdateOneRequiredWithoutInvoicesNestedInput } from '../client/client-update-one-required-without-invoices-nested.input';
import { PaymentUpdateOneRequiredWithoutInvoicesNestedInput } from '../payment/payment-update-one-required-without-invoices-nested.input';
import { InvoiceItemUpdateManyWithoutInvoiceNestedInput } from '../invoice-item/invoice-item-update-many-without-invoice-nested.input';
import { ReminderUpdateManyWithoutInvoiceNestedInput } from '../reminder/reminder-update-many-without-invoice-nested.input';

@InputType()
export class InvoiceUpdateWithoutCompanyInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    recipient?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    invoiceType?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    invoiceNo?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    issuedDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    transactionDate?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dueDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    paymentMethod?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    totalAmount?: DecimalFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    currency?: StringFieldUpdateOperationsInput;

    @Field(() => EnumStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumStatusFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ClientUpdateOneRequiredWithoutInvoicesNestedInput, {nullable:true})
    @Type(() => ClientUpdateOneRequiredWithoutInvoicesNestedInput)
    buyer?: ClientUpdateOneRequiredWithoutInvoicesNestedInput;

    @Field(() => PaymentUpdateOneRequiredWithoutInvoicesNestedInput, {nullable:true})
    @Type(() => PaymentUpdateOneRequiredWithoutInvoicesNestedInput)
    payment?: PaymentUpdateOneRequiredWithoutInvoicesNestedInput;

    @Field(() => InvoiceItemUpdateManyWithoutInvoiceNestedInput, {nullable:true})
    @Type(() => InvoiceItemUpdateManyWithoutInvoiceNestedInput)
    invoiceItems?: InvoiceItemUpdateManyWithoutInvoiceNestedInput;

    @Field(() => ReminderUpdateManyWithoutInvoiceNestedInput, {nullable:true})
    @Type(() => ReminderUpdateManyWithoutInvoiceNestedInput)
    reminders?: ReminderUpdateManyWithoutInvoiceNestedInput;
}
