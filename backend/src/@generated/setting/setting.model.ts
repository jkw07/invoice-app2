import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Company } from '../company/company.model';

@ObjectType()
export class Setting {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    companyId!: number;

    @Field(() => String, {nullable:false})
    defaultCurrency!: string;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    exemptFromTax!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Company, {nullable:false})
    company?: Company;
}
