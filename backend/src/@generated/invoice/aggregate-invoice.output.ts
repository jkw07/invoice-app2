import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { InvoiceCountAggregate } from './invoice-count-aggregate.output';
import { InvoiceAvgAggregate } from './invoice-avg-aggregate.output';
import { InvoiceSumAggregate } from './invoice-sum-aggregate.output';
import { InvoiceMinAggregate } from './invoice-min-aggregate.output';
import { InvoiceMaxAggregate } from './invoice-max-aggregate.output';

@ObjectType()
export class AggregateInvoice {

    @Field(() => InvoiceCountAggregate, {nullable:true})
    _count?: InvoiceCountAggregate;

    @Field(() => InvoiceAvgAggregate, {nullable:true})
    _avg?: InvoiceAvgAggregate;

    @Field(() => InvoiceSumAggregate, {nullable:true})
    _sum?: InvoiceSumAggregate;

    @Field(() => InvoiceMinAggregate, {nullable:true})
    _min?: InvoiceMinAggregate;

    @Field(() => InvoiceMaxAggregate, {nullable:true})
    _max?: InvoiceMaxAggregate;
}
