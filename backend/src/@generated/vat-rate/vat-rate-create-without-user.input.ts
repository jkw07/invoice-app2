import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VatRateType } from '../prisma/vat-rate-type.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { ProductCreateNestedManyWithoutVatRateInput } from '../product/product-create-nested-many-without-vat-rate.input';

@InputType()
export class VatRateCreateWithoutUserInput {

    @Field(() => VatRateType, {nullable:false})
    type!: `${VatRateType}`;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    rate?: Decimal;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ProductCreateNestedManyWithoutVatRateInput, {nullable:true})
    @Type(() => ProductCreateNestedManyWithoutVatRateInput)
    products?: ProductCreateNestedManyWithoutVatRateInput;
}
