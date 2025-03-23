import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SettingCountOrderByAggregateInput } from './setting-count-order-by-aggregate.input';
import { SettingAvgOrderByAggregateInput } from './setting-avg-order-by-aggregate.input';
import { SettingMaxOrderByAggregateInput } from './setting-max-order-by-aggregate.input';
import { SettingMinOrderByAggregateInput } from './setting-min-order-by-aggregate.input';
import { SettingSumOrderByAggregateInput } from './setting-sum-order-by-aggregate.input';

@InputType()
export class SettingOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    companyId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    defaultCurrency?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    exemptFromTax?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SettingCountOrderByAggregateInput, {nullable:true})
    _count?: SettingCountOrderByAggregateInput;

    @Field(() => SettingAvgOrderByAggregateInput, {nullable:true})
    _avg?: SettingAvgOrderByAggregateInput;

    @Field(() => SettingMaxOrderByAggregateInput, {nullable:true})
    _max?: SettingMaxOrderByAggregateInput;

    @Field(() => SettingMinOrderByAggregateInput, {nullable:true})
    _min?: SettingMinOrderByAggregateInput;

    @Field(() => SettingSumOrderByAggregateInput, {nullable:true})
    _sum?: SettingSumOrderByAggregateInput;
}
