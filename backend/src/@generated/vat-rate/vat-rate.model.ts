import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { VatRateType } from '../prisma/vat-rate-type.enum';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';

@ObjectType()
export class VatRate {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => VatRateType, {nullable:false})
    type!: `${VatRateType}`;

    @Field(() => GraphQLDecimal, {nullable:true})
    rate!: Decimal | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;
}
