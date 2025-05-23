import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutCompaniesNestedInput } from '../user/user-update-one-required-without-companies-nested.input';
import { Type } from 'class-transformer';
import { SettingUpdateManyWithoutCompanyNestedInput } from '../setting/setting-update-many-without-company-nested.input';
import { InvoiceUpdateManyWithoutCompanyNestedInput } from '../invoice/invoice-update-many-without-company-nested.input';
import { ProductUpdateManyWithoutCompanyNestedInput } from '../product/product-update-many-without-company-nested.input';
import { ReminderUpdateManyWithoutCompanyNestedInput } from '../reminder/reminder-update-many-without-company-nested.input';

@InputType()
export class CompanyUpdateWithoutClientsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fullName?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    shortName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    tin?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    bin?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    street?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    buildingNo?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    apartmentNo?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    zipCode?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    city?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    province?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    county?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    municipality?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    email?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutCompaniesNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutCompaniesNestedInput)
    user?: UserUpdateOneRequiredWithoutCompaniesNestedInput;

    @Field(() => SettingUpdateManyWithoutCompanyNestedInput, {nullable:true})
    settings?: SettingUpdateManyWithoutCompanyNestedInput;

    @Field(() => InvoiceUpdateManyWithoutCompanyNestedInput, {nullable:true})
    @Type(() => InvoiceUpdateManyWithoutCompanyNestedInput)
    invoices?: InvoiceUpdateManyWithoutCompanyNestedInput;

    @Field(() => ProductUpdateManyWithoutCompanyNestedInput, {nullable:true})
    @Type(() => ProductUpdateManyWithoutCompanyNestedInput)
    products?: ProductUpdateManyWithoutCompanyNestedInput;

    @Field(() => ReminderUpdateManyWithoutCompanyNestedInput, {nullable:true})
    @Type(() => ReminderUpdateManyWithoutCompanyNestedInput)
    reminders?: ReminderUpdateManyWithoutCompanyNestedInput;
}
