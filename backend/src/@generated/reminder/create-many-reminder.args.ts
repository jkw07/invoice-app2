import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReminderCreateManyInput } from './reminder-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyReminderArgs {

    @Field(() => [ReminderCreateManyInput], {nullable:false})
    @Type(() => ReminderCreateManyInput)
    data!: Array<ReminderCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
