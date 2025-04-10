import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { VatRate } from '@prisma/client';

@Injectable()
export class VatRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getVatRates(): Promise<VatRate[]> {
    return this.prisma.vatRate.findMany();
  }
}
