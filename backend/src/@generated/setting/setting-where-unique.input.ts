import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SettingWhereInput } from './setting-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CompanyScalarRelationFilter } from '../company/company-scalar-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class SettingWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [SettingWhereInput], {nullable:true})
    AND?: Array<SettingWhereInput>;

    @Field(() => [SettingWhereInput], {nullable:true})
    OR?: Array<SettingWhereInput>;

    @Field(() => [SettingWhereInput], {nullable:true})
    NOT?: Array<SettingWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    companyId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    defaultCurrency?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    exemptFromTax?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => CompanyScalarRelationFilter, {nullable:true})
    @Type(() => CompanyScalarRelationFilter)
    company?: CompanyScalarRelationFilter;
}
