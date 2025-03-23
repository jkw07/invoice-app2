import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReminderCountAggregate } from './reminder-count-aggregate.output';
import { ReminderAvgAggregate } from './reminder-avg-aggregate.output';
import { ReminderSumAggregate } from './reminder-sum-aggregate.output';
import { ReminderMinAggregate } from './reminder-min-aggregate.output';
import { ReminderMaxAggregate } from './reminder-max-aggregate.output';

@ObjectType()
export class ReminderGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    companyId!: number;

    @Field(() => Int, {nullable:true})
    invoiceId?: number;

    @Field(() => String, {nullable:false})
    reminderType!: string;

    @Field(() => Date, {nullable:false})
    reminderDate!: Date | string;

    @Field(() => Boolean, {nullable:false})
    completed!: boolean;

    @Field(() => String, {nullable:false})
    message!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ReminderCountAggregate, {nullable:true})
    _count?: ReminderCountAggregate;

    @Field(() => ReminderAvgAggregate, {nullable:true})
    _avg?: ReminderAvgAggregate;

    @Field(() => ReminderSumAggregate, {nullable:true})
    _sum?: ReminderSumAggregate;

    @Field(() => ReminderMinAggregate, {nullable:true})
    _min?: ReminderMinAggregate;

    @Field(() => ReminderMaxAggregate, {nullable:true})
    _max?: ReminderMaxAggregate;
}
