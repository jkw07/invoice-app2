import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PaymentScalarWhereInput {

    @Field(() => [PaymentScalarWhereInput], {nullable:true})
    AND?: Array<PaymentScalarWhereInput>;

    @Field(() => [PaymentScalarWhereInput], {nullable:true})
    OR?: Array<PaymentScalarWhereInput>;

    @Field(() => [PaymentScalarWhereInput], {nullable:true})
    NOT?: Array<PaymentScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    method?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
