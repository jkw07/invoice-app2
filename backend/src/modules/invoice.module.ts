import { Module } from '@nestjs/common';
import { InvoiceService } from '../services/invoice.service';
import { InvoiceResolver } from '../resolvers/invoice.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';
import { InvoiceRepository } from 'src/repositories/invoice.repository';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [InvoiceService, InvoiceResolver, InvoiceRepository],
})
export class InvoiceModule {}
