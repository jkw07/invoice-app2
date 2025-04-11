import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCompanyInput } from 'src/dto/create-company.input';
import { UpdateCompanyInput } from 'src/dto/update-company.input';
import { Company } from '@prisma/client';

@Injectable()
export class CompanyRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createCompany(
    userId: string,
    input: CreateCompanyInput,
  ): Promise<Company> {
    return this.prisma.company.create({
      data: {
        userId,
        ...input,
      },
    });
  }

  async getDefaultCompanyByUser(userId: string): Promise<Company | null> {
    return this.prisma.company.findFirst({
      where: { userId },
    });
  }

  async getCompaniesByUser(userId: string): Promise<Company[]> {
    return this.prisma.company.findMany({
      where: { userId },
    });
  }

  async getCompanyById(companyId: number): Promise<Company | null> {
    return this.prisma.company.findUnique({
      where: { id: companyId },
    });
  }

  async getCompanyByTIN(tin: string, userId: string): Promise<Company | null> {
    return this.prisma.company.findFirst({
      where: {
        tin,
        userId,
      },
    });
  }

  async deleteCompany(companyId: number): Promise<Company> {
    return this.prisma.company.delete({
      where: { id: companyId },
    });
  }

  async updateCompany(
    companyId: number,
    input: UpdateCompanyInput,
  ): Promise<Company> {
    return this.prisma.company.update({
      where: { id: companyId },
      data: { ...input },
    });
  }
}
