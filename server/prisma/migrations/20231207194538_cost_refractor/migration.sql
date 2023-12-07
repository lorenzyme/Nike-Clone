/*
  Warnings:

  - The `cost` column on the `accessories` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `cost` column on the `bottoms` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `cost` column on the `products` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `cost` column on the `shoes` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `cost` column on the `tops` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "accessories" DROP COLUMN "cost",
ADD COLUMN     "cost" INTEGER;

-- AlterTable
ALTER TABLE "bottoms" DROP COLUMN "cost",
ADD COLUMN     "cost" INTEGER;

-- AlterTable
ALTER TABLE "products" DROP COLUMN "cost",
ADD COLUMN     "cost" INTEGER;

-- AlterTable
ALTER TABLE "shoes" DROP COLUMN "cost",
ADD COLUMN     "cost" INTEGER;

-- AlterTable
ALTER TABLE "tops" DROP COLUMN "cost",
ADD COLUMN     "cost" INTEGER;
