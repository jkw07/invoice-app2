import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VatRateType } from '../prisma/vat-rate-type.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { ProductUncheckedCreateNestedManyWithoutVatRateInput } from '../product/product-unchecked-create-nested-many-without-vat-rate.input';

@InputType()
export class VatRateUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => VatRateType, {nullable:false})
    type!: `${VatRateType}`;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    rate?: Decimal;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ProductUncheckedCreateNestedManyWithoutVatRateInput, {nullable:true})
    @Type(() => ProductUncheckedCreateNestedManyWithoutVatRateInput)
    products?: ProductUncheckedCreateNestedManyWithoutVatRateInput;
}
