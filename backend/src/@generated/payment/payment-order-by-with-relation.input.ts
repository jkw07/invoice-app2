import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { InvoiceOrderByRelationAggregateInput } from '../invoice/invoice-order-by-relation-aggregate.input';

@InputType()
export class PaymentOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    method?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    user?: UserOrderByWithRelationInput;

    @Field(() => InvoiceOrderByRelationAggregateInput, {nullable:true})
    @Type(() => InvoiceOrderByRelationAggregateInput)
    invoices?: InvoiceOrderByRelationAggregateInput;
}
