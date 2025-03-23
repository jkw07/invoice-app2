import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { VatRateType } from '../prisma/vat-rate-type.enum';
import { ProductCreateNestedOneWithoutInvoiceItemsInput } from '../product/product-create-nested-one-without-invoice-items.input';

@InputType()
export class InvoiceItemCreateWithoutInvoiceInput {

    @Field(() => String, {nullable:true})
    unit?: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    quantity!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    unitPrice!: Decimal;

    @Field(() => VatRateType, {nullable:false})
    taxType!: `${VatRateType}`;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    taxRate?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    discount?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    totalNet!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    totalTax?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    totalGross!: Decimal;

    @Field(() => ProductCreateNestedOneWithoutInvoiceItemsInput, {nullable:true})
    @Type(() => ProductCreateNestedOneWithoutInvoiceItemsInput)
    product?: ProductCreateNestedOneWithoutInvoiceItemsInput;
}
