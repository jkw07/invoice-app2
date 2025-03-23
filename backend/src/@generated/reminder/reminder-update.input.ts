import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { CompanyUpdateOneRequiredWithoutRemindersNestedInput } from '../company/company-update-one-required-without-reminders-nested.input';
import { Type } from 'class-transformer';
import { InvoiceUpdateOneWithoutRemindersNestedInput } from '../invoice/invoice-update-one-without-reminders-nested.input';

@InputType()
export class ReminderUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    reminderType?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    reminderDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    completed?: BoolFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    message?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => CompanyUpdateOneRequiredWithoutRemindersNestedInput, {nullable:true})
    @Type(() => CompanyUpdateOneRequiredWithoutRemindersNestedInput)
    company?: CompanyUpdateOneRequiredWithoutRemindersNestedInput;

    @Field(() => InvoiceUpdateOneWithoutRemindersNestedInput, {nullable:true})
    @Type(() => InvoiceUpdateOneWithoutRemindersNestedInput)
    invoice?: InvoiceUpdateOneWithoutRemindersNestedInput;
}
