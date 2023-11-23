/*
  Warnings:

  - You are about to drop the column `type` on the `accessories` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `bottoms` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `shoes` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `tops` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "accessories" DROP COLUMN "type",
ADD COLUMN     "producttype" TEXT NOT NULL DEFAULT 'accessories';

-- AlterTable
ALTER TABLE "bottoms" DROP COLUMN "type",
ADD COLUMN     "producttype" TEXT NOT NULL DEFAULT 'bottoms';

-- AlterTable
ALTER TABLE "shoes" DROP COLUMN "type",
ADD COLUMN     "producttype" TEXT NOT NULL DEFAULT 'shoes';

-- AlterTable
ALTER TABLE "tops" DROP COLUMN "type",
ADD COLUMN     "producttype" TEXT NOT NULL DEFAULT 'tops';
