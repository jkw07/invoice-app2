import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VatRateUncheckedCreateNestedManyWithoutUserInput } from '../vat-rate/vat-rate-unchecked-create-nested-many-without-user.input';
import { Type } from 'class-transformer';
import { PaymentUncheckedCreateNestedManyWithoutUserInput } from '../payment/payment-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutCompaniesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password_hash!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => VatRateUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => VatRateUncheckedCreateNestedManyWithoutUserInput)
    vatRates?: VatRateUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => PaymentUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => PaymentUncheckedCreateNestedManyWithoutUserInput)
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput;
}
