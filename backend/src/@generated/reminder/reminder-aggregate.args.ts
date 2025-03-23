import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReminderWhereInput } from './reminder-where.input';
import { Type } from 'class-transformer';
import { ReminderOrderByWithRelationInput } from './reminder-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ReminderWhereUniqueInput } from './reminder-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReminderCountAggregateInput } from './reminder-count-aggregate.input';
import { ReminderAvgAggregateInput } from './reminder-avg-aggregate.input';
import { ReminderSumAggregateInput } from './reminder-sum-aggregate.input';
import { ReminderMinAggregateInput } from './reminder-min-aggregate.input';
import { ReminderMaxAggregateInput } from './reminder-max-aggregate.input';

@ArgsType()
export class ReminderAggregateArgs {

    @Field(() => ReminderWhereInput, {nullable:true})
    @Type(() => ReminderWhereInput)
    where?: ReminderWhereInput;

    @Field(() => [ReminderOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReminderOrderByWithRelationInput>;

    @Field(() => ReminderWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReminderWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ReminderCountAggregateInput, {nullable:true})
    _count?: ReminderCountAggregateInput;

    @Field(() => ReminderAvgAggregateInput, {nullable:true})
    _avg?: ReminderAvgAggregateInput;

    @Field(() => ReminderSumAggregateInput, {nullable:true})
    _sum?: ReminderSumAggregateInput;

    @Field(() => ReminderMinAggregateInput, {nullable:true})
    _min?: ReminderMinAggregateInput;

    @Field(() => ReminderMaxAggregateInput, {nullable:true})
    _max?: ReminderMaxAggregateInput;
}
