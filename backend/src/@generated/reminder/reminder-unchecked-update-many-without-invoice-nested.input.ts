import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReminderCreateWithoutInvoiceInput } from './reminder-create-without-invoice.input';
import { Type } from 'class-transformer';
import { ReminderCreateOrConnectWithoutInvoiceInput } from './reminder-create-or-connect-without-invoice.input';
import { ReminderUpsertWithWhereUniqueWithoutInvoiceInput } from './reminder-upsert-with-where-unique-without-invoice.input';
import { ReminderCreateManyInvoiceInputEnvelope } from './reminder-create-many-invoice-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReminderWhereUniqueInput } from './reminder-where-unique.input';
import { ReminderUpdateWithWhereUniqueWithoutInvoiceInput } from './reminder-update-with-where-unique-without-invoice.input';
import { ReminderUpdateManyWithWhereWithoutInvoiceInput } from './reminder-update-many-with-where-without-invoice.input';
import { ReminderScalarWhereInput } from './reminder-scalar-where.input';

@InputType()
export class ReminderUncheckedUpdateManyWithoutInvoiceNestedInput {

    @Field(() => [ReminderCreateWithoutInvoiceInput], {nullable:true})
    @Type(() => ReminderCreateWithoutInvoiceInput)
    create?: Array<ReminderCreateWithoutInvoiceInput>;

    @Field(() => [ReminderCreateOrConnectWithoutInvoiceInput], {nullable:true})
    @Type(() => ReminderCreateOrConnectWithoutInvoiceInput)
    connectOrCreate?: Array<ReminderCreateOrConnectWithoutInvoiceInput>;

    @Field(() => [ReminderUpsertWithWhereUniqueWithoutInvoiceInput], {nullable:true})
    @Type(() => ReminderUpsertWithWhereUniqueWithoutInvoiceInput)
    upsert?: Array<ReminderUpsertWithWhereUniqueWithoutInvoiceInput>;

    @Field(() => ReminderCreateManyInvoiceInputEnvelope, {nullable:true})
    @Type(() => ReminderCreateManyInvoiceInputEnvelope)
    createMany?: ReminderCreateManyInvoiceInputEnvelope;

    @Field(() => [ReminderWhereUniqueInput], {nullable:true})
    @Type(() => ReminderWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ReminderWhereUniqueInput, 'id'>>;

    @Field(() => [ReminderWhereUniqueInput], {nullable:true})
    @Type(() => ReminderWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ReminderWhereUniqueInput, 'id'>>;

    @Field(() => [ReminderWhereUniqueInput], {nullable:true})
    @Type(() => ReminderWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ReminderWhereUniqueInput, 'id'>>;

    @Field(() => [ReminderWhereUniqueInput], {nullable:true})
    @Type(() => ReminderWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReminderWhereUniqueInput, 'id'>>;

    @Field(() => [ReminderUpdateWithWhereUniqueWithoutInvoiceInput], {nullable:true})
    @Type(() => ReminderUpdateWithWhereUniqueWithoutInvoiceInput)
    update?: Array<ReminderUpdateWithWhereUniqueWithoutInvoiceInput>;

    @Field(() => [ReminderUpdateManyWithWhereWithoutInvoiceInput], {nullable:true})
    @Type(() => ReminderUpdateManyWithWhereWithoutInvoiceInput)
    updateMany?: Array<ReminderUpdateManyWithWhereWithoutInvoiceInput>;

    @Field(() => [ReminderScalarWhereInput], {nullable:true})
    @Type(() => ReminderScalarWhereInput)
    deleteMany?: Array<ReminderScalarWhereInput>;
}
