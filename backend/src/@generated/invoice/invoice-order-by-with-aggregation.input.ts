import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { InvoiceCountOrderByAggregateInput } from './invoice-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { InvoiceAvgOrderByAggregateInput } from './invoice-avg-order-by-aggregate.input';
import { InvoiceMaxOrderByAggregateInput } from './invoice-max-order-by-aggregate.input';
import { InvoiceMinOrderByAggregateInput } from './invoice-min-order-by-aggregate.input';
import { InvoiceSumOrderByAggregateInput } from './invoice-sum-order-by-aggregate.input';

@InputType()
export class InvoiceOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    companyId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    buyerId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    paymentId?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    recipient?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    invoiceType?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    invoiceNo?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    issuedDate?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    transactionDate?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    dueDate?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    paymentMethod?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    paymentDate?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    totalAmount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    currency?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => InvoiceCountOrderByAggregateInput, {nullable:true})
    @Type(() => InvoiceCountOrderByAggregateInput)
    _count?: InvoiceCountOrderByAggregateInput;

    @Field(() => InvoiceAvgOrderByAggregateInput, {nullable:true})
    @Type(() => InvoiceAvgOrderByAggregateInput)
    _avg?: InvoiceAvgOrderByAggregateInput;

    @Field(() => InvoiceMaxOrderByAggregateInput, {nullable:true})
    @Type(() => InvoiceMaxOrderByAggregateInput)
    _max?: InvoiceMaxOrderByAggregateInput;

    @Field(() => InvoiceMinOrderByAggregateInput, {nullable:true})
    @Type(() => InvoiceMinOrderByAggregateInput)
    _min?: InvoiceMinOrderByAggregateInput;

    @Field(() => InvoiceSumOrderByAggregateInput, {nullable:true})
    @Type(() => InvoiceSumOrderByAggregateInput)
    _sum?: InvoiceSumOrderByAggregateInput;
}
