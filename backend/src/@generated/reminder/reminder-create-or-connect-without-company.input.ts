import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReminderWhereUniqueInput } from './reminder-where-unique.input';
import { Type } from 'class-transformer';
import { ReminderCreateWithoutCompanyInput } from './reminder-create-without-company.input';

@InputType()
export class ReminderCreateOrConnectWithoutCompanyInput {

    @Field(() => ReminderWhereUniqueInput, {nullable:false})
    @Type(() => ReminderWhereUniqueInput)
    where!: Prisma.AtLeast<ReminderWhereUniqueInput, 'id'>;

    @Field(() => ReminderCreateWithoutCompanyInput, {nullable:false})
    @Type(() => ReminderCreateWithoutCompanyInput)
    create!: ReminderCreateWithoutCompanyInput;
}
