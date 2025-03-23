import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class CompanyCreateManyUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
