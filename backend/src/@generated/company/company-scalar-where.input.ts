import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CompanyScalarWhereInput {

    @Field(() => [CompanyScalarWhereInput], {nullable:true})
    AND?: Array<CompanyScalarWhereInput>;

    @Field(() => [CompanyScalarWhereInput], {nullable:true})
    OR?: Array<CompanyScalarWhereInput>;

    @Field(() => [CompanyScalarWhereInput], {nullable:true})
    NOT?: Array<CompanyScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    fullName?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    shortName?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    tin?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    bin?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    street?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    buildingNo?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    apartmentNo?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    zipCode?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    city?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    province?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    county?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    municipality?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phone?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
