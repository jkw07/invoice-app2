import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPaymentsInput } from './user-create-without-payments.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPaymentsInput } from './user-create-or-connect-without-payments.input';
import { UserUpsertWithoutPaymentsInput } from './user-upsert-without-payments.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutPaymentsInput } from './user-update-to-one-with-where-without-payments.input';

@InputType()
export class UserUpdateOneWithoutPaymentsNestedInput {

    @Field(() => UserCreateWithoutPaymentsInput, {nullable:true})
    @Type(() => UserCreateWithoutPaymentsInput)
    create?: UserCreateWithoutPaymentsInput;

    @Field(() => UserCreateOrConnectWithoutPaymentsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPaymentsInput)
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput;

    @Field(() => UserUpsertWithoutPaymentsInput, {nullable:true})
    @Type(() => UserUpsertWithoutPaymentsInput)
    upsert?: UserUpsertWithoutPaymentsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutPaymentsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutPaymentsInput)
    update?: UserUpdateToOneWithWhereWithoutPaymentsInput;
}
