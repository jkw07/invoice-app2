import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SettingCreateWithoutCompanyInput {

    @Field(() => String, {nullable:false})
    defaultCurrency!: string;

    @Field(() => Boolean, {nullable:true})
    exemptFromTax?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
