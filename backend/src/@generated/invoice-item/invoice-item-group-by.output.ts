import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { VatRateType } from '../prisma/vat-rate-type.enum';
import { InvoiceItemCountAggregate } from './invoice-item-count-aggregate.output';
import { InvoiceItemAvgAggregate } from './invoice-item-avg-aggregate.output';
import { InvoiceItemSumAggregate } from './invoice-item-sum-aggregate.output';
import { InvoiceItemMinAggregate } from './invoice-item-min-aggregate.output';
import { InvoiceItemMaxAggregate } from './invoice-item-max-aggregate.output';

@ObjectType()
export class InvoiceItemGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    invoiceId!: number;

    @Field(() => Int, {nullable:true})
    productId?: number;

    @Field(() => String, {nullable:true})
    unit?: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    quantity!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    unitPrice!: Decimal;

    @Field(() => VatRateType, {nullable:false})
    taxType!: `${VatRateType}`;

    @Field(() => GraphQLDecimal, {nullable:true})
    taxRate?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    discount?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    totalNet!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    totalTax?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    totalGross!: Decimal;

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
