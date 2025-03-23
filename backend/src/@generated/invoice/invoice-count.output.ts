import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class InvoiceCount {

    @Field(() => Int, {nullable:false})
    invoiceItems?: number;

    @Field(() => Int, {nullable:false})
    reminders?: number;
}
