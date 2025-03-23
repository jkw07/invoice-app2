import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CompanyCountAggregate } from './company-count-aggregate.output';
import { CompanyAvgAggregate } from './company-avg-aggregate.output';
import { CompanySumAggregate } from './company-sum-aggregate.output';
import { CompanyMinAggregate } from './company-min-aggregate.output';
import { CompanyMaxAggregate } from './company-max-aggregate.output';

@ObjectType()
export class CompanyGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    fullName!: string;

    @Field(() => String, {nullable:true})
    shortName?: string;

    @Field(() => String, {nullable:false})
    tin!: string;

    @Field(() => String, {nullable:false})
    bin!: string;

    @Field(() => String, {nullable:false})
    street!: string;

    @Field(() => String, {nullable:false})
    buildingNo!: string;

    @Field(() => String, {nullable:true})
    apartmentNo?: string;

    @Field(() => String, {nullable:false})
    zipCode!: string;

    @Field(() => String, {nullable:false})
    city!: string;

    @Field(() => String, {nullable:false})
    province!: string;

    @Field(() => String, {nullable:false})
    county!: string;

    @Field(() => String, {nullable:false})
    municipality!: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => CompanyCountAggregate, {nullable:true})
    _count?: CompanyCountAggregate;

    @Field(() => CompanyAvgAggregate, {nullable:true})
    _avg?: CompanyAvgAggregate;

    @Field(() => CompanySumAggregate, {nullable:true})
    _sum?: CompanySumAggregate;

    @Field(() => CompanyMinAggregate, {nullable:true})
    _min?: CompanyMinAggregate;

    @Field(() => CompanyMaxAggregate, {nullable:true})
    _max?: CompanyMaxAggregate;
}
