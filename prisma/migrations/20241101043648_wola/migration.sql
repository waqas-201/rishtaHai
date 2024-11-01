/*
  Warnings:

  - The values [male,female] on the enum `Gender` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `GroomName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `termsAccepted` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `address` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `community` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `day` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `month` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `religion` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `User` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `profileFor` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ProfileFor" AS ENUM ('Myself', 'MySon', 'MyDaughter', 'MyBrother', 'MySister', 'MyFriend', 'MyRelative');

-- CreateEnum
CREATE TYPE "Religion" AS ENUM ('Christianity', 'Islam', 'Hinduism', 'Buddhism', 'Sikhism');

-- CreateEnum
CREATE TYPE "Community" AS ENUM ('CommunityA', 'CommunityB', 'CommunityC');

-- CreateEnum
CREATE TYPE "Country" AS ENUM ('USA', 'Canada', 'Pakistan', 'India');

-- AlterEnum
BEGIN;
CREATE TYPE "Gender_new" AS ENUM ('Male', 'Female');
ALTER TABLE "User" ALTER COLUMN "gender" TYPE "Gender_new" USING ("gender"::text::"Gender_new");
ALTER TYPE "Gender" RENAME TO "Gender_old";
ALTER TYPE "Gender_new" RENAME TO "Gender";
DROP TYPE "Gender_old";
COMMIT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "GroomName",
DROP COLUMN "termsAccepted",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "community" "Community" NOT NULL,
ADD COLUMN     "country" "Country" NOT NULL,
ADD COLUMN     "day" INTEGER NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "month" INTEGER NOT NULL,
ADD COLUMN     "religion" "Religion" NOT NULL,
ADD COLUMN     "year" INTEGER NOT NULL,
DROP COLUMN "profileFor",
ADD COLUMN     "profileFor" "ProfileFor" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
