import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ClientCountOrderByAggregateInput } from './client-count-order-by-aggregate.input';
import { ClientAvgOrderByAggregateInput } from './client-avg-order-by-aggregate.input';
import { ClientMaxOrderByAggregateInput } from './client-max-order-by-aggregate.input';
import { ClientMinOrderByAggregateInput } from './client-min-order-by-aggregate.input';
import { ClientSumOrderByAggregateInput } from './client-sum-order-by-aggregate.input';

@InputType()
export class ClientOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    companyId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    tin?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    bin?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    street?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    buildingNo?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    apartmentNo?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    zipCode?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    city?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    province?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    county?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    municipality?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    email?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    phone?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => ClientCountOrderByAggregateInput, {nullable:true})
    _count?: ClientCountOrderByAggregateInput;

    @Field(() => ClientAvgOrderByAggregateInput, {nullable:true})
    _avg?: ClientAvgOrderByAggregateInput;

    @Field(() => ClientMaxOrderByAggregateInput, {nullable:true})
    _max?: ClientMaxOrderByAggregateInput;

    @Field(() => ClientMinOrderByAggregateInput, {nullable:true})
    _min?: ClientMinOrderByAggregateInput;

    @Field(() => ClientSumOrderByAggregateInput, {nullable:true})
    _sum?: ClientSumOrderByAggregateInput;
}
