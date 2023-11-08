/*
  Warnings:

  - You are about to alter the column `password` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(50)`.
  - A unique constraint covering the columns `[username]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "accessories" ADD COLUMN     "cost" VARCHAR(50),
ADD COLUMN     "details" VARCHAR(1000),
ADD COLUMN     "forkids" BOOLEAN,
ALTER COLUMN "itemname" DROP NOT NULL;

-- AlterTable
ALTER TABLE "bottoms" ADD COLUMN     "cost" VARCHAR(50),
ADD COLUMN     "details" VARCHAR(1000),
ALTER COLUMN "itemname" DROP NOT NULL,
ALTER COLUMN "color" DROP NOT NULL,
ALTER COLUMN "size" DROP NOT NULL,
ALTER COLUMN "gender" DROP NOT NULL,
ALTER COLUMN "forkids" DROP NOT NULL;

-- AlterTable
ALTER TABLE "shoes" ADD COLUMN     "cost" VARCHAR(50),
ADD COLUMN     "details" VARCHAR(1000),
ALTER COLUMN "itemname" DROP NOT NULL,
ALTER COLUMN "color" DROP NOT NULL,
ALTER COLUMN "size" DROP NOT NULL,
ALTER COLUMN "gender" DROP NOT NULL,
ALTER COLUMN "forkids" DROP NOT NULL;

-- AlterTable
ALTER TABLE "tops" ADD COLUMN     "cost" VARCHAR(50),
ADD COLUMN     "details" VARCHAR(1000),
ALTER COLUMN "itemname" DROP NOT NULL,
ALTER COLUMN "color" DROP NOT NULL,
ALTER COLUMN "size" DROP NOT NULL,
ALTER COLUMN "gender" DROP NOT NULL,
ALTER COLUMN "forkids" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "username" VARCHAR(25),
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "password" DROP NOT NULL,
ALTER COLUMN "password" SET DATA TYPE VARCHAR(50);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");
