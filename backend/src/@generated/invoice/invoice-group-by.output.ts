import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Status } from '../prisma/status.enum';
import { InvoiceCountAggregate } from './invoice-count-aggregate.output';
import { InvoiceAvgAggregate } from './invoice-avg-aggregate.output';
import { InvoiceSumAggregate } from './invoice-sum-aggregate.output';
import { InvoiceMinAggregate } from './invoice-min-aggregate.output';
import { InvoiceMaxAggregate } from './invoice-max-aggregate.output';

@ObjectType()
export class InvoiceGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    companyId!: number;

    @Field(() => Int, {nullable:false})
    buyerId!: number;

    @Field(() => Int, {nullable:false})
    paymentId!: number;

    @Field(() => String, {nullable:true})
    recipient?: string;

    @Field(() => String, {nullable:false})
    invoiceType!: string;

    @Field(() => String, {nullable:false})
    invoiceNo!: string;

    @Field(() => Date, {nullable:false})
    issuedDate!: Date | string;

    @Field(() => Date, {nullable:true})
    transactionDate?: Date | string;

    @Field(() => Date, {nullable:false})
    dueDate!: Date | string;

    @Field(() => String, {nullable:false})
    paymentMethod!: string;

    @Field(() => Date, {nullable:true})
    paymentDate?: Date | string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    totalAmount!: Decimal;

    @Field(() => String, {nullable:false})
    currency!: string;

    @Field(() => Status, {nullable:false})
    status!: `${Status}`;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
