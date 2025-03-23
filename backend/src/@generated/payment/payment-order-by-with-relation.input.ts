import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { InvoiceOrderByRelationAggregateInput } from '../invoice/invoice-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';

@InputType()
export class PaymentOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    method?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => InvoiceOrderByRelationAggregateInput, {nullable:true})
    @Type(() => InvoiceOrderByRelationAggregateInput)
    invoices?: InvoiceOrderByRelationAggregateInput;
}
