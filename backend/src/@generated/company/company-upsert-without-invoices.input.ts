import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyUpdateWithoutInvoicesInput } from './company-update-without-invoices.input';
import { Type } from 'class-transformer';
import { CompanyCreateWithoutInvoicesInput } from './company-create-without-invoices.input';
import { CompanyWhereInput } from './company-where.input';

@InputType()
export class CompanyUpsertWithoutInvoicesInput {

    @Field(() => CompanyUpdateWithoutInvoicesInput, {nullable:false})
    @Type(() => CompanyUpdateWithoutInvoicesInput)
    update!: CompanyUpdateWithoutInvoicesInput;

    @Field(() => CompanyCreateWithoutInvoicesInput, {nullable:false})
    @Type(() => CompanyCreateWithoutInvoicesInput)
    create!: CompanyCreateWithoutInvoicesInput;

    @Field(() => CompanyWhereInput, {nullable:true})
    @Type(() => CompanyWhereInput)
    where?: CompanyWhereInput;
}
