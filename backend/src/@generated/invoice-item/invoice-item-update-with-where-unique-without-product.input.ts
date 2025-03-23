import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InvoiceItemWhereUniqueInput } from './invoice-item-where-unique.input';
import { Type } from 'class-transformer';
import { InvoiceItemUpdateWithoutProductInput } from './invoice-item-update-without-product.input';

@InputType()
export class InvoiceItemUpdateWithWhereUniqueWithoutProductInput {

    @Field(() => InvoiceItemWhereUniqueInput, {nullable:false})
    @Type(() => InvoiceItemWhereUniqueInput)
    where!: Prisma.AtLeast<InvoiceItemWhereUniqueInput, 'id'>;

    @Field(() => InvoiceItemUpdateWithoutProductInput, {nullable:false})
    @Type(() => InvoiceItemUpdateWithoutProductInput)
    data!: InvoiceItemUpdateWithoutProductInput;
}
