import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyWhereInput } from './company-where.input';
import { Type } from 'class-transformer';
import { CompanyUpdateWithoutClientsInput } from './company-update-without-clients.input';

@InputType()
export class CompanyUpdateToOneWithWhereWithoutClientsInput {

    @Field(() => CompanyWhereInput, {nullable:true})
    @Type(() => CompanyWhereInput)
    where?: CompanyWhereInput;

    @Field(() => CompanyUpdateWithoutClientsInput, {nullable:false})
    @Type(() => CompanyUpdateWithoutClientsInput)
    data!: CompanyUpdateWithoutClientsInput;
}
