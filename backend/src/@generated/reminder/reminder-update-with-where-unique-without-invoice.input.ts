import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReminderWhereUniqueInput } from './reminder-where-unique.input';
import { Type } from 'class-transformer';
import { ReminderUpdateWithoutInvoiceInput } from './reminder-update-without-invoice.input';

@InputType()
export class ReminderUpdateWithWhereUniqueWithoutInvoiceInput {

    @Field(() => ReminderWhereUniqueInput, {nullable:false})
    @Type(() => ReminderWhereUniqueInput)
    where!: Prisma.AtLeast<ReminderWhereUniqueInput, 'id'>;

    @Field(() => ReminderUpdateWithoutInvoiceInput, {nullable:false})
    @Type(() => ReminderUpdateWithoutInvoiceInput)
    data!: ReminderUpdateWithoutInvoiceInput;
}
