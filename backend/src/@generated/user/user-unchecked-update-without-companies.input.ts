import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { VatRateUncheckedUpdateManyWithoutUserNestedInput } from '../vat-rate/vat-rate-unchecked-update-many-without-user-nested.input';
import { Type } from 'class-transformer';
import { PaymentUncheckedUpdateManyWithoutUserNestedInput } from '../payment/payment-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutCompaniesInput {

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

    @Field(() => VatRateUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    @Type(() => VatRateUncheckedUpdateManyWithoutUserNestedInput)
    vatRates?: VatRateUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => PaymentUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    @Type(() => PaymentUncheckedUpdateManyWithoutUserNestedInput)
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput;
}
