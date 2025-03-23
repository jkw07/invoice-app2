import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutInvoiceItemsInput } from './product-update-without-invoice-items.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutInvoiceItemsInput } from './product-create-without-invoice-items.input';
import { ProductWhereInput } from './product-where.input';

@InputType()
export class ProductUpsertWithoutInvoiceItemsInput {

    @Field(() => ProductUpdateWithoutInvoiceItemsInput, {nullable:false})
    @Type(() => ProductUpdateWithoutInvoiceItemsInput)
    update!: ProductUpdateWithoutInvoiceItemsInput;

    @Field(() => ProductCreateWithoutInvoiceItemsInput, {nullable:false})
    @Type(() => ProductCreateWithoutInvoiceItemsInput)
    create!: ProductCreateWithoutInvoiceItemsInput;

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;
}
