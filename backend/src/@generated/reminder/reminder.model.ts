import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Company } from '../company/company.model';
import { Invoice } from '../invoice/invoice.model';

@ObjectType()
export class Reminder {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    companyId!: number;

    @Field(() => Int, {nullable:true})
    invoiceId!: number | null;

    @Field(() => String, {nullable:false})
    reminderType!: string;

    @Field(() => Date, {nullable:false})
    reminderDate!: Date;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    completed!: boolean;

    @Field(() => String, {nullable:false})
    message!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Company, {nullable:false})
    company?: Company;

    @Field(() => Invoice, {nullable:true})
    invoice?: Invoice | null;
}
