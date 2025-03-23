import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CompanyUpdateOneRequiredWithoutSettingsNestedInput } from '../company/company-update-one-required-without-settings-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class SettingUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    defaultCurrency?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    exemptFromTax?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => CompanyUpdateOneRequiredWithoutSettingsNestedInput, {nullable:true})
    @Type(() => CompanyUpdateOneRequiredWithoutSettingsNestedInput)
    company?: CompanyUpdateOneRequiredWithoutSettingsNestedInput;
}
