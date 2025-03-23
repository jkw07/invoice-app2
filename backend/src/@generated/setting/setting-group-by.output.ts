import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SettingCountAggregate } from './setting-count-aggregate.output';
import { SettingAvgAggregate } from './setting-avg-aggregate.output';
import { SettingSumAggregate } from './setting-sum-aggregate.output';
import { SettingMinAggregate } from './setting-min-aggregate.output';
import { SettingMaxAggregate } from './setting-max-aggregate.output';

@ObjectType()
export class SettingGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    companyId!: number;

    @Field(() => String, {nullable:false})
    defaultCurrency!: string;

    @Field(() => Boolean, {nullable:false})
    exemptFromTax!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
