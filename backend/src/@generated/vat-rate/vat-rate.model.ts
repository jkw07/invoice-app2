import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { VatRateType } from '../prisma/vat-rate-type.enum';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { User } from '../user/user.model';
import { Product } from '../product/product.model';
import { VatRateCount } from './vat-rate-count.output';

@ObjectType()
export class VatRate {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    userId!: string | null;

    @Field(() => VatRateType, {nullable:false})
    type!: `${VatRateType}`;

    @Field(() => GraphQLDecimal, {nullable:true})
    rate!: Decimal | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => [Product], {nullable:true})
    products?: Array<Product>;

    @Field(() => VatRateCount, {nullable:false})
    _count?: VatRateCount;
}
