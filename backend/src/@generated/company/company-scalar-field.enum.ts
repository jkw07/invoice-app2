import { registerEnumType } from '@nestjs/graphql';

export enum CompanyScalarFieldEnum {
    id = "id",
    userId = "userId",
    fullName = "fullName",
    shortName = "shortName",
    tin = "tin",
    bin = "bin",
    street = "street",
    buildingNo = "buildingNo",
    apartmentNo = "apartmentNo",
    zipCode = "zipCode",
    city = "city",
    province = "province",
    county = "county",
    municipality = "municipality",
    email = "email",
    phone = "phone",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CompanyScalarFieldEnum, { name: 'CompanyScalarFieldEnum', description: undefined })
