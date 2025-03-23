import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoiceCreateWithoutRemindersInput } from './invoice-create-without-reminders.input';
import { Type } from 'class-transformer';
import { InvoiceCreateOrConnectWithoutRemindersInput } from './invoice-create-or-connect-without-reminders.input';
import { Prisma } from '@prisma/client';
import { InvoiceWhereUniqueInput } from './invoice-where-unique.input';

@InputType()
export class InvoiceCreateNestedOneWithoutRemindersInput {

    @Field(() => InvoiceCreateWithoutRemindersInput, {nullable:true})
    @Type(() => InvoiceCreateWithoutRemindersInput)
    create?: InvoiceCreateWithoutRemindersInput;

    @Field(() => InvoiceCreateOrConnectWithoutRemindersInput, {nullable:true})
    @Type(() => InvoiceCreateOrConnectWithoutRemindersInput)
    connectOrCreate?: InvoiceCreateOrConnectWithoutRemindersInput;

    @Field(() => InvoiceWhereUniqueInput, {nullable:true})
    @Type(() => InvoiceWhereUniqueInput)
    connect?: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>;
}
