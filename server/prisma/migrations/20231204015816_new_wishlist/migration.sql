/*
  Warnings:

  - Added the required column `productId` to the `wishlistItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "wishlistItem" ADD COLUMN     "productId" INTEGER NOT NULL;
