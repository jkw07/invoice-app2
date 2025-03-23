import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCompaniesInput } from './user-create-without-companies.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCompaniesInput } from './user-create-or-connect-without-companies.input';
import { UserUpsertWithoutCompaniesInput } from './user-upsert-without-companies.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutCompaniesInput } from './user-update-to-one-with-where-without-companies.input';

@InputType()
export class UserUpdateOneRequiredWithoutCompaniesNestedInput {

    @Field(() => UserCreateWithoutCompaniesInput, {nullable:true})
    @Type(() => UserCreateWithoutCompaniesInput)
    create?: UserCreateWithoutCompaniesInput;

    @Field(() => UserCreateOrConnectWithoutCompaniesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCompaniesInput)
    connectOrCreate?: UserCreateOrConnectWithoutCompaniesInput;

    @Field(() => UserUpsertWithoutCompaniesInput, {nullable:true})
    @Type(() => UserUpsertWithoutCompaniesInput)
    upsert?: UserUpsertWithoutCompaniesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutCompaniesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutCompaniesInput)
    update?: UserUpdateToOneWithWhereWithoutCompaniesInput;
}
