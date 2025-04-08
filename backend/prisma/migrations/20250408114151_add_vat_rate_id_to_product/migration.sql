/*
  Warnings:

  - You are about to drop the column `tax_rate` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `tax_type` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "tax_rate",
DROP COLUMN "tax_type",
ADD COLUMN     "vat_rate_id" INTEGER NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_vat_rate_id_fkey" FOREIGN KEY ("vat_rate_id") REFERENCES "vat_rates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
