import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CompanyCountOrderByAggregateInput } from './company-count-order-by-aggregate.input';
import { CompanyAvgOrderByAggregateInput } from './company-avg-order-by-aggregate.input';
import { CompanyMaxOrderByAggregateInput } from './company-max-order-by-aggregate.input';
import { CompanyMinOrderByAggregateInput } from './company-min-order-by-aggregate.input';
import { CompanySumOrderByAggregateInput } from './company-sum-order-by-aggregate.input';

@InputType()
export class CompanyOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    fullName?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    shortName?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    tin?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    bin?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    street?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    buildingNo?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    apartmentNo?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    zipCode?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    city?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    province?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    county?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    municipality?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    email?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    phone?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => CompanyCountOrderByAggregateInput, {nullable:true})
    _count?: CompanyCountOrderByAggregateInput;

    @Field(() => CompanyAvgOrderByAggregateInput, {nullable:true})
    _avg?: CompanyAvgOrderByAggregateInput;

    @Field(() => CompanyMaxOrderByAggregateInput, {nullable:true})
    _max?: CompanyMaxOrderByAggregateInput;

    @Field(() => CompanyMinOrderByAggregateInput, {nullable:true})
    _min?: CompanyMinOrderByAggregateInput;

    @Field(() => CompanySumOrderByAggregateInput, {nullable:true})
    _sum?: CompanySumOrderByAggregateInput;
}
