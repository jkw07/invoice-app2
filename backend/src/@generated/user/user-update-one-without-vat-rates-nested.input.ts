import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutVatRatesInput } from './user-create-without-vat-rates.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutVatRatesInput } from './user-create-or-connect-without-vat-rates.input';
import { UserUpsertWithoutVatRatesInput } from './user-upsert-without-vat-rates.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutVatRatesInput } from './user-update-to-one-with-where-without-vat-rates.input';

@InputType()
export class UserUpdateOneWithoutVatRatesNestedInput {

    @Field(() => UserCreateWithoutVatRatesInput, {nullable:true})
    @Type(() => UserCreateWithoutVatRatesInput)
    create?: UserCreateWithoutVatRatesInput;

    @Field(() => UserCreateOrConnectWithoutVatRatesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutVatRatesInput)
    connectOrCreate?: UserCreateOrConnectWithoutVatRatesInput;

    @Field(() => UserUpsertWithoutVatRatesInput, {nullable:true})
    @Type(() => UserUpsertWithoutVatRatesInput)
    upsert?: UserUpsertWithoutVatRatesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutVatRatesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutVatRatesInput)
    update?: UserUpdateToOneWithWhereWithoutVatRatesInput;
}
