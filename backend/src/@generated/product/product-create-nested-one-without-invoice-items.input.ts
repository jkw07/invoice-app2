import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutInvoiceItemsInput } from './product-create-without-invoice-items.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutInvoiceItemsInput } from './product-create-or-connect-without-invoice-items.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedOneWithoutInvoiceItemsInput {

    @Field(() => ProductCreateWithoutInvoiceItemsInput, {nullable:true})
    @Type(() => ProductCreateWithoutInvoiceItemsInput)
    create?: ProductCreateWithoutInvoiceItemsInput;

    @Field(() => ProductCreateOrConnectWithoutInvoiceItemsInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutInvoiceItemsInput)
    connectOrCreate?: ProductCreateOrConnectWithoutInvoiceItemsInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}
