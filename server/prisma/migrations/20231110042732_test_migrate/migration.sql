/*
  Warnings:

  - Added the required column `img` to the `accessories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img` to the `bottoms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img` to the `shoes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img` to the `tops` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "accessories" ADD COLUMN     "img" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "bottoms" ADD COLUMN     "img" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "shoes" ADD COLUMN     "img" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "tops" ADD COLUMN     "img" VARCHAR(255) NOT NULL;
