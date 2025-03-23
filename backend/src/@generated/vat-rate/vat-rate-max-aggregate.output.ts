import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VatRateType } from '../prisma/vat-rate-type.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class VatRateMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => VatRateType, {nullable:true})
    type?: `${VatRateType}`;

    @Field(() => GraphQLDecimal, {nullable:true})
    rate?: Decimal;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
