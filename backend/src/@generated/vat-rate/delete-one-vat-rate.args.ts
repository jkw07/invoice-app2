import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VatRateWhereUniqueInput } from './vat-rate-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneVatRateArgs {

    @Field(() => VatRateWhereUniqueInput, {nullable:false})
    @Type(() => VatRateWhereUniqueInput)
    where!: Prisma.AtLeast<VatRateWhereUniqueInput, 'id' | 'type_rate'>;
}
