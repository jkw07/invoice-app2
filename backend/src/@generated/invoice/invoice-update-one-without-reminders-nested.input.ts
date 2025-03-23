import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoiceCreateWithoutRemindersInput } from './invoice-create-without-reminders.input';
import { Type } from 'class-transformer';
import { InvoiceCreateOrConnectWithoutRemindersInput } from './invoice-create-or-connect-without-reminders.input';
import { InvoiceUpsertWithoutRemindersInput } from './invoice-upsert-without-reminders.input';
import { InvoiceWhereInput } from './invoice-where.input';
import { Prisma } from '@prisma/client';
import { InvoiceWhereUniqueInput } from './invoice-where-unique.input';
import { InvoiceUpdateToOneWithWhereWithoutRemindersInput } from './invoice-update-to-one-with-where-without-reminders.input';

@InputType()
export class InvoiceUpdateOneWithoutRemindersNestedInput {

    @Field(() => InvoiceCreateWithoutRemindersInput, {nullable:true})
    @Type(() => InvoiceCreateWithoutRemindersInput)
    create?: InvoiceCreateWithoutRemindersInput;

    @Field(() => InvoiceCreateOrConnectWithoutRemindersInput, {nullable:true})
    @Type(() => InvoiceCreateOrConnectWithoutRemindersInput)
    connectOrCreate?: InvoiceCreateOrConnectWithoutRemindersInput;

    @Field(() => InvoiceUpsertWithoutRemindersInput, {nullable:true})
    @Type(() => InvoiceUpsertWithoutRemindersInput)
    upsert?: InvoiceUpsertWithoutRemindersInput;

    @Field(() => InvoiceWhereInput, {nullable:true})
    @Type(() => InvoiceWhereInput)
    disconnect?: InvoiceWhereInput;

    @Field(() => InvoiceWhereInput, {nullable:true})
    @Type(() => InvoiceWhereInput)
    delete?: InvoiceWhereInput;

    @Field(() => InvoiceWhereUniqueInput, {nullable:true})
    @Type(() => InvoiceWhereUniqueInput)
    connect?: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>;

    @Field(() => InvoiceUpdateToOneWithWhereWithoutRemindersInput, {nullable:true})
    @Type(() => InvoiceUpdateToOneWithWhereWithoutRemindersInput)
    update?: InvoiceUpdateToOneWithWhereWithoutRemindersInput;
}
