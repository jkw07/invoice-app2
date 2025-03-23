import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyCreateWithoutInvoicesInput } from './company-create-without-invoices.input';
import { Type } from 'class-transformer';
import { CompanyCreateOrConnectWithoutInvoicesInput } from './company-create-or-connect-without-invoices.input';
import { CompanyUpsertWithoutInvoicesInput } from './company-upsert-without-invoices.input';
import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
import { CompanyUpdateToOneWithWhereWithoutInvoicesInput } from './company-update-to-one-with-where-without-invoices.input';

@InputType()
export class CompanyUpdateOneRequiredWithoutInvoicesNestedInput {

    @Field(() => CompanyCreateWithoutInvoicesInput, {nullable:true})
    @Type(() => CompanyCreateWithoutInvoicesInput)
    create?: CompanyCreateWithoutInvoicesInput;

    @Field(() => CompanyCreateOrConnectWithoutInvoicesInput, {nullable:true})
    @Type(() => CompanyCreateOrConnectWithoutInvoicesInput)
    connectOrCreate?: CompanyCreateOrConnectWithoutInvoicesInput;

    @Field(() => CompanyUpsertWithoutInvoicesInput, {nullable:true})
    @Type(() => CompanyUpsertWithoutInvoicesInput)
    upsert?: CompanyUpsertWithoutInvoicesInput;

    @Field(() => CompanyWhereUniqueInput, {nullable:true})
    @Type(() => CompanyWhereUniqueInput)
    connect?: Prisma.AtLeast<CompanyWhereUniqueInput, 'id'>;

    @Field(() => CompanyUpdateToOneWithWhereWithoutInvoicesInput, {nullable:true})
    @Type(() => CompanyUpdateToOneWithWhereWithoutInvoicesInput)
    update?: CompanyUpdateToOneWithWhereWithoutInvoicesInput;
}
