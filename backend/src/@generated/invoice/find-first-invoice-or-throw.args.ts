import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InvoiceWhereInput } from './invoice-where.input';
import { Type } from 'class-transformer';
import { InvoiceOrderByWithRelationInput } from './invoice-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { InvoiceWhereUniqueInput } from './invoice-where-unique.input';
import { Int } from '@nestjs/graphql';
import { InvoiceScalarFieldEnum } from './invoice-scalar-field.enum';

@ArgsType()
export class FindFirstInvoiceOrThrowArgs {

    @Field(() => InvoiceWhereInput, {nullable:true})
    @Type(() => InvoiceWhereInput)
    where?: InvoiceWhereInput;

    @Field(() => [InvoiceOrderByWithRelationInput], {nullable:true})
    @Type(() => InvoiceOrderByWithRelationInput)
    orderBy?: Array<InvoiceOrderByWithRelationInput>;

    @Field(() => InvoiceWhereUniqueInput, {nullable:true})
    @Type(() => InvoiceWhereUniqueInput)
    cursor?: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [InvoiceScalarFieldEnum], {nullable:true})
    distinct?: Array<`${InvoiceScalarFieldEnum}`>;
}
