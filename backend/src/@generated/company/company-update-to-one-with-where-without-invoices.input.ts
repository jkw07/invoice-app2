import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyWhereInput } from './company-where.input';
import { Type } from 'class-transformer';
import { CompanyUpdateWithoutInvoicesInput } from './company-update-without-invoices.input';

@InputType()
export class CompanyUpdateToOneWithWhereWithoutInvoicesInput {

    @Field(() => CompanyWhereInput, {nullable:true})
    @Type(() => CompanyWhereInput)
    where?: CompanyWhereInput;

    @Field(() => CompanyUpdateWithoutInvoicesInput, {nullable:false})
    @Type(() => CompanyUpdateWithoutInvoicesInput)
    data!: CompanyUpdateWithoutInvoicesInput;
}
