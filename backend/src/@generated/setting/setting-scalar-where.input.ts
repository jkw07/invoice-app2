import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class SettingScalarWhereInput {

    @Field(() => [SettingScalarWhereInput], {nullable:true})
    AND?: Array<SettingScalarWhereInput>;

    @Field(() => [SettingScalarWhereInput], {nullable:true})
    OR?: Array<SettingScalarWhereInput>;

    @Field(() => [SettingScalarWhereInput], {nullable:true})
    NOT?: Array<SettingScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

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
}
