import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { CreateInvoiceDto } from './dto/create-invoice.dto';

@Injectable()
export class InvoiceService {
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

  async addInvoice(userId: string, data: CreateInvoiceDto) {
    const hasAccess = await this.checkUserCompanyAccess(userId, data.companyId);
    if (!hasAccess) {
      throw new ForbiddenException('You do not have access to this company');
    }
    return this.prisma.invoice.create({
      data: {
        ...data,
        recipient: data.recipient ?? null,
        transactionDate: data.transactionDate ?? null,
        paymentDate: data.paymentDate ?? null,
        description: data.description ?? null,
        issuedDate: new Date(data.issuedDate),
        dueDate: new Date(data.dueDate),
      },
    });
  }

  async getInvoices(userId: string, companyId: number) {
    const hasAccess = await this.checkUserCompanyAccess(userId, companyId);
    if (!hasAccess) {
      throw new ForbiddenException('You do not have access to this company');
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
      throw new ForbiddenException('You do not have access to this company');
    }

    return invoice;
  }

  async deleteInvoice(userId: string, invoiceId: number) {
    await this.getInvoiceById(userId, invoiceId);
    return this.prisma.invoice.delete({
      where: { id: invoiceId },
    });
  }

  async updateInvoice(
    userId: string,
    invoiceId: number,
    data: UpdateInvoiceDto,
  ) {
    const invoice = await this.prisma.invoice.findUnique({
      where: { id: invoiceId },
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

    return this.prisma.invoice.update({
      where: { id: invoiceId },
      data,
    });
  }
}
