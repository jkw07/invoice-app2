import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutCompaniesInput } from './user-update-without-companies.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutCompaniesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutCompaniesInput, {nullable:false})
    @Type(() => UserUpdateWithoutCompaniesInput)
    data!: UserUpdateWithoutCompaniesInput;
}
