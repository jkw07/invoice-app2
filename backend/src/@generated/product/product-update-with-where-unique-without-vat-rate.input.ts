import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutVatRateInput } from './product-update-without-vat-rate.input';

@InputType()
export class ProductUpdateWithWhereUniqueWithoutVatRateInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateWithoutVatRateInput, {nullable:false})
    @Type(() => ProductUpdateWithoutVatRateInput)
    data!: ProductUpdateWithoutVatRateInput;
}
