import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoiceUpdateWithoutRemindersInput } from './invoice-update-without-reminders.input';
import { Type } from 'class-transformer';
import { InvoiceCreateWithoutRemindersInput } from './invoice-create-without-reminders.input';
import { InvoiceWhereInput } from './invoice-where.input';

@InputType()
export class InvoiceUpsertWithoutRemindersInput {

    @Field(() => InvoiceUpdateWithoutRemindersInput, {nullable:false})
    @Type(() => InvoiceUpdateWithoutRemindersInput)
    update!: InvoiceUpdateWithoutRemindersInput;

    @Field(() => InvoiceCreateWithoutRemindersInput, {nullable:false})
    @Type(() => InvoiceCreateWithoutRemindersInput)
    create!: InvoiceCreateWithoutRemindersInput;

    @Field(() => InvoiceWhereInput, {nullable:true})
    @Type(() => InvoiceWhereInput)
    where?: InvoiceWhereInput;
}
