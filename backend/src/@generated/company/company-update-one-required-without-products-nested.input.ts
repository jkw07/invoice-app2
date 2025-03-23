import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyCreateWithoutProductsInput } from './company-create-without-products.input';
import { Type } from 'class-transformer';
import { CompanyCreateOrConnectWithoutProductsInput } from './company-create-or-connect-without-products.input';
import { CompanyUpsertWithoutProductsInput } from './company-upsert-without-products.input';
import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
import { CompanyUpdateToOneWithWhereWithoutProductsInput } from './company-update-to-one-with-where-without-products.input';

@InputType()
export class CompanyUpdateOneRequiredWithoutProductsNestedInput {

    @Field(() => CompanyCreateWithoutProductsInput, {nullable:true})
    @Type(() => CompanyCreateWithoutProductsInput)
    create?: CompanyCreateWithoutProductsInput;

    @Field(() => CompanyCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => CompanyCreateOrConnectWithoutProductsInput)
    connectOrCreate?: CompanyCreateOrConnectWithoutProductsInput;

    @Field(() => CompanyUpsertWithoutProductsInput, {nullable:true})
    @Type(() => CompanyUpsertWithoutProductsInput)
    upsert?: CompanyUpsertWithoutProductsInput;

    @Field(() => CompanyWhereUniqueInput, {nullable:true})
    @Type(() => CompanyWhereUniqueInput)
    connect?: Prisma.AtLeast<CompanyWhereUniqueInput, 'id'>;

    @Field(() => CompanyUpdateToOneWithWhereWithoutProductsInput, {nullable:true})
    @Type(() => CompanyUpdateToOneWithWhereWithoutProductsInput)
    update?: CompanyUpdateToOneWithWhereWithoutProductsInput;
}
