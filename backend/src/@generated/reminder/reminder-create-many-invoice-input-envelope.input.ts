import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReminderCreateManyInvoiceInput } from './reminder-create-many-invoice.input';
import { Type } from 'class-transformer';

@InputType()
export class ReminderCreateManyInvoiceInputEnvelope {

    @Field(() => [ReminderCreateManyInvoiceInput], {nullable:false})
    @Type(() => ReminderCreateManyInvoiceInput)
    data!: Array<ReminderCreateManyInvoiceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
