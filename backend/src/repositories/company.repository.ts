import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCompanyInput } from 'src/company/dto/create-company.input';
import { UpdateCompanyInput } from 'src/company/dto/update-company.input';

@Injectable()
export class CompanyRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createCompany(userId: string, data: CreateCompanyInput) {
    return this.prisma.company.create({
      data: {
        userId,
        ...data,
      },
    });
  }

  async getCompaniesByUser(userId: string) {
    return this.prisma.company.findMany({
      where: { userId },
    });
  }

  async getCompanyById(companyId: number) {
    return this.prisma.company.findUnique({
      where: { id: companyId },
    });
  }

  async deleteCompany(companyId: number) {
    return this.prisma.company.delete({
      where: { id: companyId },
    });
  }

  async updateCompany(companyId: number, data: UpdateCompanyInput) {
    return this.prisma.company.update({
      where: { id: companyId },
      data,
    });
  }
}
