import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyCreateNestedOneWithoutClientsInput } from '../company/company-create-nested-one-without-clients.input';
import { Type } from 'class-transformer';

@InputType()
export class ClientCreateWithoutInvoicesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    tin?: string;

    @Field(() => String, {nullable:true})
    bin?: string;

    @Field(() => String, {nullable:true})
    street?: string;

    @Field(() => String, {nullable:true})
    buildingNo?: string;

    @Field(() => String, {nullable:true})
    apartmentNo?: string;

    @Field(() => String, {nullable:true})
    zipCode?: string;

    @Field(() => String, {nullable:true})
    city?: string;

    @Field(() => String, {nullable:true})
    province?: string;

    @Field(() => String, {nullable:true})
    county?: string;

    @Field(() => String, {nullable:true})
    municipality?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CompanyCreateNestedOneWithoutClientsInput, {nullable:false})
    @Type(() => CompanyCreateNestedOneWithoutClientsInput)
    company!: CompanyCreateNestedOneWithoutClientsInput;
}
