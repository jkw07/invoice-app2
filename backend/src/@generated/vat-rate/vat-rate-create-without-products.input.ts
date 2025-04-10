import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VatRateType } from '../prisma/vat-rate-type.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { UserCreateNestedOneWithoutVatRatesInput } from '../user/user-create-nested-one-without-vat-rates.input';

@InputType()
export class VatRateCreateWithoutProductsInput {

    @Field(() => VatRateType, {nullable:false})
    type!: `${VatRateType}`;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    rate?: Decimal;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutVatRatesInput, {nullable:true})
    @Type(() => UserCreateNestedOneWithoutVatRatesInput)
    user?: UserCreateNestedOneWithoutVatRatesInput;
}
