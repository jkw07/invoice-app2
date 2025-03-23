import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VatRateType } from '../prisma/vat-rate-type.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { VatRateCountAggregate } from './vat-rate-count-aggregate.output';
import { VatRateAvgAggregate } from './vat-rate-avg-aggregate.output';
import { VatRateSumAggregate } from './vat-rate-sum-aggregate.output';
import { VatRateMinAggregate } from './vat-rate-min-aggregate.output';
import { VatRateMaxAggregate } from './vat-rate-max-aggregate.output';

@ObjectType()
export class VatRateGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => VatRateType, {nullable:false})
    type!: `${VatRateType}`;

    @Field(() => GraphQLDecimal, {nullable:true})
    rate?: Decimal;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => VatRateCountAggregate, {nullable:true})
    _count?: VatRateCountAggregate;

    @Field(() => VatRateAvgAggregate, {nullable:true})
    _avg?: VatRateAvgAggregate;

    @Field(() => VatRateSumAggregate, {nullable:true})
    _sum?: VatRateSumAggregate;

    @Field(() => VatRateMinAggregate, {nullable:true})
    _min?: VatRateMinAggregate;

    @Field(() => VatRateMaxAggregate, {nullable:true})
    _max?: VatRateMaxAggregate;
}
