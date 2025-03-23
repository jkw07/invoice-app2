import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyUpdateWithoutClientsInput } from './company-update-without-clients.input';
import { Type } from 'class-transformer';
import { CompanyCreateWithoutClientsInput } from './company-create-without-clients.input';
import { CompanyWhereInput } from './company-where.input';

@InputType()
export class CompanyUpsertWithoutClientsInput {

    @Field(() => CompanyUpdateWithoutClientsInput, {nullable:false})
    @Type(() => CompanyUpdateWithoutClientsInput)
    update!: CompanyUpdateWithoutClientsInput;

    @Field(() => CompanyCreateWithoutClientsInput, {nullable:false})
    @Type(() => CompanyCreateWithoutClientsInput)
    create!: CompanyCreateWithoutClientsInput;

    @Field(() => CompanyWhereInput, {nullable:true})
    @Type(() => CompanyWhereInput)
    where?: CompanyWhereInput;
}
