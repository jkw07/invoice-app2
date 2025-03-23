import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { EnumStatusFilter } from '../prisma/enum-status-filter.input';

@InputType()
export class InvoiceScalarWhereInput {

    @Field(() => [InvoiceScalarWhereInput], {nullable:true})
    @Type(() => InvoiceScalarWhereInput)
    AND?: Array<InvoiceScalarWhereInput>;

    @Field(() => [InvoiceScalarWhereInput], {nullable:true})
    @Type(() => InvoiceScalarWhereInput)
    OR?: Array<InvoiceScalarWhereInput>;

    @Field(() => [InvoiceScalarWhereInput], {nullable:true})
    @Type(() => InvoiceScalarWhereInput)
    NOT?: Array<InvoiceScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    companyId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    buyerId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    paymentId?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    recipient?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    invoiceType?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    invoiceNo?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    issuedDate?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    transactionDate?: DateTimeNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    dueDate?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    paymentMethod?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    paymentDate?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    totalAmount?: DecimalFilter;

    @Field(() => StringFilter, {nullable:true})
    currency?: StringFilter;

    @Field(() => EnumStatusFilter, {nullable:true})
    status?: EnumStatusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
