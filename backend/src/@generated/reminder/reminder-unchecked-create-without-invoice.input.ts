import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ReminderUncheckedCreateWithoutInvoiceInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    companyId!: number;

    @Field(() => String, {nullable:false})
    reminderType!: string;

    @Field(() => Date, {nullable:false})
    reminderDate!: Date | string;

    @Field(() => Boolean, {nullable:true})
    completed?: boolean;

    @Field(() => String, {nullable:false})
    message!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
