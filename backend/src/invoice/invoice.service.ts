import {
  Injectable,
  ForbiddenException,
  NotFoundException,
  Inject,
} from '@nestjs/common';
import { UpdateInvoiceInput } from './dto/update-invoice.input';
import { CreateInvoiceInput } from './dto/create-invoice.input';
import { InvoiceRepository } from '../repositories/invoice.repository';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Invoice } from '@prisma/client';

@Injectable()
export class InvoiceService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly invoiceRepository: InvoiceRepository,
  ) {}

  private async checkAccessOrThrow(userId: string, companyId: number) {
    const hasAccess = await this.invoiceRepository.checkUserCompanyAccess(
      userId,
      companyId,
    );
    if (!hasAccess) {
      throw new ForbiddenException('You do not have access to this company');
    }
  }

  async addInvoice(userId: string, data: CreateInvoiceInput): Promise<Invoice> {
    await this.checkAccessOrThrow(userId, data.companyId);
    await this.cacheManager.del(`invoicesList:${data.companyId}`);
    return this.invoiceRepository.addInvoice(data);
  }

  async getInvoicesByCompany(
    userId: string,
    companyId: number,
  ): Promise<Invoice[]> {
    await this.checkAccessOrThrow(userId, companyId);
    const cacheKey = `invoicesList:${companyId}`;
    const cached = await this.cacheManager.get<Invoice[]>(cacheKey);
    if (cached) {
      return cached;
    }
    const invoices =
      await this.invoiceRepository.getInvoicesByCompany(companyId);
    for (const invoice of invoices) {
      const itemKey = `invoice:${invoice.id}`;
      await this.cacheManager.set(itemKey, invoice, 300);
    }
    await this.cacheManager.set(cacheKey, invoices, 300);
    return invoices;
  }

  async getInvoiceById(userId: string, invoiceId: number): Promise<Invoice> {
    const cacheKey = `invoice:${invoiceId}`;
    const cached = await this.cacheManager.get<Invoice>(cacheKey);
    if (cached) {
      await this.checkAccessOrThrow(userId, cached.companyId);
      return cached;
    }
    const invoice = await this.invoiceRepository.getInvoiceById(invoiceId);
    if (!invoice) {
      throw new NotFoundException('Invoice not found');
    }
    await this.checkAccessOrThrow(userId, invoice.companyId);
    await this.cacheManager.set(cacheKey, invoice, 300);
    return invoice;
  }

  async deleteInvoice(userId: string, invoiceId: number): Promise<Invoice> {
    const invoice = await this.invoiceRepository.getInvoiceById(invoiceId);
    if (!invoice) {
      throw new NotFoundException('Invoice not found');
    }
    await this.checkAccessOrThrow(userId, invoice.companyId);
    const result = await this.invoiceRepository.deleteInvoice(invoiceId);
    await this.cacheManager.del(`invoice:${invoice.id}`);
    await this.cacheManager.del(`invoicesList:${invoice.companyId}`);
    return result;
  }

  async updateInvoice(
    userId: string,
    invoiceId: number,
    data: UpdateInvoiceInput,
  ): Promise<Invoice> {
    const invoice = await this.invoiceRepository.getInvoiceById(invoiceId);
    if (!invoice) {
      throw new NotFoundException('Invoice not found');
    }
    await this.checkAccessOrThrow(userId, invoice.companyId);
    const updated = await this.invoiceRepository.updateInvoice(invoiceId, data);
    await this.cacheManager.del(`invoice:${invoice.id}`);
    await this.cacheManager.del(`invoicesList:${invoice.companyId}`);
    return updated;
  }
}
