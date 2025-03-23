/*
  Warnings:

  - A unique constraint covering the columns `[type,rate]` on the table `vat_rates` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "vat_rates_type_rate_key" ON "vat_rates"("type", "rate");
