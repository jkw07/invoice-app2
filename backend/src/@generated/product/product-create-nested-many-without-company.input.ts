import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutCompanyInput } from './product-create-without-company.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutCompanyInput } from './product-create-or-connect-without-company.input';
import { ProductCreateManyCompanyInputEnvelope } from './product-create-many-company-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedManyWithoutCompanyInput {

    @Field(() => [ProductCreateWithoutCompanyInput], {nullable:true})
    @Type(() => ProductCreateWithoutCompanyInput)
    create?: Array<ProductCreateWithoutCompanyInput>;

    @Field(() => [ProductCreateOrConnectWithoutCompanyInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutCompanyInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCompanyInput>;

    @Field(() => ProductCreateManyCompanyInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyCompanyInputEnvelope)
    createMany?: ProductCreateManyCompanyInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
}
