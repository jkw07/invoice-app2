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

  async addInvoice(userId: string, data: CreateInvoiceInput) {
    await this.checkAccessOrThrow(userId, data.companyId);
    await this.cacheManager.del(`${userId}:invoicesList:${data.companyId}`);
    return this.invoiceRepository.addInvoice(data);
  }

  async getInvoicesByCompany(userId: string, companyId: number) {
    await this.checkAccessOrThrow(userId, companyId);
    const cacheKey = `${userId}:invoicesList:${companyId}`;
    const cached = await this.cacheManager.get(cacheKey);
    if (cached) {
      return cached;
    }
    const invoices =
      await this.invoiceRepository.getInvoicesByCompany(companyId);
    for (const invoice of invoices) {
      const itemKey = `${userId}:invoice:${invoice.companyId}:${invoice.id}`; //TODO wersje + pobierac zawsze wersje, nie usuwac
      await this.cacheManager.set(itemKey, invoice, 120);
    }
    await this.cacheManager.set(cacheKey, invoices, 120);
    return invoices;
  }

  async getInvoiceById(userId: string, invoiceId: number, companyId: number) {
    const cacheKey = `${userId}:invoice:${companyId}:${invoiceId}`;
    const cached = await this.cacheManager.get(cacheKey);
    if (cached) {
      await this.checkAccessOrThrow(userId, companyId);
      return cached;
    }
    const invoice = await this.invoiceRepository.getInvoiceById(invoiceId);
    if (!invoice) {
      throw new NotFoundException('Invoice not found');
    }
    await this.checkAccessOrThrow(userId, invoice.companyId);
    await this.cacheManager.set(cacheKey, invoice, 120);
    return invoice;
  }

  async deleteInvoice(userId: string, invoiceId: number) {
    const invoice = await this.invoiceRepository.getInvoiceById(invoiceId);
    if (!invoice) {
      throw new NotFoundException('Invoice not found');
    }
    await this.checkAccessOrThrow(userId, invoice.companyId);
    const result = await this.invoiceRepository.deleteInvoice(invoiceId);
    await this.cacheManager.del(
      `${userId}:invoice:${invoice.companyId}:${invoice.id}`,
    );
    await this.cacheManager.del(`${userId}:invoicesList:${invoice.companyId}`);
    return result;
  }

  async updateInvoice(
    userId: string,
    invoiceId: number,
    data: UpdateInvoiceInput,
  ) {
    const invoice = await this.invoiceRepository.getInvoiceById(invoiceId);
    if (!invoice) {
      throw new NotFoundException('Invoice not found');
    }
    await this.checkAccessOrThrow(userId, invoice.companyId);
    const updated = await this.invoiceRepository.updateInvoice(invoiceId, data);
    await this.cacheManager.del(
      `${userId}:invoice:${invoice.companyId}:${invoice.id}`,
    );
    await this.cacheManager.del(`${userId}:invoicesList:${invoice.companyId}`);
    return updated;
  }
}
