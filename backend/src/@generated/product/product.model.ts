import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { VatRateType } from '../prisma/vat-rate-type.enum';
import { Company } from '../company/company.model';
import { InvoiceItem } from '../invoice-item/invoice-item.model';
import { ProductCount } from './product-count.output';

@ObjectType()
export class Product {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    companyId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => GraphQLDecimal, {nullable:false})
    price!: Decimal;

    @Field(() => String, {nullable:true})
    unit!: string | null;

    @Field(() => VatRateType, {nullable:false})
    taxType!: `${VatRateType}`;

    @Field(() => GraphQLDecimal, {nullable:true})
    taxRate!: Decimal | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Company, {nullable:false})
    company?: Company;

    @Field(() => [InvoiceItem], {nullable:true})
    invoiceItems?: Array<InvoiceItem>;

    @Field(() => ProductCount, {nullable:false})
    _count?: ProductCount;
}
