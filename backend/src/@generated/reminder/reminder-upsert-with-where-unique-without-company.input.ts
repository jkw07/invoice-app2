import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReminderWhereUniqueInput } from './reminder-where-unique.input';
import { Type } from 'class-transformer';
import { ReminderUpdateWithoutCompanyInput } from './reminder-update-without-company.input';
import { ReminderCreateWithoutCompanyInput } from './reminder-create-without-company.input';

@InputType()
export class ReminderUpsertWithWhereUniqueWithoutCompanyInput {

    @Field(() => ReminderWhereUniqueInput, {nullable:false})
    @Type(() => ReminderWhereUniqueInput)
    where!: Prisma.AtLeast<ReminderWhereUniqueInput, 'id'>;

    @Field(() => ReminderUpdateWithoutCompanyInput, {nullable:false})
    @Type(() => ReminderUpdateWithoutCompanyInput)
    update!: ReminderUpdateWithoutCompanyInput;

    @Field(() => ReminderCreateWithoutCompanyInput, {nullable:false})
    @Type(() => ReminderCreateWithoutCompanyInput)
    create!: ReminderCreateWithoutCompanyInput;
}
