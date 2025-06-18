/*
  Warnings:

  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "client" ALTER COLUMN "img" DROP NOT NULL;

-- AlterTable
ALTER TABLE "partner" ALTER COLUMN "img" DROP NOT NULL;

-- AlterTable
ALTER TABLE "product" ADD COLUMN     "img" TEXT;

-- AlterTable
ALTER TABLE "service" ADD COLUMN     "img" TEXT;

-- DropTable
DROP TABLE "Admin";

-- CreateTable
CREATE TABLE "admin" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_username_key" ON "admin"("username");
