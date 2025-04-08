import { Resolver, Query } from '@nestjs/graphql';
import { VatService } from './vat.service';
import { VatRate } from 'src/@generated/vat-rate/vat-rate.model';

@Resolver(() => VatRate)
export class VatResolver {
  constructor(private readonly vatService: VatService) {}

  @Query(() => [VatRate])
  async getVatRates() {
    return this.vatService.getVatRates();
  }
}
