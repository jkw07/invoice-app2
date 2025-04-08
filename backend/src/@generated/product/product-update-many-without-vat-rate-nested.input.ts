import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutVatRateInput } from './product-create-without-vat-rate.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutVatRateInput } from './product-create-or-connect-without-vat-rate.input';
import { ProductUpsertWithWhereUniqueWithoutVatRateInput } from './product-upsert-with-where-unique-without-vat-rate.input';
import { ProductCreateManyVatRateInputEnvelope } from './product-create-many-vat-rate-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithWhereUniqueWithoutVatRateInput } from './product-update-with-where-unique-without-vat-rate.input';
import { ProductUpdateManyWithWhereWithoutVatRateInput } from './product-update-many-with-where-without-vat-rate.input';
import { ProductScalarWhereInput } from './product-scalar-where.input';

@InputType()
export class ProductUpdateManyWithoutVatRateNestedInput {

    @Field(() => [ProductCreateWithoutVatRateInput], {nullable:true})
    @Type(() => ProductCreateWithoutVatRateInput)
    create?: Array<ProductCreateWithoutVatRateInput>;

    @Field(() => [ProductCreateOrConnectWithoutVatRateInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutVatRateInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutVatRateInput>;

    @Field(() => [ProductUpsertWithWhereUniqueWithoutVatRateInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutVatRateInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutVatRateInput>;

    @Field(() => ProductCreateManyVatRateInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyVatRateInputEnvelope)
    createMany?: ProductCreateManyVatRateInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductUpdateWithWhereUniqueWithoutVatRateInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutVatRateInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutVatRateInput>;

    @Field(() => [ProductUpdateManyWithWhereWithoutVatRateInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutVatRateInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutVatRateInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}
