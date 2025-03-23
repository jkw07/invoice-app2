import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyUpdateWithoutRemindersInput } from './company-update-without-reminders.input';
import { Type } from 'class-transformer';
import { CompanyCreateWithoutRemindersInput } from './company-create-without-reminders.input';
import { CompanyWhereInput } from './company-where.input';

@InputType()
export class CompanyUpsertWithoutRemindersInput {

    @Field(() => CompanyUpdateWithoutRemindersInput, {nullable:false})
    @Type(() => CompanyUpdateWithoutRemindersInput)
    update!: CompanyUpdateWithoutRemindersInput;

    @Field(() => CompanyCreateWithoutRemindersInput, {nullable:false})
    @Type(() => CompanyCreateWithoutRemindersInput)
    create!: CompanyCreateWithoutRemindersInput;

    @Field(() => CompanyWhereInput, {nullable:true})
    @Type(() => CompanyWhereInput)
    where?: CompanyWhereInput;
}
