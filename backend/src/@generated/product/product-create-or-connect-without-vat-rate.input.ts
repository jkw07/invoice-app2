import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutVatRateInput } from './product-create-without-vat-rate.input';

@InputType()
export class ProductCreateOrConnectWithoutVatRateInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutVatRateInput, {nullable:false})
    @Type(() => ProductCreateWithoutVatRateInput)
    create!: ProductCreateWithoutVatRateInput;
}
