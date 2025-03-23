import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CompanyCount {

    @Field(() => Int, {nullable:false})
    settings?: number;

    @Field(() => Int, {nullable:false})
    invoices?: number;

    @Field(() => Int, {nullable:false})
    clients?: number;

    @Field(() => Int, {nullable:false})
    products?: number;

    @Field(() => Int, {nullable:false})
    reminders?: number;
}
