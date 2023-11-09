-- CreateTable
CREATE TABLE "accessories" (
    "id" SERIAL NOT NULL,
    "itemname" VARCHAR(255),
    "color" VARCHAR(255),
    "size" VARCHAR(255),
    "forkids" BOOLEAN,
    "details" VARCHAR(1000),
    "cost" VARCHAR(50),

    CONSTRAINT "accessories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bottoms" (
    "id" SERIAL NOT NULL,
    "itemname" VARCHAR(255),
    "color" VARCHAR(255),
    "size" VARCHAR(255),
    "gender" VARCHAR(255),
    "forkids" BOOLEAN,
    "details" VARCHAR(1000),
    "cost" VARCHAR(50),

    CONSTRAINT "bottoms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shoes" (
    "id" SERIAL NOT NULL,
    "itemname" VARCHAR(255),
    "color" VARCHAR(255),
    "size" VARCHAR(255),
    "gender" VARCHAR(255),
    "forkids" BOOLEAN,
    "details" VARCHAR(1000),
    "cost" VARCHAR(50),

    CONSTRAINT "shoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tops" (
    "id" SERIAL NOT NULL,
    "itemname" VARCHAR(255),
    "color" VARCHAR(255),
    "size" VARCHAR(255),
    "gender" VARCHAR(255),
    "forkids" BOOLEAN,
    "details" VARCHAR(1000),
    "cost" VARCHAR(50),

    CONSTRAINT "tops_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "email" VARCHAR(255),
    "username" VARCHAR(25),
    "password" VARCHAR(50),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");
