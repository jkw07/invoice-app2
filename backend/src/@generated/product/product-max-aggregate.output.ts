import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { VatRateType } from '../prisma/vat-rate-type.enum';

@ObjectType()
export class ProductMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    companyId?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    price?: Decimal;

    @Field(() => String, {nullable:true})
    unit?: string;

    @Field(() => VatRateType, {nullable:true})
    taxType?: `${VatRateType}`;

    @Field(() => GraphQLDecimal, {nullable:true})
    taxRate?: Decimal;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
