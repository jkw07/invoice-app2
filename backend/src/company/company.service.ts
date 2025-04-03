import { Injectable, ForbiddenException } from '@nestjs/common';
import { Company } from '@prisma/client';
import { UpdateCompanyInput } from './dto/update-company.input';
import { CreateCompanyInput } from './dto/create-company.input';
import { CompanyRepository } from '../repositories/company.repository';

@Injectable()
export class CompanyService {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async createCompany(userId: string, data: CreateCompanyInput) {
    return this.companyRepository.createCompany(userId, data);
  }

  async getCompaniesByUser(userId: string): Promise<Company[]> {
    return this.companyRepository.getCompaniesByUser(userId);
  }

  async getDefaultCompanyByUser(userId: string): Promise<Company> {
    const company =
      await this.companyRepository.getDefaultCompanyByUser(userId);
    if (!company) {
      throw new ForbiddenException('Company not found');
    }
    return company;
  }

  async getCompanyById(userId: string, companyId: number): Promise<Company> {
    const company = await this.companyRepository.getCompanyById(companyId);
    if (!company) {
      throw new ForbiddenException('Company not found');
    }
    if (company.userId !== userId) {
      throw new ForbiddenException('Access denied');
    }
    return company;
  }

  async updateCompany(
    userId: string,
    companyId: number,
    data: UpdateCompanyInput,
  ): Promise<Company> {
    const company = await this.companyRepository.getCompanyById(companyId);
    if (!company) {
      throw new ForbiddenException('Company not found');
    }
    if (company.userId !== userId) {
      throw new ForbiddenException('Access denied');
    }
    return this.companyRepository.updateCompany(companyId, data);
  }

  async deleteCompany(userId: string, companyId: number): Promise<Company> {
    const company = await this.companyRepository.getCompanyById(companyId);
    if (!company) {
      throw new ForbiddenException('Company not found');
    }
    if (company.userId !== userId) {
      throw new ForbiddenException('Access denied');
    }
    return this.companyRepository.deleteCompany(companyId);
  }
}
