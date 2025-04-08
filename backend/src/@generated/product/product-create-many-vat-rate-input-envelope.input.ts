import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateManyVatRateInput } from './product-create-many-vat-rate.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductCreateManyVatRateInputEnvelope {

    @Field(() => [ProductCreateManyVatRateInput], {nullable:false})
    @Type(() => ProductCreateManyVatRateInput)
    data!: Array<ProductCreateManyVatRateInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
