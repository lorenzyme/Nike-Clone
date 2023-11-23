/*
  Warnings:

  - Made the column `type` on table `accessories` required. This step will fail if there are existing NULL values in that column.
  - Made the column `type` on table `bottoms` required. This step will fail if there are existing NULL values in that column.
  - Made the column `type` on table `shoes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `type` on table `tops` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "accessories" ALTER COLUMN "type" SET NOT NULL;

-- AlterTable
ALTER TABLE "bottoms" ALTER COLUMN "type" SET NOT NULL;

-- AlterTable
ALTER TABLE "shoes" ALTER COLUMN "type" SET NOT NULL;

-- AlterTable
ALTER TABLE "tops" ALTER COLUMN "type" SET NOT NULL;
