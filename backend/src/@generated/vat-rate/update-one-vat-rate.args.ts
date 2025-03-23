import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VatRateUpdateInput } from './vat-rate-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { VatRateWhereUniqueInput } from './vat-rate-where-unique.input';

@ArgsType()
export class UpdateOneVatRateArgs {

    @Field(() => VatRateUpdateInput, {nullable:false})
    @Type(() => VatRateUpdateInput)
    data!: VatRateUpdateInput;

    @Field(() => VatRateWhereUniqueInput, {nullable:false})
    @Type(() => VatRateWhereUniqueInput)
    where!: Prisma.AtLeast<VatRateWhereUniqueInput, 'id' | 'type_rate'>;
}
