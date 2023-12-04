-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "itemname" VARCHAR(255),
    "color" VARCHAR(255),
    "size" VARCHAR(255),
    "gender" VARCHAR(255),
    "forkids" BOOLEAN,
    "details" VARCHAR(1000),
    "cost" VARCHAR(50),
    "img" VARCHAR(255),
    "category" VARCHAR(50),

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cart" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cartItem" (
    "id" SERIAL NOT NULL,
    "cartId" INTEGER NOT NULL,

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

    CONSTRAINT "wishlistItem_pkey" PRIMARY KEY ("id")
);

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
