/*
  Warnings:

  - Added the required column `earning` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `familyStatus` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `height` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profession` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qualification` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "earning" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "familyStatus" "FamilyStatus" NOT NULL,
ADD COLUMN     "height" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "profession" TEXT NOT NULL,
ADD COLUMN     "qualification" TEXT NOT NULL,
ADD COLUMN     "weight" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "livesWithYou" DROP NOT NULL;
