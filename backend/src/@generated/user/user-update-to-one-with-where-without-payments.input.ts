import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutPaymentsInput } from './user-update-without-payments.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutPaymentsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutPaymentsInput, {nullable:false})
    @Type(() => UserUpdateWithoutPaymentsInput)
    data!: UserUpdateWithoutPaymentsInput;
}
