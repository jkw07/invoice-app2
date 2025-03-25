import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutVatRatesInput } from './user-create-without-vat-rates.input';

@InputType()
export class UserCreateOrConnectWithoutVatRatesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutVatRatesInput, {nullable:false})
    @Type(() => UserCreateWithoutVatRatesInput)
    create!: UserCreateWithoutVatRatesInput;
}
