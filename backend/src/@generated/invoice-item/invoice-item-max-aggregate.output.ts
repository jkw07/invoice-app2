import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { VatRateType } from '../prisma/vat-rate-type.enum';

@ObjectType()
export class InvoiceItemMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    invoiceId?: number;

    @Field(() => Int, {nullable:true})
    productId?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    unit?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    quantity?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    unitPrice?: Decimal;

    @Field(() => VatRateType, {nullable:true})
    taxType?: `${VatRateType}`;

    @Field(() => GraphQLDecimal, {nullable:true})
    taxRate?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    discount?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    totalNet?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    totalTax?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    totalGross?: Decimal;
}
