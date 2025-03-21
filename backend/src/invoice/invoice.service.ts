import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Status } from '@prisma/client';
import type { Company } from '@prisma/client';

@Injectable()
export class InvoiceService {
  constructor(private prisma: PrismaService) {}

  async addInvoice(
    userId: string,
    companyId: number,
    buyerId: number,
    recipient: string,
    invoiceType: string,
    invoiceNo: string,
    issuedDate: Date,
    transactionDate: Date | null,
    dueDate: Date,
    paymentMethod: string,
    paymentDate: Date | null,
    description: string | null,
    totalAmount: number,
    status: Status,
    currency: string,
  ) {
    const hasAccess = await this.checkUserCompanyAccess(userId, companyId);
    if (!hasAccess) {
      throw new ForbiddenException('Access denied to this company');
    }

    return this.prisma.invoice.create({
      data: {
        companyId,
        buyerId,
        recipient,
        invoiceType,
        invoiceNo,
        issuedDate,
        transactionDate,
        dueDate,
        paymentMethod,
        paymentDate,
        description,
        totalAmount,
        status,
        currency,
      },
    });
  }

  async getInvoices(userId: string, companyId: number) {
    const hasAccess = await this.checkUserCompanyAccess(userId, companyId);
    if (!hasAccess) {
      throw new ForbiddenException('Access denied to this company');
    }

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
    const invoice = await this.prisma.invoice.findUnique({
      where: { id: invoiceId },
      include: {
        buyer: true,
        invoiceItems: true,
        reminders: true,
      },
    });

    if (!invoice) {
      throw new NotFoundException('Invoice not found');
    }

    const hasAccess = await this.checkUserCompanyAccess(
      userId,
      invoice.companyId,
    );
    if (!hasAccess) {
      throw new ForbiddenException('Access denied to this company');
    }

    return invoice;
  }

  async deleteInvoice(userId: string, invoiceId: number) {
    await this.getInvoiceById(userId, invoiceId);

    return this.prisma.invoice.delete({
      where: { id: invoiceId },
    });
  }

  async checkUserCompanyAccess(
    userId: string,
    companyId: number,
  ): Promise<boolean> {
    try {
      const company: Company | null = await this.prisma.company?.findFirst({
        where: {
          id: companyId,
          userId: userId,
        },
      });

      return !!company;
    } catch (error) {
      console.error('Error checking company access:', error);
      return false;
    }
  }
}
