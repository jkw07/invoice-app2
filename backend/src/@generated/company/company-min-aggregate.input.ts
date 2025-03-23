import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CompanyMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    fullName?: true;

    @Field(() => Boolean, {nullable:true})
    shortName?: true;

    @Field(() => Boolean, {nullable:true})
    tin?: true;

    @Field(() => Boolean, {nullable:true})
    bin?: true;

    @Field(() => Boolean, {nullable:true})
    street?: true;

    @Field(() => Boolean, {nullable:true})
    buildingNo?: true;

    @Field(() => Boolean, {nullable:true})
    apartmentNo?: true;

    @Field(() => Boolean, {nullable:true})
    zipCode?: true;

    @Field(() => Boolean, {nullable:true})
    city?: true;

    @Field(() => Boolean, {nullable:true})
    province?: true;

    @Field(() => Boolean, {nullable:true})
    county?: true;

    @Field(() => Boolean, {nullable:true})
    municipality?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    phone?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
