import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyCreateWithoutInvoicesInput } from './company-create-without-invoices.input';
import { Type } from 'class-transformer';
import { CompanyCreateOrConnectWithoutInvoicesInput } from './company-create-or-connect-without-invoices.input';
import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';

@InputType()
export class CompanyCreateNestedOneWithoutInvoicesInput {

    @Field(() => CompanyCreateWithoutInvoicesInput, {nullable:true})
    @Type(() => CompanyCreateWithoutInvoicesInput)
    create?: CompanyCreateWithoutInvoicesInput;

    @Field(() => CompanyCreateOrConnectWithoutInvoicesInput, {nullable:true})
    @Type(() => CompanyCreateOrConnectWithoutInvoicesInput)
    connectOrCreate?: CompanyCreateOrConnectWithoutInvoicesInput;

    @Field(() => CompanyWhereUniqueInput, {nullable:true})
    @Type(() => CompanyWhereUniqueInput)
    connect?: Prisma.AtLeast<CompanyWhereUniqueInput, 'id'>;
}
