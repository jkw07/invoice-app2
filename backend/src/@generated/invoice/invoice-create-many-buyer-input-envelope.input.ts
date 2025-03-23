import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoiceCreateManyBuyerInput } from './invoice-create-many-buyer.input';
import { Type } from 'class-transformer';

@InputType()
export class InvoiceCreateManyBuyerInputEnvelope {

    @Field(() => [InvoiceCreateManyBuyerInput], {nullable:false})
    @Type(() => InvoiceCreateManyBuyerInput)
    data!: Array<InvoiceCreateManyBuyerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
