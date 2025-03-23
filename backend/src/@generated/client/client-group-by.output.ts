import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ClientCountAggregate } from './client-count-aggregate.output';
import { ClientAvgAggregate } from './client-avg-aggregate.output';
import { ClientSumAggregate } from './client-sum-aggregate.output';
import { ClientMinAggregate } from './client-min-aggregate.output';
import { ClientMaxAggregate } from './client-max-aggregate.output';

@ObjectType()
export class ClientGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    companyId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    tin?: string;

    @Field(() => String, {nullable:true})
    bin?: string;

    @Field(() => String, {nullable:true})
    street?: string;

    @Field(() => String, {nullable:true})
    buildingNo?: string;

    @Field(() => String, {nullable:true})
    apartmentNo?: string;

    @Field(() => String, {nullable:true})
    zipCode?: string;

    @Field(() => String, {nullable:true})
    city?: string;

    @Field(() => String, {nullable:true})
    province?: string;

    @Field(() => String, {nullable:true})
    county?: string;

    @Field(() => String, {nullable:true})
    municipality?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ClientCountAggregate, {nullable:true})
    _count?: ClientCountAggregate;

    @Field(() => ClientAvgAggregate, {nullable:true})
    _avg?: ClientAvgAggregate;

    @Field(() => ClientSumAggregate, {nullable:true})
    _sum?: ClientSumAggregate;

    @Field(() => ClientMinAggregate, {nullable:true})
    _min?: ClientMinAggregate;

    @Field(() => ClientMaxAggregate, {nullable:true})
    _max?: ClientMaxAggregate;
}
