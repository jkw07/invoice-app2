import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutCompanyInput } from './product-create-without-company.input';

@InputType()
export class ProductCreateOrConnectWithoutCompanyInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutCompanyInput, {nullable:false})
    @Type(() => ProductCreateWithoutCompanyInput)
    create!: ProductCreateWithoutCompanyInput;
}
