import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class VatRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getVatRates() {
    return this.prisma.vatRate.findMany();
  }
}
