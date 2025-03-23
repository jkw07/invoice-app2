import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoiceItemCreateManyProductInput } from './invoice-item-create-many-product.input';
import { Type } from 'class-transformer';

@InputType()
export class InvoiceItemCreateManyProductInputEnvelope {

    @Field(() => [InvoiceItemCreateManyProductInput], {nullable:false})
    @Type(() => InvoiceItemCreateManyProductInput)
    data!: Array<InvoiceItemCreateManyProductInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
