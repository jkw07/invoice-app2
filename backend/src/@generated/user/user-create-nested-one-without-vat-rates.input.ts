import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutVatRatesInput } from './user-create-without-vat-rates.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutVatRatesInput } from './user-create-or-connect-without-vat-rates.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutVatRatesInput {

    @Field(() => UserCreateWithoutVatRatesInput, {nullable:true})
    @Type(() => UserCreateWithoutVatRatesInput)
    create?: UserCreateWithoutVatRatesInput;

    @Field(() => UserCreateOrConnectWithoutVatRatesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutVatRatesInput)
    connectOrCreate?: UserCreateOrConnectWithoutVatRatesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
