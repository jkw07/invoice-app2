-- AlterTable
ALTER TABLE "payments" ADD COLUMN     "user_id" TEXT;

-- AlterTable
ALTER TABLE "vat_rates" ADD COLUMN     "user_id" TEXT;

-- AddForeignKey
ALTER TABLE "vat_rates" ADD CONSTRAINT "vat_rates_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
