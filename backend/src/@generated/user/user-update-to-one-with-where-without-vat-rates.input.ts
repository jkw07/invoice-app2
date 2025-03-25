import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutVatRatesInput } from './user-update-without-vat-rates.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutVatRatesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutVatRatesInput, {nullable:false})
    @Type(() => UserUpdateWithoutVatRatesInput)
    data!: UserUpdateWithoutVatRatesInput;
}
