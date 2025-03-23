import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutInvoiceItemsInput } from './product-create-without-invoice-items.input';

@InputType()
export class ProductCreateOrConnectWithoutInvoiceItemsInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutInvoiceItemsInput, {nullable:false})
    @Type(() => ProductCreateWithoutInvoiceItemsInput)
    create!: ProductCreateWithoutInvoiceItemsInput;
}
