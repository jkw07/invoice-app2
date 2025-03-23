import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyWhereInput } from './company-where.input';
import { Type } from 'class-transformer';
import { CompanyUpdateWithoutProductsInput } from './company-update-without-products.input';

@InputType()
export class CompanyUpdateToOneWithWhereWithoutProductsInput {

    @Field(() => CompanyWhereInput, {nullable:true})
    @Type(() => CompanyWhereInput)
    where?: CompanyWhereInput;

    @Field(() => CompanyUpdateWithoutProductsInput, {nullable:false})
    @Type(() => CompanyUpdateWithoutProductsInput)
    data!: CompanyUpdateWithoutProductsInput;
}
