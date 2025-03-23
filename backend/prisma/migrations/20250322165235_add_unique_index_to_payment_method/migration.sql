/*
  Warnings:

  - A unique constraint covering the columns `[method]` on the table `payments` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "payments_method_key" ON "payments"("method");
