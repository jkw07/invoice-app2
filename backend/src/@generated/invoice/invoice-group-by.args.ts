import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InvoiceWhereInput } from './invoice-where.input';
import { Type } from 'class-transformer';
import { InvoiceOrderByWithAggregationInput } from './invoice-order-by-with-aggregation.input';
import { InvoiceScalarFieldEnum } from './invoice-scalar-field.enum';
import { InvoiceScalarWhereWithAggregatesInput } from './invoice-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { InvoiceCountAggregateInput } from './invoice-count-aggregate.input';
import { InvoiceAvgAggregateInput } from './invoice-avg-aggregate.input';
import { InvoiceSumAggregateInput } from './invoice-sum-aggregate.input';
import { InvoiceMinAggregateInput } from './invoice-min-aggregate.input';
import { InvoiceMaxAggregateInput } from './invoice-max-aggregate.input';

@ArgsType()
export class InvoiceGroupByArgs {

    @Field(() => InvoiceWhereInput, {nullable:true})
    @Type(() => InvoiceWhereInput)
    where?: InvoiceWhereInput;

    @Field(() => [InvoiceOrderByWithAggregationInput], {nullable:true})
    @Type(() => InvoiceOrderByWithAggregationInput)
    orderBy?: Array<InvoiceOrderByWithAggregationInput>;

    @Field(() => [InvoiceScalarFieldEnum], {nullable:false})
    by!: Array<`${InvoiceScalarFieldEnum}`>;

    @Field(() => InvoiceScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => InvoiceScalarWhereWithAggregatesInput)
    having?: InvoiceScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => InvoiceCountAggregateInput, {nullable:true})
    @Type(() => InvoiceCountAggregateInput)
    _count?: InvoiceCountAggregateInput;

    @Field(() => InvoiceAvgAggregateInput, {nullable:true})
    @Type(() => InvoiceAvgAggregateInput)
    _avg?: InvoiceAvgAggregateInput;

    @Field(() => InvoiceSumAggregateInput, {nullable:true})
    @Type(() => InvoiceSumAggregateInput)
    _sum?: InvoiceSumAggregateInput;

    @Field(() => InvoiceMinAggregateInput, {nullable:true})
    @Type(() => InvoiceMinAggregateInput)
    _min?: InvoiceMinAggregateInput;

    @Field(() => InvoiceMaxAggregateInput, {nullable:true})
    @Type(() => InvoiceMaxAggregateInput)
    _max?: InvoiceMaxAggregateInput;
}
