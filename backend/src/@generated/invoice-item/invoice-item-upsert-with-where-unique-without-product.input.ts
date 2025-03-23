import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InvoiceItemWhereUniqueInput } from './invoice-item-where-unique.input';
import { Type } from 'class-transformer';
import { InvoiceItemUpdateWithoutProductInput } from './invoice-item-update-without-product.input';
import { InvoiceItemCreateWithoutProductInput } from './invoice-item-create-without-product.input';

@InputType()
export class InvoiceItemUpsertWithWhereUniqueWithoutProductInput {

    @Field(() => InvoiceItemWhereUniqueInput, {nullable:false})
    @Type(() => InvoiceItemWhereUniqueInput)
    where!: Prisma.AtLeast<InvoiceItemWhereUniqueInput, 'id'>;

    @Field(() => InvoiceItemUpdateWithoutProductInput, {nullable:false})
    @Type(() => InvoiceItemUpdateWithoutProductInput)
    update!: InvoiceItemUpdateWithoutProductInput;

    @Field(() => InvoiceItemCreateWithoutProductInput, {nullable:false})
    @Type(() => InvoiceItemCreateWithoutProductInput)
    create!: InvoiceItemCreateWithoutProductInput;
}
