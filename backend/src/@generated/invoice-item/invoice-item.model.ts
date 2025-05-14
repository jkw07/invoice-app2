import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { VatRateType } from '../prisma/vat-rate-type.enum';
import { Invoice } from '../invoice/invoice.model';
import { Product } from '../product/product.model';

@ObjectType()
export class InvoiceItem {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    invoiceId!: number;

    @Field(() => Int, {nullable:true})
    productId!: number | null;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    unit!: string | null;

    @Field(() => GraphQLDecimal, {nullable:false})
    quantity!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    unitPrice!: Decimal;

    @Field(() => VatRateType, {nullable:false})
    taxType!: `${VatRateType}`;

    @Field(() => GraphQLDecimal, {nullable:true})
    taxRate!: Decimal | null;

    @Field(() => GraphQLDecimal, {nullable:true})
    discount!: Decimal | null;

    @Field(() => GraphQLDecimal, {nullable:false})
    totalNet!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    totalTax!: Decimal | null;

    @Field(() => GraphQLDecimal, {nullable:false})
    totalGross!: Decimal;

    @Field(() => Invoice, {nullable:false})
    invoice?: Invoice;

    @Field(() => Product, {nullable:true})
    product?: Product | null;
}
