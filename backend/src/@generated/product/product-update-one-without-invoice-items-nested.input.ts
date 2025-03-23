import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutInvoiceItemsInput } from './product-create-without-invoice-items.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutInvoiceItemsInput } from './product-create-or-connect-without-invoice-items.input';
import { ProductUpsertWithoutInvoiceItemsInput } from './product-upsert-without-invoice-items.input';
import { ProductWhereInput } from './product-where.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateToOneWithWhereWithoutInvoiceItemsInput } from './product-update-to-one-with-where-without-invoice-items.input';

@InputType()
export class ProductUpdateOneWithoutInvoiceItemsNestedInput {

    @Field(() => ProductCreateWithoutInvoiceItemsInput, {nullable:true})
    @Type(() => ProductCreateWithoutInvoiceItemsInput)
    create?: ProductCreateWithoutInvoiceItemsInput;

    @Field(() => ProductCreateOrConnectWithoutInvoiceItemsInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutInvoiceItemsInput)
    connectOrCreate?: ProductCreateOrConnectWithoutInvoiceItemsInput;

    @Field(() => ProductUpsertWithoutInvoiceItemsInput, {nullable:true})
    @Type(() => ProductUpsertWithoutInvoiceItemsInput)
    upsert?: ProductUpsertWithoutInvoiceItemsInput;

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    disconnect?: ProductWhereInput;

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    delete?: ProductWhereInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateToOneWithWhereWithoutInvoiceItemsInput, {nullable:true})
    @Type(() => ProductUpdateToOneWithWhereWithoutInvoiceItemsInput)
    update?: ProductUpdateToOneWithWhereWithoutInvoiceItemsInput;
}
