import { Injectable, ForbiddenException, Inject } from '@nestjs/common';
import { Company } from '@prisma/client';
import { UpdateCompanyInput } from './dto/update-company.input';
import { CreateCompanyInput } from './dto/create-company.input';
import { CompanyRepository } from '../repositories/company.repository';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class CompanyService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly companyRepository: CompanyRepository,
  ) {}

  async createCompany(
    userId: string,
    data: CreateCompanyInput,
  ): Promise<Company> {
    await this.cacheManager.del(`companiesList:${userId}`);
    return this.companyRepository.createCompany(userId, data);
  }

  async getCompaniesByUser(userId: string): Promise<Company[]> {
    const cacheKey = `companiesList:${userId}`;
    const cached = await this.cacheManager.get<Company[]>(cacheKey);
    if (cached) {
      return cached;
    }
    const companies = await this.companyRepository.getCompaniesByUser(userId);
    for (const company of companies) {
      const itemKey = `company:${company.id}`;
      await this.cacheManager.set(itemKey, company, 300);
    }
    await this.cacheManager.set(cacheKey, companies, 300);
    return companies;
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
    const cacheKey = `company:${companyId}`;
    const cached = await this.cacheManager.get<Company>(cacheKey);
    if (cached?.userId === userId) {
      return cached;
    }
    const company = await this.companyRepository.getCompanyById(companyId);
    if (!company) {
      throw new ForbiddenException('Company not found');
    }
    if (company.userId !== userId) {
      throw new ForbiddenException('Access denied');
    }
    await this.cacheManager.set(cacheKey, company, 300);
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
    const updated = await this.companyRepository.updateCompany(companyId, data);
    await this.cacheManager.del(`companiesList:${userId}`);
    await this.cacheManager.del(`company:${companyId}`);
    return updated;
  }

  async deleteCompany(userId: string, companyId: number): Promise<Company> {
    const company = await this.companyRepository.getCompanyById(companyId);
    if (!company) {
      throw new ForbiddenException('Company not found');
    }
    if (company.userId !== userId) {
      throw new ForbiddenException('Access denied');
    }
    const result = await this.companyRepository.deleteCompany(companyId);
    await this.cacheManager.del(`companiesList:${userId}`);
    await this.cacheManager.del(`company:${companyId}`);
    return result;
  }
}
