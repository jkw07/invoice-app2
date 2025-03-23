import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientCreateManyCompanyInput } from './client-create-many-company.input';
import { Type } from 'class-transformer';

@InputType()
export class ClientCreateManyCompanyInputEnvelope {

    @Field(() => [ClientCreateManyCompanyInput], {nullable:false})
    @Type(() => ClientCreateManyCompanyInput)
    data!: Array<ClientCreateManyCompanyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
