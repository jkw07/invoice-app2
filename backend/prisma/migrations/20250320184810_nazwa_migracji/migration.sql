/*
  Warnings:

  - The values [UNPAID] on the enum `Status` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `invoiceType` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `currency` on the `Invoice` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `defaultCurrency` on the `Setting` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Status_new" AS ENUM ('DRAFT', 'PENDING', 'PAID', 'OVERDUE', 'CANCELLED', 'PARTIALLY_PAID');
ALTER TABLE "Invoice" ALTER COLUMN "status" TYPE "Status_new" USING ("status"::text::"Status_new");
ALTER TYPE "Status" RENAME TO "Status_old";
ALTER TYPE "Status_new" RENAME TO "Status";
DROP TYPE "Status_old";
COMMIT;

-- AlterTable
ALTER TABLE "Invoice" ADD COLUMN     "invoiceType" TEXT NOT NULL,
DROP COLUMN "currency",
ADD COLUMN     "currency" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Setting" DROP COLUMN "defaultCurrency",
ADD COLUMN     "defaultCurrency" TEXT NOT NULL;

-- DropEnum
DROP TYPE "Currency";
