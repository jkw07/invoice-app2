import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { VatRateCountAggregate } from './vat-rate-count-aggregate.output';
import { VatRateAvgAggregate } from './vat-rate-avg-aggregate.output';
import { VatRateSumAggregate } from './vat-rate-sum-aggregate.output';
import { VatRateMinAggregate } from './vat-rate-min-aggregate.output';
import { VatRateMaxAggregate } from './vat-rate-max-aggregate.output';

@ObjectType()
export class AggregateVatRate {

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
