import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutCompanyInput } from './product-create-without-company.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutCompanyInput } from './product-create-or-connect-without-company.input';
import { ProductUpsertWithWhereUniqueWithoutCompanyInput } from './product-upsert-with-where-unique-without-company.input';
import { ProductCreateManyCompanyInputEnvelope } from './product-create-many-company-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithWhereUniqueWithoutCompanyInput } from './product-update-with-where-unique-without-company.input';
import { ProductUpdateManyWithWhereWithoutCompanyInput } from './product-update-many-with-where-without-company.input';
import { ProductScalarWhereInput } from './product-scalar-where.input';

@InputType()
export class ProductUncheckedUpdateManyWithoutCompanyNestedInput {

    @Field(() => [ProductCreateWithoutCompanyInput], {nullable:true})
    @Type(() => ProductCreateWithoutCompanyInput)
    create?: Array<ProductCreateWithoutCompanyInput>;

    @Field(() => [ProductCreateOrConnectWithoutCompanyInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutCompanyInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCompanyInput>;

    @Field(() => [ProductUpsertWithWhereUniqueWithoutCompanyInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutCompanyInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutCompanyInput>;

    @Field(() => ProductCreateManyCompanyInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyCompanyInputEnvelope)
    createMany?: ProductCreateManyCompanyInputEnvelope;

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

    @Field(() => [ProductUpdateWithWhereUniqueWithoutCompanyInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutCompanyInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutCompanyInput>;

    @Field(() => [ProductUpdateManyWithWhereWithoutCompanyInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutCompanyInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutCompanyInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}
