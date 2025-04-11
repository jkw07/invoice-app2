import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInvoiceInput } from 'src/dto/create-invoice.input';
import { UpdateInvoiceInput } from 'src/dto/update-invoice.input';
import {
  Client,
  Company,
  Invoice,
  InvoiceItem,
  Payment,
  Reminder,
} from '@prisma/client';
import { CreateInvoiceItemInput } from 'src/dto/create-invoice-item.input';

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

  async addInvoiceWithItems(
    inputInvoice: CreateInvoiceInput,
    inputItem: CreateInvoiceItemInput[],
  ): Promise<Invoice> {
    return this.prisma.$transaction(async (prisma) => {
      const invoice = await prisma.invoice.create({
        data: {
          ...inputInvoice,
          issuedDate: new Date(inputInvoice.issuedDate),
          dueDate: new Date(inputInvoice.dueDate),
        },
      });
      await prisma.invoiceItem.createMany({
        data: inputItem.map((item) => ({
          ...item,
          invoiceId: invoice.id,
        })),
      });
      return invoice;
    });
  }

  async getInvoicesByCompany(
    companyId: number,
  ): Promise<(Invoice & { buyer: Client })[]> {
    return this.prisma.invoice.findMany({
      where: { companyId },
      include: {
        buyer: true,
      },
    });
  }
  //TODO czy bd potrzebne cos jeszcze???

  async getInvoiceById(invoiceId: number): Promise<
    | (Invoice & {
        company: Company;
        buyer: Client;
        payment: Payment;
        invoiceItems: InvoiceItem[];
        reminders: Reminder[];
      })
    | null
  > {
    return this.prisma.invoice.findUnique({
      where: { id: invoiceId },
      include: {
        company: true,
        buyer: true,
        payment: true,
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

  async updateInvoiceWithItems(
    invoiceId: number,
    inputInvoice: UpdateInvoiceInput,
    inputItem: CreateInvoiceItemInput[],
  ): Promise<Invoice> {
    return this.prisma.$transaction(async (prisma) => {
      await prisma.invoice.update({
        where: { id: invoiceId },
        data: { ...inputInvoice },
      });
      await prisma.invoiceItem.deleteMany({
        where: { invoiceId },
      });
      if (inputItem.length > 0) {
        await prisma.invoiceItem.createMany({
          data: inputItem.map((item) => ({
            ...item,
            invoiceId,
          })),
        });
      }
      return prisma.invoice.findUniqueOrThrow({
        where: { id: invoiceId },
      });
    });
  }
}
