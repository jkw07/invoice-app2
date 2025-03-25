import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutPaymentsInput } from './user-update-without-payments.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPaymentsInput } from './user-create-without-payments.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutPaymentsInput {

    @Field(() => UserUpdateWithoutPaymentsInput, {nullable:false})
    @Type(() => UserUpdateWithoutPaymentsInput)
    update!: UserUpdateWithoutPaymentsInput;

    @Field(() => UserCreateWithoutPaymentsInput, {nullable:false})
    @Type(() => UserCreateWithoutPaymentsInput)
    create!: UserCreateWithoutPaymentsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
