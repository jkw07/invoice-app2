import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Req,
  UseGuards,
  ForbiddenException,
  Put,
} from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { JwtAuthGuard } from '../auth/auth.guard';
import { Request } from 'express';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { Invoice } from 'src/@generated/invoice/invoice.model';

@Controller('invoices')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async addInvoice(
    @Req() req: Request,
    @Body() body: CreateInvoiceDto,
  ): Promise<Invoice> {
    if (!req.user) throw new ForbiddenException('Unauthorized');

    return this.invoiceService.addInvoice(req.user.sub, body);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':companyId')
  async getInvoices(
    @Req() req: Request,
    @Param('companyId') companyId: number,
  ) {
    if (!req.user) throw new ForbiddenException('Unauthorized');
    return this.invoiceService.getInvoices(req.user.sub, Number(companyId));
  }

  @UseGuards(JwtAuthGuard)
  @Get('single/:invoiceId')
  async getInvoiceById(
    @Req() req: Request,
    @Param('invoiceId') invoiceId: number,
  ) {
    if (!req.user) throw new ForbiddenException('Unauthorized');
    return this.invoiceService.getInvoiceById(req.user.sub, Number(invoiceId));
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':invoiceId')
  async deleteInvoice(
    @Req() req: Request,
    @Param('invoiceId') invoiceId: number,
  ) {
    if (!req.user) throw new ForbiddenException('Unauthorized');
    return this.invoiceService.deleteInvoice(req.user.sub, Number(invoiceId));
  }

  @Put(':invoiceId')
  @UseGuards(JwtAuthGuard)
  async updateInvoice(
    @Req() req: Request,
    @Param('invoiceId') invoiceId: number,
    @Body() body: UpdateInvoiceDto,
  ) {
    if (!req.user) throw new ForbiddenException('Unauthorized');

    return this.invoiceService.updateInvoice(
      req.user.sub,
      Number(invoiceId),
      body,
    );
  }
}
