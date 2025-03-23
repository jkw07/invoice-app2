import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { Status } from '../prisma/status.enum';
import { CompanyCreateNestedOneWithoutInvoicesInput } from '../company/company-create-nested-one-without-invoices.input';
import { ClientCreateNestedOneWithoutInvoicesInput } from '../client/client-create-nested-one-without-invoices.input';
import { PaymentCreateNestedOneWithoutInvoicesInput } from '../payment/payment-create-nested-one-without-invoices.input';
import { InvoiceItemCreateNestedManyWithoutInvoiceInput } from '../invoice-item/invoice-item-create-nested-many-without-invoice.input';
import { ReminderCreateNestedManyWithoutInvoiceInput } from '../reminder/reminder-create-nested-many-without-invoice.input';

@InputType()
export class InvoiceCreateInput {

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

    @Field(() => CompanyCreateNestedOneWithoutInvoicesInput, {nullable:false})
    @Type(() => CompanyCreateNestedOneWithoutInvoicesInput)
    company!: CompanyCreateNestedOneWithoutInvoicesInput;

    @Field(() => ClientCreateNestedOneWithoutInvoicesInput, {nullable:false})
    @Type(() => ClientCreateNestedOneWithoutInvoicesInput)
    buyer!: ClientCreateNestedOneWithoutInvoicesInput;

    @Field(() => PaymentCreateNestedOneWithoutInvoicesInput, {nullable:false})
    @Type(() => PaymentCreateNestedOneWithoutInvoicesInput)
    payment!: PaymentCreateNestedOneWithoutInvoicesInput;

    @Field(() => InvoiceItemCreateNestedManyWithoutInvoiceInput, {nullable:true})
    @Type(() => InvoiceItemCreateNestedManyWithoutInvoiceInput)
    invoiceItems?: InvoiceItemCreateNestedManyWithoutInvoiceInput;

    @Field(() => ReminderCreateNestedManyWithoutInvoiceInput, {nullable:true})
    @Type(() => ReminderCreateNestedManyWithoutInvoiceInput)
    reminders?: ReminderCreateNestedManyWithoutInvoiceInput;
}
