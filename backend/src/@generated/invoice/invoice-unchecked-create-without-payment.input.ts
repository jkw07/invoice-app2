import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { Status } from '../prisma/status.enum';
import { InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput } from '../invoice-item/invoice-item-unchecked-create-nested-many-without-invoice.input';
import { ReminderUncheckedCreateNestedManyWithoutInvoiceInput } from '../reminder/reminder-unchecked-create-nested-many-without-invoice.input';

@InputType()
export class InvoiceUncheckedCreateWithoutPaymentInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    companyId!: number;

    @Field(() => Int, {nullable:false})
    buyerId!: number;

    @Field(() => String, {nullable:true})
    recipient?: string;

    @Field(() => String, {nullable:false})
    invoiceType!: string;

    @Field(() => String, {nullable:false})
    invoiceNo!: string;

    @Field(() => Date, {nullable:false})
    issuedDate!: Date | string;

    @Field(() => Date, {nullable:true})
    transactionDate?: Date | string;

    @Field(() => Date, {nullable:false})
    dueDate!: Date | string;

    @Field(() => String, {nullable:false})
    paymentMethod!: string;

    @Field(() => Date, {nullable:true})
    paymentDate?: Date | string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    totalAmount!: Decimal;

    @Field(() => String, {nullable:false})
    currency!: string;

    @Field(() => Status, {nullable:false})
    status!: `${Status}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput, {nullable:true})
    @Type(() => InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput)
    invoiceItems?: InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput;

    @Field(() => ReminderUncheckedCreateNestedManyWithoutInvoiceInput, {nullable:true})
    @Type(() => ReminderUncheckedCreateNestedManyWithoutInvoiceInput)
    reminders?: ReminderUncheckedCreateNestedManyWithoutInvoiceInput;
}
