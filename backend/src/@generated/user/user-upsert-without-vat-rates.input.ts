import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutVatRatesInput } from './user-update-without-vat-rates.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutVatRatesInput } from './user-create-without-vat-rates.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutVatRatesInput {

    @Field(() => UserUpdateWithoutVatRatesInput, {nullable:false})
    @Type(() => UserUpdateWithoutVatRatesInput)
    update!: UserUpdateWithoutVatRatesInput;

    @Field(() => UserCreateWithoutVatRatesInput, {nullable:false})
    @Type(() => UserCreateWithoutVatRatesInput)
    create!: UserCreateWithoutVatRatesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
