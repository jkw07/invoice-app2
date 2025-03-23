import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VatRateWhereInput } from './vat-rate-where.input';
import { Type } from 'class-transformer';
import { VatRateOrderByWithAggregationInput } from './vat-rate-order-by-with-aggregation.input';
import { VatRateScalarFieldEnum } from './vat-rate-scalar-field.enum';
import { VatRateScalarWhereWithAggregatesInput } from './vat-rate-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { VatRateCountAggregateInput } from './vat-rate-count-aggregate.input';
import { VatRateAvgAggregateInput } from './vat-rate-avg-aggregate.input';
import { VatRateSumAggregateInput } from './vat-rate-sum-aggregate.input';
import { VatRateMinAggregateInput } from './vat-rate-min-aggregate.input';
import { VatRateMaxAggregateInput } from './vat-rate-max-aggregate.input';

@ArgsType()
export class VatRateGroupByArgs {

    @Field(() => VatRateWhereInput, {nullable:true})
    @Type(() => VatRateWhereInput)
    where?: VatRateWhereInput;

    @Field(() => [VatRateOrderByWithAggregationInput], {nullable:true})
    @Type(() => VatRateOrderByWithAggregationInput)
    orderBy?: Array<VatRateOrderByWithAggregationInput>;

    @Field(() => [VatRateScalarFieldEnum], {nullable:false})
    by!: Array<`${VatRateScalarFieldEnum}`>;

    @Field(() => VatRateScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => VatRateScalarWhereWithAggregatesInput)
    having?: VatRateScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => VatRateCountAggregateInput, {nullable:true})
    @Type(() => VatRateCountAggregateInput)
    _count?: VatRateCountAggregateInput;

    @Field(() => VatRateAvgAggregateInput, {nullable:true})
    @Type(() => VatRateAvgAggregateInput)
    _avg?: VatRateAvgAggregateInput;

    @Field(() => VatRateSumAggregateInput, {nullable:true})
    @Type(() => VatRateSumAggregateInput)
    _sum?: VatRateSumAggregateInput;

    @Field(() => VatRateMinAggregateInput, {nullable:true})
    @Type(() => VatRateMinAggregateInput)
    _min?: VatRateMinAggregateInput;

    @Field(() => VatRateMaxAggregateInput, {nullable:true})
    @Type(() => VatRateMaxAggregateInput)
    _max?: VatRateMaxAggregateInput;
}
