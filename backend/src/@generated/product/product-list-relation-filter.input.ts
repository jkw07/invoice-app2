import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductListRelationFilter {

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    every?: ProductWhereInput;

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    some?: ProductWhereInput;

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    none?: ProductWhereInput;
}
