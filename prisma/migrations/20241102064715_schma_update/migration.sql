/*
  Warnings:

  - Changed the type of `community` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "community",
ADD COLUMN     "community" TEXT NOT NULL;

-- DropEnum
DROP TYPE "Community";
