import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class InvoiceService {
  constructor(private prisma: PrismaService) {}

  async addInvoice(userId: string, amount: number) {
    return this.prisma.invoice.create({
      data: { userId, amount },
    });
  }

  async getInvoices(userId: string) {
    return this.prisma.invoice.findMany({ where: { userId } });
  }

  async deleteInvoice(invoiceId: string) {
    return this.prisma.invoice.delete({ where: { id: invoiceId } });
  }
}
