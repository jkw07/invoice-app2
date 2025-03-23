import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoiceCreateManyCompanyInput } from './invoice-create-many-company.input';
import { Type } from 'class-transformer';

@InputType()
export class InvoiceCreateManyCompanyInputEnvelope {

    @Field(() => [InvoiceCreateManyCompanyInput], {nullable:false})
    @Type(() => InvoiceCreateManyCompanyInput)
    data!: Array<InvoiceCreateManyCompanyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
