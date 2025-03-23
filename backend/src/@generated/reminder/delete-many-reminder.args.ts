import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReminderWhereInput } from './reminder-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyReminderArgs {

    @Field(() => ReminderWhereInput, {nullable:true})
    @Type(() => ReminderWhereInput)
    where?: ReminderWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
