import { Module } from '@nestjs/common';
import { CompanyService } from '../services/company.service';
import { PrismaModule } from '../prisma/prisma.module';
import { CompanyResolver } from '../resolvers/company.resolver';
import { AuthModule } from 'src/auth/auth.module';
import { CompanyRepository } from 'src/repositories/company.repository';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [CompanyService, CompanyResolver, CompanyRepository],
  exports: [CompanyService],
})
export class CompanyModule {}
