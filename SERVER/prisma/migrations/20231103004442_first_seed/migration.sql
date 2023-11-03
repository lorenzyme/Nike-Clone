-- CreateTable
CREATE TABLE "accessories" (
    "id" SERIAL NOT NULL,
    "itemname" VARCHAR(255) NOT NULL,
    "color" VARCHAR(255),
    "size" VARCHAR(255),

    CONSTRAINT "accessories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bottoms" (
    "id" SERIAL NOT NULL,
    "itemname" VARCHAR(255) NOT NULL,
    "color" VARCHAR(255) NOT NULL,
    "size" VARCHAR(255) NOT NULL,
    "gender" VARCHAR(255) NOT NULL,
    "forkids" BOOLEAN NOT NULL,

    CONSTRAINT "bottoms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shoes" (
    "id" SERIAL NOT NULL,
    "itemname" VARCHAR(255) NOT NULL,
    "color" VARCHAR(255) NOT NULL,
    "size" VARCHAR(255) NOT NULL,
    "gender" VARCHAR(255) NOT NULL,
    "forkids" BOOLEAN NOT NULL,

    CONSTRAINT "shoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tops" (
    "id" SERIAL NOT NULL,
    "itemname" VARCHAR(255) NOT NULL,
    "color" VARCHAR(255) NOT NULL,
    "size" VARCHAR(255) NOT NULL,
    "gender" VARCHAR(255) NOT NULL,
    "forkids" BOOLEAN NOT NULL,

    CONSTRAINT "tops_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
