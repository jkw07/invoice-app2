import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SettingUncheckedCreateNestedManyWithoutCompanyInput } from '../setting/setting-unchecked-create-nested-many-without-company.input';
import { ClientUncheckedCreateNestedManyWithoutCompanyInput } from '../client/client-unchecked-create-nested-many-without-company.input';
import { Type } from 'class-transformer';
import { ProductUncheckedCreateNestedManyWithoutCompanyInput } from '../product/product-unchecked-create-nested-many-without-company.input';
import { ReminderUncheckedCreateNestedManyWithoutCompanyInput } from '../reminder/reminder-unchecked-create-nested-many-without-company.input';

@InputType()
export class CompanyUncheckedCreateWithoutInvoicesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    userId!: string;

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

    @Field(() => SettingUncheckedCreateNestedManyWithoutCompanyInput, {nullable:true})
    settings?: SettingUncheckedCreateNestedManyWithoutCompanyInput;

    @Field(() => ClientUncheckedCreateNestedManyWithoutCompanyInput, {nullable:true})
    @Type(() => ClientUncheckedCreateNestedManyWithoutCompanyInput)
    clients?: ClientUncheckedCreateNestedManyWithoutCompanyInput;

    @Field(() => ProductUncheckedCreateNestedManyWithoutCompanyInput, {nullable:true})
    @Type(() => ProductUncheckedCreateNestedManyWithoutCompanyInput)
    products?: ProductUncheckedCreateNestedManyWithoutCompanyInput;

    @Field(() => ReminderUncheckedCreateNestedManyWithoutCompanyInput, {nullable:true})
    @Type(() => ReminderUncheckedCreateNestedManyWithoutCompanyInput)
    reminders?: ReminderUncheckedCreateNestedManyWithoutCompanyInput;
}
