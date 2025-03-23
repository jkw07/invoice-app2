import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VatRateType } from '../prisma/vat-rate-type.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';

@InputType()
export class VatRateTypeRateCompoundUniqueInput {

    @Field(() => VatRateType, {nullable:false})
    type!: `${VatRateType}`;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    rate!: Decimal;
}
