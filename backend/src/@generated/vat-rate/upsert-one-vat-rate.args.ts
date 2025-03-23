import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VatRateWhereUniqueInput } from './vat-rate-where-unique.input';
import { Type } from 'class-transformer';
import { VatRateCreateInput } from './vat-rate-create.input';
import { VatRateUpdateInput } from './vat-rate-update.input';

@ArgsType()
export class UpsertOneVatRateArgs {

    @Field(() => VatRateWhereUniqueInput, {nullable:false})
    @Type(() => VatRateWhereUniqueInput)
    where!: Prisma.AtLeast<VatRateWhereUniqueInput, 'id' | 'type_rate'>;

    @Field(() => VatRateCreateInput, {nullable:false})
    @Type(() => VatRateCreateInput)
    create!: VatRateCreateInput;

    @Field(() => VatRateUpdateInput, {nullable:false})
    @Type(() => VatRateUpdateInput)
    update!: VatRateUpdateInput;
}
