import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutInvoiceItemsInput } from './product-update-without-invoice-items.input';

@InputType()
export class ProductUpdateToOneWithWhereWithoutInvoiceItemsInput {

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;

    @Field(() => ProductUpdateWithoutInvoiceItemsInput, {nullable:false})
    @Type(() => ProductUpdateWithoutInvoiceItemsInput)
    data!: ProductUpdateWithoutInvoiceItemsInput;
}
