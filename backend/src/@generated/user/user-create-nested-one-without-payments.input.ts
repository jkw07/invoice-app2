import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPaymentsInput } from './user-create-without-payments.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPaymentsInput } from './user-create-or-connect-without-payments.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutPaymentsInput {

    @Field(() => UserCreateWithoutPaymentsInput, {nullable:true})
    @Type(() => UserCreateWithoutPaymentsInput)
    create?: UserCreateWithoutPaymentsInput;

    @Field(() => UserCreateOrConnectWithoutPaymentsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPaymentsInput)
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
