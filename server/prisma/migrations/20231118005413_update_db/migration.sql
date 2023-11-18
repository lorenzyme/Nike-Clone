/*
  Warnings:

  - Made the column `img` on table `accessories` required. This step will fail if there are existing NULL values in that column.
  - Made the column `img` on table `bottoms` required. This step will fail if there are existing NULL values in that column.
  - Made the column `img` on table `shoes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `img` on table `tops` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "accessories_id_key";

-- DropIndex
DROP INDEX "bottoms_id_key";

-- DropIndex
DROP INDEX "shoes_id_key";

-- DropIndex
DROP INDEX "tops_id_key";

-- DropIndex
DROP INDEX "users_id_key";

-- AlterTable
ALTER TABLE "accessories" ADD COLUMN     "gender" VARCHAR(255),
ALTER COLUMN "img" SET NOT NULL;

-- AlterTable
ALTER TABLE "bottoms" ALTER COLUMN "img" SET NOT NULL;

-- AlterTable
ALTER TABLE "shoes" ALTER COLUMN "img" SET NOT NULL;

-- AlterTable
ALTER TABLE "tops" ALTER COLUMN "img" SET NOT NULL;
