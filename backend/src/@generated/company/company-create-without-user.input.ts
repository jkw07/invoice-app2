import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettingCreateNestedManyWithoutCompanyInput } from '../setting/setting-create-nested-many-without-company.input';
import { InvoiceCreateNestedManyWithoutCompanyInput } from '../invoice/invoice-create-nested-many-without-company.input';
import { Type } from 'class-transformer';
import { ClientCreateNestedManyWithoutCompanyInput } from '../client/client-create-nested-many-without-company.input';
import { ProductCreateNestedManyWithoutCompanyInput } from '../product/product-create-nested-many-without-company.input';
import { ReminderCreateNestedManyWithoutCompanyInput } from '../reminder/reminder-create-nested-many-without-company.input';

@InputType()
export class CompanyCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    fullName!: string;

    @Field(() => String, {nullable:true})
    shortName?: string;

    @Field(() => String, {nullable:false})
    tin!: string;

    @Field(() => String, {nullable:false})
    bin!: string;

    @Field(() => String, {nullable:false})
    street!: string;

    @Field(() => String, {nullable:false})
    buildingNo!: string;

    @Field(() => String, {nullable:true})
    apartmentNo?: string;

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
    email?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => SettingCreateNestedManyWithoutCompanyInput, {nullable:true})
    settings?: SettingCreateNestedManyWithoutCompanyInput;

    @Field(() => InvoiceCreateNestedManyWithoutCompanyInput, {nullable:true})
    @Type(() => InvoiceCreateNestedManyWithoutCompanyInput)
    invoices?: InvoiceCreateNestedManyWithoutCompanyInput;

    @Field(() => ClientCreateNestedManyWithoutCompanyInput, {nullable:true})
    @Type(() => ClientCreateNestedManyWithoutCompanyInput)
    clients?: ClientCreateNestedManyWithoutCompanyInput;

    @Field(() => ProductCreateNestedManyWithoutCompanyInput, {nullable:true})
    @Type(() => ProductCreateNestedManyWithoutCompanyInput)
    products?: ProductCreateNestedManyWithoutCompanyInput;

    @Field(() => ReminderCreateNestedManyWithoutCompanyInput, {nullable:true})
    @Type(() => ReminderCreateNestedManyWithoutCompanyInput)
    reminders?: ReminderCreateNestedManyWithoutCompanyInput;
}
