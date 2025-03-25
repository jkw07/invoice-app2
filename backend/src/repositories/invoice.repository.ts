import { Injectable, Inject } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInvoiceInput } from 'src/invoice/dto/create-invoice.input';
import { UpdateInvoiceInput } from 'src/invoice/dto/update-invoice.input';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class InvoiceRepository {
  constructor(
    @Inject(CACHE_MANAGER) private cache: Cache,
    private readonly prisma: PrismaService,
  ) {}

  async checkUserCompanyAccess(
    userId: string,
    companyId: number,
  ): Promise<boolean> {
    const company = await this.prisma.company.findFirst({
      where: {
        id: companyId,
        userId: userId,
      },
    });
    return !!company;
  }

  async addInvoice(data: CreateInvoiceInput) {
    return this.prisma.invoice.create({
      data: {
        ...data,
        issuedDate: new Date(data.issuedDate),
        dueDate: new Date(data.dueDate),
      },
    });
  }

  async getInvoicesByCompany(companyId: number) {
    return this.prisma.invoice.findMany({
      where: { companyId },
      include: {
        buyer: true,
        invoiceItems: true,
        reminders: true,
      },
    });
  }

  async getInvoiceById(userId: string, invoiceId: number) {
    const cacheKey = `invoice:${userId}:${invoiceId}`;
    const cachedInvoice = await this.cache.get(cacheKey);

    if (cachedInvoice) {
      return cachedInvoice;
    }
    const invoice = await this.prisma.invoice.findUnique({
      where: { id: invoiceId },
      include: { buyer: true, invoiceItems: true, reminders: true }, // szczegóły
    });
    await this.cache.set(cacheKey, invoice, 300);
    return invoice;
  }

  async deleteInvoice(invoiceId: number) {
    return this.prisma.invoice.delete({
      where: { id: invoiceId },
    });
  }

  async updateInvoice(invoiceId: number, data: UpdateInvoiceInput) {
    await this.cache.del(`invoice:${userId}:${invoiceId}`);
    return this.prisma.invoice.update({
      where: { id: invoiceId },
      data,
    });
  }
}
