import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyCreateNestedOneWithoutRemindersInput } from '../company/company-create-nested-one-without-reminders.input';
import { Type } from 'class-transformer';

@InputType()
export class ReminderCreateWithoutInvoiceInput {

    @Field(() => String, {nullable:false})
    reminderType!: string;

    @Field(() => Date, {nullable:false})
    reminderDate!: Date | string;

    @Field(() => Boolean, {nullable:true})
    completed?: boolean;

    @Field(() => String, {nullable:false})
    message!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CompanyCreateNestedOneWithoutRemindersInput, {nullable:false})
    @Type(() => CompanyCreateNestedOneWithoutRemindersInput)
    company!: CompanyCreateNestedOneWithoutRemindersInput;
}
