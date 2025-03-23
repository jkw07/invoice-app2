import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ReminderCountAggregate } from './reminder-count-aggregate.output';
import { ReminderAvgAggregate } from './reminder-avg-aggregate.output';
import { ReminderSumAggregate } from './reminder-sum-aggregate.output';
import { ReminderMinAggregate } from './reminder-min-aggregate.output';
import { ReminderMaxAggregate } from './reminder-max-aggregate.output';

@ObjectType()
export class AggregateReminder {

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
