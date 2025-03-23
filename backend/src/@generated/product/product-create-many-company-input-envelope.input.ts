import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateManyCompanyInput } from './product-create-many-company.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductCreateManyCompanyInputEnvelope {

    @Field(() => [ProductCreateManyCompanyInput], {nullable:false})
    @Type(() => ProductCreateManyCompanyInput)
    data!: Array<ProductCreateManyCompanyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
