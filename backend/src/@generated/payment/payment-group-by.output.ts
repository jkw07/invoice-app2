import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PaymentCountAggregate } from './payment-count-aggregate.output';
import { PaymentAvgAggregate } from './payment-avg-aggregate.output';
import { PaymentSumAggregate } from './payment-sum-aggregate.output';
import { PaymentMinAggregate } from './payment-min-aggregate.output';
import { PaymentMaxAggregate } from './payment-max-aggregate.output';

@ObjectType()
export class PaymentGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => String, {nullable:false})
    method!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => PaymentCountAggregate, {nullable:true})
    _count?: PaymentCountAggregate;

    @Field(() => PaymentAvgAggregate, {nullable:true})
    _avg?: PaymentAvgAggregate;

    @Field(() => PaymentSumAggregate, {nullable:true})
    _sum?: PaymentSumAggregate;

    @Field(() => PaymentMinAggregate, {nullable:true})
    _min?: PaymentMinAggregate;

    @Field(() => PaymentMaxAggregate, {nullable:true})
    _max?: PaymentMaxAggregate;
}
