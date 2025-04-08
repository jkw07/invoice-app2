import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutVatRateInput } from './product-create-without-vat-rate.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutVatRateInput } from './product-create-or-connect-without-vat-rate.input';
import { ProductCreateManyVatRateInputEnvelope } from './product-create-many-vat-rate-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedManyWithoutVatRateInput {

    @Field(() => [ProductCreateWithoutVatRateInput], {nullable:true})
    @Type(() => ProductCreateWithoutVatRateInput)
    create?: Array<ProductCreateWithoutVatRateInput>;

    @Field(() => [ProductCreateOrConnectWithoutVatRateInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutVatRateInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutVatRateInput>;

    @Field(() => ProductCreateManyVatRateInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyVatRateInputEnvelope)
    createMany?: ProductCreateManyVatRateInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
}
