import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReminderWhereInput } from './reminder-where.input';

@InputType()
export class ReminderListRelationFilter {

    @Field(() => ReminderWhereInput, {nullable:true})
    every?: ReminderWhereInput;

    @Field(() => ReminderWhereInput, {nullable:true})
    some?: ReminderWhereInput;

    @Field(() => ReminderWhereInput, {nullable:true})
    none?: ReminderWhereInput;
}
