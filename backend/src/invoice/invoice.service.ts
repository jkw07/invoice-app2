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
    @Inject(CACHE_MANAGER) private cache: Cache,
    private readonly invoiceRepository: InvoiceRepository,
  ) {}

  async addInvoice(userId: string, data: CreateInvoiceInput) {
    const hasAccess = await this.invoiceRepository.checkUserCompanyAccess(
      userId,
      data.companyId,
    );
    if (!hasAccess) {
      throw new ForbiddenException('You do not have access to this company');
    }
    return this.invoiceRepository.addInvoice(data);
  }

  async getInvoicesByCompany(userId: string, companyId: number) {
    const hasAccess = await this.invoiceRepository.checkUserCompanyAccess(
      userId,
      companyId,
    );
    if (!hasAccess) {
      throw new ForbiddenException('You do not have access to this company');
    }
    const invoices =
      await this.invoiceRepository.getInvoicesByCompany(companyId);

    for (const invoice of invoices) {
      const key = `invoice:${userId}:${invoice.id}`;
      await this.cache.set(key, invoice, 300);
    }

    return invoices;
  }

  async getInvoiceById(userId: string, invoiceId: number) {
    const cacheKey = `invoice:${userId}:${invoiceId}`;
    const cached = await this.cache.get(cacheKey);
    if (cached) {
      return cached;
    }
    const invoice = await this.invoiceRepository.getInvoiceById(invoiceId);
    if (!invoice) {
      throw new NotFoundException('Invoice not found');
    }
    const hasAccess = await this.invoiceRepository.checkUserCompanyAccess(
      userId,
      invoice.companyId,
    );
    if (!hasAccess) {
      throw new ForbiddenException('You do not have access to this company');
    }
    await this.cache.set(cacheKey, invoice, 300);
    return invoice;
  }

  async deleteInvoice(userId: string, invoiceId: number) {
    const invoice = await this.invoiceRepository.getInvoiceById(invoiceId);
    if (!invoice) {
      throw new NotFoundException('Invoice not found');
    }
    const hasAccess = await this.invoiceRepository.checkUserCompanyAccess(
      userId,
      invoice.companyId,
    );
    if (!hasAccess) {
      throw new ForbiddenException('You do not have access to this company');
    }
    const result = await this.invoiceRepository.deleteInvoice(invoiceId);
    await this.cache.del(`invoice:${userId}:${invoiceId}`);
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
    const hasAccess = await this.invoiceRepository.checkUserCompanyAccess(
      userId,
      invoice.companyId,
    );
    if (!hasAccess) {
      throw new ForbiddenException('You do not have access to this company');
    }
    const updated = await this.invoiceRepository.updateInvoice(invoiceId, data);
    await this.cache.del(`invoice:${userId}:${invoiceId}`);
    return updated;
  }
}
