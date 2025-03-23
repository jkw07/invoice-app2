import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SettingCountAggregate } from './setting-count-aggregate.output';
import { SettingAvgAggregate } from './setting-avg-aggregate.output';
import { SettingSumAggregate } from './setting-sum-aggregate.output';
import { SettingMinAggregate } from './setting-min-aggregate.output';
import { SettingMaxAggregate } from './setting-max-aggregate.output';

@ObjectType()
export class AggregateSetting {

    @Field(() => SettingCountAggregate, {nullable:true})
    _count?: SettingCountAggregate;

    @Field(() => SettingAvgAggregate, {nullable:true})
    _avg?: SettingAvgAggregate;

    @Field(() => SettingSumAggregate, {nullable:true})
    _sum?: SettingSumAggregate;

    @Field(() => SettingMinAggregate, {nullable:true})
    _min?: SettingMinAggregate;

    @Field(() => SettingMaxAggregate, {nullable:true})
    _max?: SettingMaxAggregate;
}
