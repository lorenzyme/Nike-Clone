-- CreateEnum
CREATE TYPE "Status" AS ENUM ('OPEN', 'CLOSED');

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "color" VARCHAR(255),
    "size" VARCHAR(255),
    "gender" VARCHAR(255),
    "forkids" BOOLEAN,
    "details" VARCHAR(1000),
    "cost" INTEGER,
    "imgUrl" VARCHAR(255),
    "category" VARCHAR(50),

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accessories" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "color" VARCHAR(255),
    "size" VARCHAR(255),
    "gender" VARCHAR(255),
    "forkids" BOOLEAN,
    "details" VARCHAR(1000),
    "cost" INTEGER,
    "imgUrl" VARCHAR(255),

    CONSTRAINT "accessories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bottoms" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "color" VARCHAR(255),
    "size" VARCHAR(255),
    "gender" VARCHAR(255),
    "forkids" BOOLEAN,
    "details" VARCHAR(1000),
    "cost" INTEGER,
    "imgUrl" VARCHAR(255),

    CONSTRAINT "bottoms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shoes" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "color" VARCHAR(255),
    "size" VARCHAR(255),
    "gender" VARCHAR(255),
    "forkids" BOOLEAN,
    "details" VARCHAR(1000),
    "cost" INTEGER,
    "imgUrl" VARCHAR(255),

    CONSTRAINT "shoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tops" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "color" VARCHAR(255),
    "size" VARCHAR(255),
    "gender" VARCHAR(255),
    "forkids" BOOLEAN,
    "details" VARCHAR(1000),
    "cost" INTEGER,
    "imgUrl" VARCHAR(255),

    CONSTRAINT "tops_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "email" VARCHAR(255),
    "username" VARCHAR(25),
    "password" VARCHAR(255),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cart" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'OPEN',

    CONSTRAINT "cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cartItem" (
    "id" SERIAL NOT NULL,
    "cartId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "cartItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wishlist" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "wishlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wishlistItem" (
    "id" SERIAL NOT NULL,
    "wishlistId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "wishlistItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "wishlist_userId_key" ON "wishlist"("userId");

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cartItem" ADD CONSTRAINT "cartItem_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wishlist" ADD CONSTRAINT "wishlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wishlistItem" ADD CONSTRAINT "wishlistItem_wishlistId_fkey" FOREIGN KEY ("wishlistId") REFERENCES "wishlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
