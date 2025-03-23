import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyUncheckedCreateNestedManyWithoutUserInput } from '../company/company-unchecked-create-nested-many-without-user.input';
import { Type } from 'class-transformer';

@InputType()
export class UserUncheckedCreateInput {

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

    @Field(() => CompanyUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => CompanyUncheckedCreateNestedManyWithoutUserInput)
    companies?: CompanyUncheckedCreateNestedManyWithoutUserInput;
}
