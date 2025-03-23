import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VatRateWhereInput } from './vat-rate-where.input';
import { Type } from 'class-transformer';
import { VatRateOrderByWithRelationInput } from './vat-rate-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { VatRateWhereUniqueInput } from './vat-rate-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VatRateCountAggregateInput } from './vat-rate-count-aggregate.input';
import { VatRateAvgAggregateInput } from './vat-rate-avg-aggregate.input';
import { VatRateSumAggregateInput } from './vat-rate-sum-aggregate.input';
import { VatRateMinAggregateInput } from './vat-rate-min-aggregate.input';
import { VatRateMaxAggregateInput } from './vat-rate-max-aggregate.input';

@ArgsType()
export class VatRateAggregateArgs {

    @Field(() => VatRateWhereInput, {nullable:true})
    @Type(() => VatRateWhereInput)
    where?: VatRateWhereInput;

    @Field(() => [VatRateOrderByWithRelationInput], {nullable:true})
    @Type(() => VatRateOrderByWithRelationInput)
    orderBy?: Array<VatRateOrderByWithRelationInput>;

    @Field(() => VatRateWhereUniqueInput, {nullable:true})
    @Type(() => VatRateWhereUniqueInput)
    cursor?: Prisma.AtLeast<VatRateWhereUniqueInput, 'id' | 'type_rate'>;

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
