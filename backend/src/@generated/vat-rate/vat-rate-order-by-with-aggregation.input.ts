import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { Type } from 'class-transformer';
import { VatRateCountOrderByAggregateInput } from './vat-rate-count-order-by-aggregate.input';
import { VatRateAvgOrderByAggregateInput } from './vat-rate-avg-order-by-aggregate.input';
import { VatRateMaxOrderByAggregateInput } from './vat-rate-max-order-by-aggregate.input';
import { VatRateMinOrderByAggregateInput } from './vat-rate-min-order-by-aggregate.input';
import { VatRateSumOrderByAggregateInput } from './vat-rate-sum-order-by-aggregate.input';

@InputType()
export class VatRateOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    rate?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => VatRateCountOrderByAggregateInput, {nullable:true})
    @Type(() => VatRateCountOrderByAggregateInput)
    _count?: VatRateCountOrderByAggregateInput;

    @Field(() => VatRateAvgOrderByAggregateInput, {nullable:true})
    @Type(() => VatRateAvgOrderByAggregateInput)
    _avg?: VatRateAvgOrderByAggregateInput;

    @Field(() => VatRateMaxOrderByAggregateInput, {nullable:true})
    @Type(() => VatRateMaxOrderByAggregateInput)
    _max?: VatRateMaxOrderByAggregateInput;

    @Field(() => VatRateMinOrderByAggregateInput, {nullable:true})
    @Type(() => VatRateMinOrderByAggregateInput)
    _min?: VatRateMinOrderByAggregateInput;

    @Field(() => VatRateSumOrderByAggregateInput, {nullable:true})
    @Type(() => VatRateSumOrderByAggregateInput)
    _sum?: VatRateSumOrderByAggregateInput;
}
