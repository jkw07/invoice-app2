import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InvoiceItemWhereInput } from './invoice-item-where.input';
import { Type } from 'class-transformer';
import { InvoiceItemOrderByWithAggregationInput } from './invoice-item-order-by-with-aggregation.input';
import { InvoiceItemScalarFieldEnum } from './invoice-item-scalar-field.enum';
import { InvoiceItemScalarWhereWithAggregatesInput } from './invoice-item-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { InvoiceItemCountAggregateInput } from './invoice-item-count-aggregate.input';
import { InvoiceItemAvgAggregateInput } from './invoice-item-avg-aggregate.input';
import { InvoiceItemSumAggregateInput } from './invoice-item-sum-aggregate.input';
import { InvoiceItemMinAggregateInput } from './invoice-item-min-aggregate.input';
import { InvoiceItemMaxAggregateInput } from './invoice-item-max-aggregate.input';

@ArgsType()
export class InvoiceItemGroupByArgs {

    @Field(() => InvoiceItemWhereInput, {nullable:true})
    @Type(() => InvoiceItemWhereInput)
    where?: InvoiceItemWhereInput;

    @Field(() => [InvoiceItemOrderByWithAggregationInput], {nullable:true})
    @Type(() => InvoiceItemOrderByWithAggregationInput)
    orderBy?: Array<InvoiceItemOrderByWithAggregationInput>;

    @Field(() => [InvoiceItemScalarFieldEnum], {nullable:false})
    by!: Array<`${InvoiceItemScalarFieldEnum}`>;

    @Field(() => InvoiceItemScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => InvoiceItemScalarWhereWithAggregatesInput)
    having?: InvoiceItemScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => InvoiceItemCountAggregateInput, {nullable:true})
    @Type(() => InvoiceItemCountAggregateInput)
    _count?: InvoiceItemCountAggregateInput;

    @Field(() => InvoiceItemAvgAggregateInput, {nullable:true})
    @Type(() => InvoiceItemAvgAggregateInput)
    _avg?: InvoiceItemAvgAggregateInput;

    @Field(() => InvoiceItemSumAggregateInput, {nullable:true})
    @Type(() => InvoiceItemSumAggregateInput)
    _sum?: InvoiceItemSumAggregateInput;

    @Field(() => InvoiceItemMinAggregateInput, {nullable:true})
    @Type(() => InvoiceItemMinAggregateInput)
    _min?: InvoiceItemMinAggregateInput;

    @Field(() => InvoiceItemMaxAggregateInput, {nullable:true})
    @Type(() => InvoiceItemMaxAggregateInput)
    _max?: InvoiceItemMaxAggregateInput;
}
