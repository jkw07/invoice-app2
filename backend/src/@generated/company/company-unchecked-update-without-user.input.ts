import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { SettingUncheckedUpdateManyWithoutCompanyNestedInput } from '../setting/setting-unchecked-update-many-without-company-nested.input';
import { InvoiceUncheckedUpdateManyWithoutCompanyNestedInput } from '../invoice/invoice-unchecked-update-many-without-company-nested.input';
import { Type } from 'class-transformer';
import { ClientUncheckedUpdateManyWithoutCompanyNestedInput } from '../client/client-unchecked-update-many-without-company-nested.input';
import { ProductUncheckedUpdateManyWithoutCompanyNestedInput } from '../product/product-unchecked-update-many-without-company-nested.input';
import { ReminderUncheckedUpdateManyWithoutCompanyNestedInput } from '../reminder/reminder-unchecked-update-many-without-company-nested.input';

@InputType()
export class CompanyUncheckedUpdateWithoutUserInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

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

    @Field(() => SettingUncheckedUpdateManyWithoutCompanyNestedInput, {nullable:true})
    settings?: SettingUncheckedUpdateManyWithoutCompanyNestedInput;

    @Field(() => InvoiceUncheckedUpdateManyWithoutCompanyNestedInput, {nullable:true})
    @Type(() => InvoiceUncheckedUpdateManyWithoutCompanyNestedInput)
    invoices?: InvoiceUncheckedUpdateManyWithoutCompanyNestedInput;

    @Field(() => ClientUncheckedUpdateManyWithoutCompanyNestedInput, {nullable:true})
    @Type(() => ClientUncheckedUpdateManyWithoutCompanyNestedInput)
    clients?: ClientUncheckedUpdateManyWithoutCompanyNestedInput;

    @Field(() => ProductUncheckedUpdateManyWithoutCompanyNestedInput, {nullable:true})
    @Type(() => ProductUncheckedUpdateManyWithoutCompanyNestedInput)
    products?: ProductUncheckedUpdateManyWithoutCompanyNestedInput;

    @Field(() => ReminderUncheckedUpdateManyWithoutCompanyNestedInput, {nullable:true})
    @Type(() => ReminderUncheckedUpdateManyWithoutCompanyNestedInput)
    reminders?: ReminderUncheckedUpdateManyWithoutCompanyNestedInput;
}
