import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { CompanyCreateNestedOneWithoutProductsInput } from '../company/company-create-nested-one-without-products.input';
import { VatRateCreateNestedOneWithoutProductsInput } from '../vat-rate/vat-rate-create-nested-one-without-products.input';

@InputType()
export class ProductCreateWithoutInvoiceItemsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    price!: Decimal;

    @Field(() => String, {nullable:true})
    unit?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CompanyCreateNestedOneWithoutProductsInput, {nullable:false})
    @Type(() => CompanyCreateNestedOneWithoutProductsInput)
    company!: CompanyCreateNestedOneWithoutProductsInput;

    @Field(() => VatRateCreateNestedOneWithoutProductsInput, {nullable:true})
    @Type(() => VatRateCreateNestedOneWithoutProductsInput)
    vatRate?: VatRateCreateNestedOneWithoutProductsInput;
}
