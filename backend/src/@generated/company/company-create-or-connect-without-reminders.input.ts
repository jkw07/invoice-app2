import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
import { Type } from 'class-transformer';
import { CompanyCreateWithoutRemindersInput } from './company-create-without-reminders.input';

@InputType()
export class CompanyCreateOrConnectWithoutRemindersInput {

    @Field(() => CompanyWhereUniqueInput, {nullable:false})
    @Type(() => CompanyWhereUniqueInput)
    where!: Prisma.AtLeast<CompanyWhereUniqueInput, 'id'>;

    @Field(() => CompanyCreateWithoutRemindersInput, {nullable:false})
    @Type(() => CompanyCreateWithoutRemindersInput)
    create!: CompanyCreateWithoutRemindersInput;
}
