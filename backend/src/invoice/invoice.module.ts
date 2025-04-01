import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceResolver } from './invoice.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';
import { InvoiceRepository } from 'src/repositories/invoice.repository';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [InvoiceService, InvoiceResolver, InvoiceRepository],
})
export class InvoiceModule {}
