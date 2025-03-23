import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyWhereInput } from './company-where.input';
import { Type } from 'class-transformer';
import { CompanyUpdateWithoutRemindersInput } from './company-update-without-reminders.input';

@InputType()
export class CompanyUpdateToOneWithWhereWithoutRemindersInput {

    @Field(() => CompanyWhereInput, {nullable:true})
    @Type(() => CompanyWhereInput)
    where?: CompanyWhereInput;

    @Field(() => CompanyUpdateWithoutRemindersInput, {nullable:false})
    @Type(() => CompanyUpdateWithoutRemindersInput)
    data!: CompanyUpdateWithoutRemindersInput;
}
