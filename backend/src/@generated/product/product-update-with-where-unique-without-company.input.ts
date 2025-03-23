import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutCompanyInput } from './product-update-without-company.input';

@InputType()
export class ProductUpdateWithWhereUniqueWithoutCompanyInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateWithoutCompanyInput, {nullable:false})
    @Type(() => ProductUpdateWithoutCompanyInput)
    data!: ProductUpdateWithoutCompanyInput;
}
