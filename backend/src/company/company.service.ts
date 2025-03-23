import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Company } from '@prisma/client';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { CreateCompanyDto } from './dto/create-company.dto';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}

  async createCompany(userId: string, data: CreateCompanyDto) {
    return this.prisma.company.create({
      data: {
        userId,
        fullName: data.fullName,
        shortName: data.shortName ?? null,
        tin: data.tin,
        bin: data.bin,
        street: data.street,
        buildingNo: data.buildingNo,
        apartmentNo: data.apartmentNo ?? null,
        zipCode: data.zipCode,
        city: data.city,
        province: data.province,
        county: data.county,
        municipality: data.municipality,
        email: data.email ?? null,
        phone: data.phone ?? null,
      },
    });
  }

  async getCompanies(userId: string): Promise<Company[]> {
    return this.prisma.company.findMany({
      where: { userId },
    });
  }

  async getCompanyById(userId: string, companyId: number): Promise<Company> {
    const company = await this.prisma.company.findUnique({
      where: { id: companyId },
    });

    if (!company || company.userId !== userId) {
      throw new ForbiddenException('Access denied or company not found');
    }

    return company;
  }

  async updateCompany(
    userId: string,
    companyId: number,
    data: UpdateCompanyDto,
  ): Promise<Company> {
    const company = await this.getCompanyById(userId, companyId);

    return this.prisma.company.update({
      where: { id: company.id },
      data: {
        fullName: data.fullName,
        shortName: data.shortName ?? null,
        tin: data.tin,
        bin: data.bin,
        street: data.street,
        buildingNo: data.buildingNo,
        apartmentNo: data.apartmentNo ?? null,
        zipCode: data.zipCode,
        city: data.city,
        province: data.province,
        county: data.county,
        municipality: data.municipality,
        email: data.email ?? null,
        phone: data.phone ?? null,
      },
    });
  }

  async deleteCompany(userId: string, companyId: number): Promise<Company> {
    const company = await this.getCompanyById(userId, companyId);

    return this.prisma.company.delete({
      where: { id: company.id },
    });
  }
}
