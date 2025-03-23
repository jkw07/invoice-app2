import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InvoiceItemWhereInput } from './invoice-item-where.input';
import { Type } from 'class-transformer';
import { InvoiceItemOrderByWithRelationInput } from './invoice-item-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { InvoiceItemWhereUniqueInput } from './invoice-item-where-unique.input';
import { Int } from '@nestjs/graphql';
import { InvoiceItemScalarFieldEnum } from './invoice-item-scalar-field.enum';

@ArgsType()
export class FindFirstInvoiceItemOrThrowArgs {

    @Field(() => InvoiceItemWhereInput, {nullable:true})
    @Type(() => InvoiceItemWhereInput)
    where?: InvoiceItemWhereInput;

    @Field(() => [InvoiceItemOrderByWithRelationInput], {nullable:true})
    @Type(() => InvoiceItemOrderByWithRelationInput)
    orderBy?: Array<InvoiceItemOrderByWithRelationInput>;

    @Field(() => InvoiceItemWhereUniqueInput, {nullable:true})
    @Type(() => InvoiceItemWhereUniqueInput)
    cursor?: Prisma.AtLeast<InvoiceItemWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [InvoiceItemScalarFieldEnum], {nullable:true})
    distinct?: Array<`${InvoiceItemScalarFieldEnum}`>;
}
