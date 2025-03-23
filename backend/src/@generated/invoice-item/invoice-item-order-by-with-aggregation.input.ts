import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { Type } from 'class-transformer';
import { InvoiceItemCountOrderByAggregateInput } from './invoice-item-count-order-by-aggregate.input';
import { InvoiceItemAvgOrderByAggregateInput } from './invoice-item-avg-order-by-aggregate.input';
import { InvoiceItemMaxOrderByAggregateInput } from './invoice-item-max-order-by-aggregate.input';
import { InvoiceItemMinOrderByAggregateInput } from './invoice-item-min-order-by-aggregate.input';
import { InvoiceItemSumOrderByAggregateInput } from './invoice-item-sum-order-by-aggregate.input';

@InputType()
export class InvoiceItemOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    invoiceId?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    productId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    unit?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    quantity?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    unitPrice?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    taxType?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    taxRate?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    discount?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    totalNet?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    totalTax?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    totalGross?: `${SortOrder}`;

    @Field(() => InvoiceItemCountOrderByAggregateInput, {nullable:true})
    @Type(() => InvoiceItemCountOrderByAggregateInput)
    _count?: InvoiceItemCountOrderByAggregateInput;

    @Field(() => InvoiceItemAvgOrderByAggregateInput, {nullable:true})
    @Type(() => InvoiceItemAvgOrderByAggregateInput)
    _avg?: InvoiceItemAvgOrderByAggregateInput;

    @Field(() => InvoiceItemMaxOrderByAggregateInput, {nullable:true})
    @Type(() => InvoiceItemMaxOrderByAggregateInput)
    _max?: InvoiceItemMaxOrderByAggregateInput;

    @Field(() => InvoiceItemMinOrderByAggregateInput, {nullable:true})
    @Type(() => InvoiceItemMinOrderByAggregateInput)
    _min?: InvoiceItemMinOrderByAggregateInput;

    @Field(() => InvoiceItemSumOrderByAggregateInput, {nullable:true})
    @Type(() => InvoiceItemSumOrderByAggregateInput)
    _sum?: InvoiceItemSumOrderByAggregateInput;
}
