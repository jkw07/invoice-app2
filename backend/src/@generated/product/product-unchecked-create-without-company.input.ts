import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { VatRateType } from '../prisma/vat-rate-type.enum';
import { InvoiceItemUncheckedCreateNestedManyWithoutProductInput } from '../invoice-item/invoice-item-unchecked-create-nested-many-without-product.input';

@InputType()
export class ProductUncheckedCreateWithoutCompanyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => VatRateType, {nullable:false})
    taxType!: `${VatRateType}`;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    taxRate?: Decimal;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => InvoiceItemUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    @Type(() => InvoiceItemUncheckedCreateNestedManyWithoutProductInput)
    invoiceItems?: InvoiceItemUncheckedCreateNestedManyWithoutProductInput;
}
