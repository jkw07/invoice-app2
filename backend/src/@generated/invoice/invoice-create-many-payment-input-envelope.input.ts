import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoiceCreateManyPaymentInput } from './invoice-create-many-payment.input';
import { Type } from 'class-transformer';

@InputType()
export class InvoiceCreateManyPaymentInputEnvelope {

    @Field(() => [InvoiceCreateManyPaymentInput], {nullable:false})
    @Type(() => InvoiceCreateManyPaymentInput)
    data!: Array<InvoiceCreateManyPaymentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
