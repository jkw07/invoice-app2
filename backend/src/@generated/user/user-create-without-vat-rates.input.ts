import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyCreateNestedManyWithoutUserInput } from '../company/company-create-nested-many-without-user.input';
import { Type } from 'class-transformer';
import { PaymentCreateNestedManyWithoutUserInput } from '../payment/payment-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutVatRatesInput {

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

    @Field(() => CompanyCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => CompanyCreateNestedManyWithoutUserInput)
    companies?: CompanyCreateNestedManyWithoutUserInput;

    @Field(() => PaymentCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => PaymentCreateNestedManyWithoutUserInput)
    payments?: PaymentCreateNestedManyWithoutUserInput;
}
