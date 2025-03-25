import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { VatRateUpdateManyWithoutUserNestedInput } from '../vat-rate/vat-rate-update-many-without-user-nested.input';
import { Type } from 'class-transformer';
import { PaymentUpdateManyWithoutUserNestedInput } from '../payment/payment-update-many-without-user-nested.input';

@InputType()
export class UserUpdateWithoutCompaniesInput {

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

    @Field(() => VatRateUpdateManyWithoutUserNestedInput, {nullable:true})
    @Type(() => VatRateUpdateManyWithoutUserNestedInput)
    vatRates?: VatRateUpdateManyWithoutUserNestedInput;

    @Field(() => PaymentUpdateManyWithoutUserNestedInput, {nullable:true})
    @Type(() => PaymentUpdateManyWithoutUserNestedInput)
    payments?: PaymentUpdateManyWithoutUserNestedInput;
}
