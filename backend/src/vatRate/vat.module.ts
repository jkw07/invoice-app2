import { Module } from '@nestjs/common';
import { VatService } from './vat.service';
import { VatResolver } from './vat.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';
import { VatRepository } from 'src/repositories/vat.repository';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [VatService, VatResolver, VatRepository],
})
export class VatModule {}
