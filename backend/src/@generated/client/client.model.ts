import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Company } from '../company/company.model';
import { Invoice } from '../invoice/invoice.model';
import { ClientCount } from './client-count.output';

@ObjectType()
export class Client {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    companyId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    tin!: string | null;

    @Field(() => String, {nullable:true})
    bin!: string | null;

    @Field(() => String, {nullable:true})
    street!: string | null;

    @Field(() => String, {nullable:true})
    buildingNo!: string | null;

    @Field(() => String, {nullable:true})
    apartmentNo!: string | null;

    @Field(() => String, {nullable:true})
    zipCode!: string | null;

    @Field(() => String, {nullable:true})
    city!: string | null;

    @Field(() => String, {nullable:true})
    country!: string | null;

    @Field(() => String, {nullable:true})
    province!: string | null;

    @Field(() => String, {nullable:true})
    county!: string | null;

    @Field(() => String, {nullable:true})
    municipality!: string | null;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => String, {nullable:true})
    phone!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Company, {nullable:false})
    company?: Company;

    @Field(() => [Invoice], {nullable:true})
    invoices?: Array<Invoice>;

    @Field(() => ClientCount, {nullable:false})
    _count?: ClientCount;
}
