import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class InvoiceItemMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    invoiceId?: true;

    @Field(() => Boolean, {nullable:true})
    productId?: true;

    @Field(() => Boolean, {nullable:true})
    unit?: true;

    @Field(() => Boolean, {nullable:true})
    quantity?: true;

    @Field(() => Boolean, {nullable:true})
    unitPrice?: true;

    @Field(() => Boolean, {nullable:true})
    taxType?: true;

    @Field(() => Boolean, {nullable:true})
    taxRate?: true;

    @Field(() => Boolean, {nullable:true})
    discount?: true;

    @Field(() => Boolean, {nullable:true})
    totalNet?: true;

    @Field(() => Boolean, {nullable:true})
    totalTax?: true;

    @Field(() => Boolean, {nullable:true})
    totalGross?: true;
}
