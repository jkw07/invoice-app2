import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReminderCreateInput } from './reminder-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneReminderArgs {

    @Field(() => ReminderCreateInput, {nullable:false})
    @Type(() => ReminderCreateInput)
    data!: ReminderCreateInput;
}
