/*
  Warnings:

  - Added the required column `familyStatus` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hasChildren` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `livesWithYou` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maritalStatus` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "LivesWithYou" AS ENUM ('Yes', 'No');

-- CreateEnum
CREATE TYPE "HasChildren" AS ENUM ('Yes', 'No');

-- CreateEnum
CREATE TYPE "FamilyStatus" AS ENUM ('MIDDLE_CLASS', 'UPPER_MIDDLE_CLASS', 'UPPER_CLASS');

-- CreateEnum
CREATE TYPE "MaritalStatus" AS ENUM ('UNMARRIED', 'WIDOW');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "familyStatus" "FamilyStatus" NOT NULL,
ADD COLUMN     "hasChildren" "HasChildren" NOT NULL,
ADD COLUMN     "livesWithYou" "LivesWithYou" NOT NULL,
ADD COLUMN     "maritalStatus" "MaritalStatus" NOT NULL;
