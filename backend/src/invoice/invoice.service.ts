import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { UpdateInvoiceInput } from './dto/update-invoice.input';
import { CreateInvoiceInput } from './dto/create-invoice.input';
import { InvoiceRepository } from '../repositories/invoice.repository';

@Injectable()
export class InvoiceService {
  constructor(private readonly invoiceRepository: InvoiceRepository) {}

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
    return this.invoiceRepository.getInvoicesByCompany(companyId);
  }

  async getInvoiceById(userId: string, invoiceId: number) {
    const invoice = await this.invoiceRepository.getInvoiceById(
      userId,
      invoiceId,
    );
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
    return invoice;
  }

  async deleteInvoice(userId: string, invoiceId: number) {
    const invoice = await this.invoiceRepository.getInvoiceById(
      userId,
      invoiceId,
    );
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
    return this.invoiceRepository.deleteInvoice(invoiceId);
  }

  async updateInvoice(
    userId: string,
    invoiceId: number,
    data: UpdateInvoiceInput,
  ) {
    const invoice = await this.invoiceRepository.getInvoiceById(
      userId,
      invoiceId,
    );
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
    return this.invoiceRepository.updateInvoice(invoiceId, data);
  }
}
