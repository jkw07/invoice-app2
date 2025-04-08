import { VatRateType } from "./enums";

export interface VatRate {
  id: number;
  type: VatRateType;
  rate: string | null;
}

export interface GetVatRatesQuery {
  getVatRates: VatRate[];
}
