import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CompanyUncheckedUpdateManyWithoutUserNestedInput } from '../company/company-unchecked-update-many-without-user-nested.input';
import { Type } from 'class-transformer';
import { VatRateUncheckedUpdateManyWithoutUserNestedInput } from '../vat-rate/vat-rate-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutPaymentsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password_hash?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => CompanyUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    @Type(() => CompanyUncheckedUpdateManyWithoutUserNestedInput)
    companies?: CompanyUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => VatRateUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    @Type(() => VatRateUncheckedUpdateManyWithoutUserNestedInput)
    vatRates?: VatRateUncheckedUpdateManyWithoutUserNestedInput;
}
