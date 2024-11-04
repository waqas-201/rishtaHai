/*
  Warnings:

  - The `city` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `country` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "state" TEXT,
DROP COLUMN "country",
ADD COLUMN     "country" TEXT NOT NULL,
DROP COLUMN "city",
ADD COLUMN     "city" TEXT;

-- DropEnum
DROP TYPE "City";

-- DropEnum
DROP TYPE "Country";
