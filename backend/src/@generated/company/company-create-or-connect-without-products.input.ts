import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
import { Type } from 'class-transformer';
import { CompanyCreateWithoutProductsInput } from './company-create-without-products.input';

@InputType()
export class CompanyCreateOrConnectWithoutProductsInput {

    @Field(() => CompanyWhereUniqueInput, {nullable:false})
    @Type(() => CompanyWhereUniqueInput)
    where!: Prisma.AtLeast<CompanyWhereUniqueInput, 'id'>;

    @Field(() => CompanyCreateWithoutProductsInput, {nullable:false})
    @Type(() => CompanyCreateWithoutProductsInput)
    create!: CompanyCreateWithoutProductsInput;
}
