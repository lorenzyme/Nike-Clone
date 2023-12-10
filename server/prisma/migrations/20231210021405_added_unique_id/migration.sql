/*
  Warnings:

  - A unique constraint covering the columns `[productId]` on the table `wishlistItem` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "wishlistItem_productId_key" ON "wishlistItem"("productId");
