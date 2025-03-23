import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReminderUpdateInput } from './reminder-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ReminderWhereUniqueInput } from './reminder-where-unique.input';

@ArgsType()
export class UpdateOneReminderArgs {

    @Field(() => ReminderUpdateInput, {nullable:false})
    @Type(() => ReminderUpdateInput)
    data!: ReminderUpdateInput;

    @Field(() => ReminderWhereUniqueInput, {nullable:false})
    @Type(() => ReminderWhereUniqueInput)
    where!: Prisma.AtLeast<ReminderWhereUniqueInput, 'id'>;
}
