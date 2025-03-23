import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VatRateWhereInput } from './vat-rate-where.input';
import { Type } from 'class-transformer';
import { VatRateOrderByWithRelationInput } from './vat-rate-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { VatRateWhereUniqueInput } from './vat-rate-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VatRateScalarFieldEnum } from './vat-rate-scalar-field.enum';

@ArgsType()
export class FindFirstVatRateArgs {

    @Field(() => VatRateWhereInput, {nullable:true})
    @Type(() => VatRateWhereInput)
    where?: VatRateWhereInput;

    @Field(() => [VatRateOrderByWithRelationInput], {nullable:true})
    @Type(() => VatRateOrderByWithRelationInput)
    orderBy?: Array<VatRateOrderByWithRelationInput>;

    @Field(() => VatRateWhereUniqueInput, {nullable:true})
    @Type(() => VatRateWhereUniqueInput)
    cursor?: Prisma.AtLeast<VatRateWhereUniqueInput, 'id' | 'type_rate'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [VatRateScalarFieldEnum], {nullable:true})
    distinct?: Array<`${VatRateScalarFieldEnum}`>;
}
