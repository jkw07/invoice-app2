import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InvoiceWhereUniqueInput } from './invoice-where-unique.input';
import { Type } from 'class-transformer';
import { InvoiceCreateWithoutRemindersInput } from './invoice-create-without-reminders.input';

@InputType()
export class InvoiceCreateOrConnectWithoutRemindersInput {

    @Field(() => InvoiceWhereUniqueInput, {nullable:false})
    @Type(() => InvoiceWhereUniqueInput)
    where!: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>;

    @Field(() => InvoiceCreateWithoutRemindersInput, {nullable:false})
    @Type(() => InvoiceCreateWithoutRemindersInput)
    create!: InvoiceCreateWithoutRemindersInput;
}
