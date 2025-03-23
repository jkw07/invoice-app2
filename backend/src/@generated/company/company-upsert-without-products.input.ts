import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyUpdateWithoutProductsInput } from './company-update-without-products.input';
import { Type } from 'class-transformer';
import { CompanyCreateWithoutProductsInput } from './company-create-without-products.input';
import { CompanyWhereInput } from './company-where.input';

@InputType()
export class CompanyUpsertWithoutProductsInput {

    @Field(() => CompanyUpdateWithoutProductsInput, {nullable:false})
    @Type(() => CompanyUpdateWithoutProductsInput)
    update!: CompanyUpdateWithoutProductsInput;

    @Field(() => CompanyCreateWithoutProductsInput, {nullable:false})
    @Type(() => CompanyCreateWithoutProductsInput)
    create!: CompanyCreateWithoutProductsInput;

    @Field(() => CompanyWhereInput, {nullable:true})
    @Type(() => CompanyWhereInput)
    where?: CompanyWhereInput;
}
