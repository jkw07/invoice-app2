import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ReminderCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    companyId!: number;

    @Field(() => Int, {nullable:false})
    invoiceId!: number;

    @Field(() => Int, {nullable:false})
    reminderType!: number;

    @Field(() => Int, {nullable:false})
    reminderDate!: number;

    @Field(() => Int, {nullable:false})
    completed!: number;

    @Field(() => Int, {nullable:false})
    message!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
