import { Injectable } from '@nestjs/common';
import { VatRepository } from '../repositories/vat.repository';

@Injectable()
export class VatService {
  constructor(private readonly vatRepository: VatRepository) {}

  async getVatRates() {
    return this.vatRepository.getVatRates();
  }
}
