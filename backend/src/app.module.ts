import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { InvoiceModule } from './invoice/invoice.module';

@Module({
  imports: [PrismaModule, AuthModule, InvoiceModule],
})
export class AppModule {}
