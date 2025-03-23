import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ClientScalarWhereInput {

    @Field(() => [ClientScalarWhereInput], {nullable:true})
    AND?: Array<ClientScalarWhereInput>;

    @Field(() => [ClientScalarWhereInput], {nullable:true})
    OR?: Array<ClientScalarWhereInput>;

    @Field(() => [ClientScalarWhereInput], {nullable:true})
    NOT?: Array<ClientScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    companyId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    tin?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    bin?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    street?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    buildingNo?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    apartmentNo?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    zipCode?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    city?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    province?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    county?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    municipality?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phone?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
