import {
  Controller,
  Post,
  Get,
  Delete,
  Body,
  Param,
  UseGuards,
  Req,
  ForbiddenException,
} from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { JwtAuthGuard } from '../auth/auth.guard';
import { Request } from 'express';
import { Status } from '@prisma/client';

@Controller('invoices')
export class InvoiceController {
  constructor(private invoiceService: InvoiceService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async addInvoice(
    @Req() req: Request,
    @Body()
    body: {
      companyId: number;
      buyerId: number;
      recipient: string;
      invoiceType: string;
      invoiceNo: string;
      issuedDate: Date;
      transactionDate?: Date;
      dueDate: Date;
      paymentMethod: string;
      paymentDate?: Date;
      description?: string;
      totalAmount: number;
      status: Status;
      currency: string;
    },
  ) {
    if (!req.user) {
      throw new ForbiddenException('User not found in request');
    }

    return this.invoiceService.addInvoice(
      req.user.sub,
      body.companyId,
      body.buyerId,
      body.recipient,
      body.invoiceType,
      body.invoiceNo,
      body.issuedDate,
      body.transactionDate || null,
      body.dueDate,
      body.paymentMethod,
      body.paymentDate || null,
      body.description || null,
      body.totalAmount,
      body.status,
      body.currency,
    );
  }

  @Get(':companyId')
  @UseGuards(JwtAuthGuard)
  async getInvoices(
    @Req() req: Request,
    @Param('companyId') companyId: number,
  ) {
    if (!req.user) {
      throw new ForbiddenException('User not found in request');
    }

    return this.invoiceService.getInvoices(req.user.sub, companyId);
  }

  @Get('single/:invoiceId')
  @UseGuards(JwtAuthGuard)
  async getInvoiceById(
    @Req() req: Request,
    @Param('invoiceId') invoiceId: number,
  ) {
    if (!req.user) {
      throw new ForbiddenException('User not found in request');
    }

    return this.invoiceService.getInvoiceById(req.user.sub, invoiceId);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteInvoice(@Req() req: Request, @Param('id') id: number) {
    if (!req.user) {
      throw new ForbiddenException('User not found in request');
    }

    return this.invoiceService.deleteInvoice(req.user.sub, id);
  }
}
