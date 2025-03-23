import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
import { Type } from 'class-transformer';
import { CompanyCreateWithoutInvoicesInput } from './company-create-without-invoices.input';

@InputType()
export class CompanyCreateOrConnectWithoutInvoicesInput {

    @Field(() => CompanyWhereUniqueInput, {nullable:false})
    @Type(() => CompanyWhereUniqueInput)
    where!: Prisma.AtLeast<CompanyWhereUniqueInput, 'id'>;

    @Field(() => CompanyCreateWithoutInvoicesInput, {nullable:false})
    @Type(() => CompanyCreateWithoutInvoicesInput)
    create!: CompanyCreateWithoutInvoicesInput;
}
