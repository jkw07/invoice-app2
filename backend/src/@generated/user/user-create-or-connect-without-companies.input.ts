import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCompaniesInput } from './user-create-without-companies.input';

@InputType()
export class UserCreateOrConnectWithoutCompaniesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutCompaniesInput, {nullable:false})
    @Type(() => UserCreateWithoutCompaniesInput)
    create!: UserCreateWithoutCompaniesInput;
}
