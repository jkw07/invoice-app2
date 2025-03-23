import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReminderCreateWithoutInvoiceInput } from './reminder-create-without-invoice.input';
import { Type } from 'class-transformer';
import { ReminderCreateOrConnectWithoutInvoiceInput } from './reminder-create-or-connect-without-invoice.input';
import { ReminderCreateManyInvoiceInputEnvelope } from './reminder-create-many-invoice-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReminderWhereUniqueInput } from './reminder-where-unique.input';

@InputType()
export class ReminderUncheckedCreateNestedManyWithoutInvoiceInput {

    @Field(() => [ReminderCreateWithoutInvoiceInput], {nullable:true})
    @Type(() => ReminderCreateWithoutInvoiceInput)
    create?: Array<ReminderCreateWithoutInvoiceInput>;

    @Field(() => [ReminderCreateOrConnectWithoutInvoiceInput], {nullable:true})
    @Type(() => ReminderCreateOrConnectWithoutInvoiceInput)
    connectOrCreate?: Array<ReminderCreateOrConnectWithoutInvoiceInput>;

    @Field(() => ReminderCreateManyInvoiceInputEnvelope, {nullable:true})
    @Type(() => ReminderCreateManyInvoiceInputEnvelope)
    createMany?: ReminderCreateManyInvoiceInputEnvelope;

    @Field(() => [ReminderWhereUniqueInput], {nullable:true})
    @Type(() => ReminderWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReminderWhereUniqueInput, 'id'>>;
}
