import {
  Controller,
  Post,
  Get,
  Delete,
  Body,
  Param,
  UseGuards,
  Req,
} from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { JwtAuthGuard } from '../auth/auth.guard';
import { Request } from 'express';

@Controller('invoices')
export class InvoiceController {
  constructor(private invoiceService: InvoiceService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async addInvoice(@Req() req: Request, @Body() body: { amount: number }) {
    if (!req.user) {
      throw new Error('User not found in request');
    }
    return this.invoiceService.addInvoice(req.user.sub, body.amount);
  }

  @Get(':userId')
  @UseGuards(JwtAuthGuard)
  async getInvoices(@Param('userId') userId: string) {
    return this.invoiceService.getInvoices(userId);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteInvoice(@Param('id') id: string) {
    return this.invoiceService.deleteInvoice(id);
  }
}
