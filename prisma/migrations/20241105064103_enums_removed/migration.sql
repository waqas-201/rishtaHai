/*
  Warnings:

  - Changed the type of `religion` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `profileFor` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `maritalStatus` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `familyStatus` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "religion",
ADD COLUMN     "religion" TEXT NOT NULL,
DROP COLUMN "profileFor",
ADD COLUMN     "profileFor" TEXT NOT NULL,
DROP COLUMN "maritalStatus",
ADD COLUMN     "maritalStatus" TEXT NOT NULL,
DROP COLUMN "familyStatus",
ADD COLUMN     "familyStatus" TEXT NOT NULL;

-- DropEnum
DROP TYPE "FamilyStatus";

-- DropEnum
DROP TYPE "MaritalStatus";

-- DropEnum
DROP TYPE "ProfileFor";

-- DropEnum
DROP TYPE "Religion";
