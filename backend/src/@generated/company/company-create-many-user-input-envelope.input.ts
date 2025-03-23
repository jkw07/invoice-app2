import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyCreateManyUserInput } from './company-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class CompanyCreateManyUserInputEnvelope {

    @Field(() => [CompanyCreateManyUserInput], {nullable:false})
    @Type(() => CompanyCreateManyUserInput)
    data!: Array<CompanyCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
