import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ReminderCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    companyId?: true;

    @Field(() => Boolean, {nullable:true})
    invoiceId?: true;

    @Field(() => Boolean, {nullable:true})
    reminderType?: true;

    @Field(() => Boolean, {nullable:true})
    reminderDate?: true;

    @Field(() => Boolean, {nullable:true})
    completed?: true;

    @Field(() => Boolean, {nullable:true})
    message?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
