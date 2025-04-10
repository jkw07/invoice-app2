import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInvoiceInput } from 'src/dto/create-invoice.input';
import { UpdateInvoiceInput } from 'src/dto/update-invoice.input';
import { Invoice } from '@prisma/client';

@Injectable()
export class InvoiceRepository {
  constructor(private readonly prisma: PrismaService) {}

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

  async addInvoice(data: CreateInvoiceInput): Promise<Invoice> {
    return this.prisma.invoice.create({
      data: {
        ...data,
        issuedDate: new Date(data.issuedDate),
        dueDate: new Date(data.dueDate),
      },
    });
  }

  async getInvoicesByCompany(companyId: number): Promise<Invoice[]> {
    return this.prisma.invoice.findMany({
      where: { companyId },
      include: {
        buyer: true,
        invoiceItems: true,
        reminders: true,
      },
    });
  }

  async getInvoiceById(invoiceId: number): Promise<Invoice | null> {
    return this.prisma.invoice.findUnique({
      where: { id: invoiceId },
      include: {
        buyer: true,
        invoiceItems: true,
        reminders: true,
      },
    });
  }

  async getInvoiceByNumber(
    invoiceNo: string,
    companyId: number,
  ): Promise<Invoice | null> {
    return this.prisma.invoice.findFirst({
      where: { invoiceNo, companyId },
    });
  }

  async deleteInvoice(invoiceId: number): Promise<Invoice> {
    return this.prisma.invoice.delete({
      where: { id: invoiceId },
    });
  }

  async updateInvoice(
    invoiceId: number,
    data: UpdateInvoiceInput,
  ): Promise<Invoice> {
    return this.prisma.invoice.update({
      where: { id: invoiceId },
      data,
    });
  }
}
