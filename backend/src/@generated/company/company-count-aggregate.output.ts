import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CompanyCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    fullName!: number;

    @Field(() => Int, {nullable:false})
    shortName!: number;

    @Field(() => Int, {nullable:false})
    tin!: number;

    @Field(() => Int, {nullable:false})
    bin!: number;

    @Field(() => Int, {nullable:false})
    street!: number;

    @Field(() => Int, {nullable:false})
    buildingNo!: number;

    @Field(() => Int, {nullable:false})
    apartmentNo!: number;

    @Field(() => Int, {nullable:false})
    zipCode!: number;

    @Field(() => Int, {nullable:false})
    city!: number;

    @Field(() => Int, {nullable:false})
    province!: number;

    @Field(() => Int, {nullable:false})
    county!: number;

    @Field(() => Int, {nullable:false})
    municipality!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @Field(() => Int, {nullable:false})
    phone!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
