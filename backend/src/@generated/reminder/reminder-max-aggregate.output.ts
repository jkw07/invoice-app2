import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ReminderMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    companyId?: number;

    @Field(() => Int, {nullable:true})
    invoiceId?: number;

    @Field(() => String, {nullable:true})
    reminderType?: string;

    @Field(() => Date, {nullable:true})
    reminderDate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    completed?: boolean;

    @Field(() => String, {nullable:true})
    message?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
