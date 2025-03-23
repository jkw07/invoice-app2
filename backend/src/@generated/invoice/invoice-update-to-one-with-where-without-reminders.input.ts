import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoiceWhereInput } from './invoice-where.input';
import { Type } from 'class-transformer';
import { InvoiceUpdateWithoutRemindersInput } from './invoice-update-without-reminders.input';

@InputType()
export class InvoiceUpdateToOneWithWhereWithoutRemindersInput {

    @Field(() => InvoiceWhereInput, {nullable:true})
    @Type(() => InvoiceWhereInput)
    where?: InvoiceWhereInput;

    @Field(() => InvoiceUpdateWithoutRemindersInput, {nullable:false})
    @Type(() => InvoiceUpdateWithoutRemindersInput)
    data!: InvoiceUpdateWithoutRemindersInput;
}
