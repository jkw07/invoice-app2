import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Setting } from '../setting/setting.model';
import { Invoice } from '../invoice/invoice.model';
import { Client } from '../client/client.model';
import { Product } from '../product/product.model';
import { Reminder } from '../reminder/reminder.model';
import { CompanyCount } from './company-count.output';

@ObjectType()
export class Company {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    fullName!: string;

    @Field(() => String, {nullable:true})
    shortName!: string | null;

    @Field(() => String, {nullable:false})
    tin!: string;

    @Field(() => String, {nullable:false})
    bin!: string;

    @Field(() => String, {nullable:false})
    street!: string;

    @Field(() => String, {nullable:false})
    buildingNo!: string;

    @Field(() => String, {nullable:true})
    apartmentNo!: string | null;

    @Field(() => String, {nullable:false})
    zipCode!: string;

    @Field(() => String, {nullable:false})
    city!: string;

    @Field(() => String, {nullable:false})
    province!: string;

    @Field(() => String, {nullable:false})
    county!: string;

    @Field(() => String, {nullable:false})
    municipality!: string;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => String, {nullable:true})
    phone!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => [Setting], {nullable:true})
    settings?: Array<Setting>;

    @Field(() => [Invoice], {nullable:true})
    invoices?: Array<Invoice>;

    @Field(() => [Client], {nullable:true})
    clients?: Array<Client>;

    @Field(() => [Product], {nullable:true})
    products?: Array<Product>;

    @Field(() => [Reminder], {nullable:true})
    reminders?: Array<Reminder>;

    @Field(() => CompanyCount, {nullable:false})
    _count?: CompanyCount;
}
