import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { InvoiceItemCountAggregate } from './invoice-item-count-aggregate.output';
import { InvoiceItemAvgAggregate } from './invoice-item-avg-aggregate.output';
import { InvoiceItemSumAggregate } from './invoice-item-sum-aggregate.output';
import { InvoiceItemMinAggregate } from './invoice-item-min-aggregate.output';
import { InvoiceItemMaxAggregate } from './invoice-item-max-aggregate.output';

@ObjectType()
export class AggregateInvoiceItem {

    @Field(() => InvoiceItemCountAggregate, {nullable:true})
    _count?: InvoiceItemCountAggregate;

    @Field(() => InvoiceItemAvgAggregate, {nullable:true})
    _avg?: InvoiceItemAvgAggregate;

    @Field(() => InvoiceItemSumAggregate, {nullable:true})
    _sum?: InvoiceItemSumAggregate;

    @Field(() => InvoiceItemMinAggregate, {nullable:true})
    _min?: InvoiceItemMinAggregate;

    @Field(() => InvoiceItemMaxAggregate, {nullable:true})
    _max?: InvoiceItemMaxAggregate;
}
