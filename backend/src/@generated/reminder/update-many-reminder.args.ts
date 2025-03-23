import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReminderUpdateManyMutationInput } from './reminder-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ReminderWhereInput } from './reminder-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyReminderArgs {

    @Field(() => ReminderUpdateManyMutationInput, {nullable:false})
    @Type(() => ReminderUpdateManyMutationInput)
    data!: ReminderUpdateManyMutationInput;

    @Field(() => ReminderWhereInput, {nullable:true})
    @Type(() => ReminderWhereInput)
    where?: ReminderWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
