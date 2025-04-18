import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReminderWhereUniqueInput } from './reminder-where-unique.input';
import { Type } from 'class-transformer';
import { ReminderCreateInput } from './reminder-create.input';
import { ReminderUpdateInput } from './reminder-update.input';

@ArgsType()
export class UpsertOneReminderArgs {

    @Field(() => ReminderWhereUniqueInput, {nullable:false})
    @Type(() => ReminderWhereUniqueInput)
    where!: Prisma.AtLeast<ReminderWhereUniqueInput, 'id'>;

    @Field(() => ReminderCreateInput, {nullable:false})
    @Type(() => ReminderCreateInput)
    create!: ReminderCreateInput;

    @Field(() => ReminderUpdateInput, {nullable:false})
    @Type(() => ReminderUpdateInput)
    update!: ReminderUpdateInput;
}
