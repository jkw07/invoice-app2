import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyCreateWithoutProductsInput } from './company-create-without-products.input';
import { Type } from 'class-transformer';
import { CompanyCreateOrConnectWithoutProductsInput } from './company-create-or-connect-without-products.input';
import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';

@InputType()
export class CompanyCreateNestedOneWithoutProductsInput {

    @Field(() => CompanyCreateWithoutProductsInput, {nullable:true})
    @Type(() => CompanyCreateWithoutProductsInput)
    create?: CompanyCreateWithoutProductsInput;

    @Field(() => CompanyCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => CompanyCreateOrConnectWithoutProductsInput)
    connectOrCreate?: CompanyCreateOrConnectWithoutProductsInput;

    @Field(() => CompanyWhereUniqueInput, {nullable:true})
    @Type(() => CompanyWhereUniqueInput)
    connect?: Prisma.AtLeast<CompanyWhereUniqueInput, 'id'>;
}
