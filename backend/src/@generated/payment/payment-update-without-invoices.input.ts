import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneWithoutPaymentsNestedInput } from '../user/user-update-one-without-payments-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class PaymentUpdateWithoutInvoicesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    method?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutPaymentsNestedInput, {nullable:true})
    @Type(() => UserUpdateOneWithoutPaymentsNestedInput)
    user?: UserUpdateOneWithoutPaymentsNestedInput;
}
