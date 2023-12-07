/*
  Warnings:

  - You are about to drop the column `img` on the `accessories` table. All the data in the column will be lost.
  - You are about to drop the column `itemname` on the `accessories` table. All the data in the column will be lost.
  - You are about to drop the column `img` on the `bottoms` table. All the data in the column will be lost.
  - You are about to drop the column `itemname` on the `bottoms` table. All the data in the column will be lost.
  - You are about to drop the column `img` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `itemname` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `img` on the `shoes` table. All the data in the column will be lost.
  - You are about to drop the column `itemname` on the `shoes` table. All the data in the column will be lost.
  - You are about to drop the column `img` on the `tops` table. All the data in the column will be lost.
  - You are about to drop the column `itemname` on the `tops` table. All the data in the column will be lost.
  - Added the required column `productId` to the `cartItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `cartItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "accessories" DROP COLUMN "img",
DROP COLUMN "itemname",
ADD COLUMN     "imgUrl" VARCHAR(255),
ADD COLUMN     "name" VARCHAR(255);

-- AlterTable
ALTER TABLE "bottoms" DROP COLUMN "img",
DROP COLUMN "itemname",
ADD COLUMN     "imgUrl" VARCHAR(255),
ADD COLUMN     "name" VARCHAR(255);

-- AlterTable
ALTER TABLE "cartItem" ADD COLUMN     "productId" INTEGER NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "products" DROP COLUMN "img",
DROP COLUMN "itemname",
ADD COLUMN     "imgUrl" VARCHAR(255),
ADD COLUMN     "name" VARCHAR(255);

-- AlterTable
ALTER TABLE "shoes" DROP COLUMN "img",
DROP COLUMN "itemname",
ADD COLUMN     "imgUrl" VARCHAR(255),
ADD COLUMN     "name" VARCHAR(255);

-- AlterTable
ALTER TABLE "tops" DROP COLUMN "img",
DROP COLUMN "itemname",
ADD COLUMN     "imgUrl" VARCHAR(255),
ADD COLUMN     "name" VARCHAR(255);
