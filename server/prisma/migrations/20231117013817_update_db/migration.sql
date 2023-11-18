/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `accessories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `bottoms` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `shoes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `tops` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "accessories_id_key" ON "accessories"("id");

-- CreateIndex
CREATE UNIQUE INDEX "bottoms_id_key" ON "bottoms"("id");

-- CreateIndex
CREATE UNIQUE INDEX "shoes_id_key" ON "shoes"("id");

-- CreateIndex
CREATE UNIQUE INDEX "tops_id_key" ON "tops"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");
