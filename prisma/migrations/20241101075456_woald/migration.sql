/*
  Warnings:

  - You are about to drop the column `address` on the `User` table. All the data in the column will be lost.
  - Changed the type of `city` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "City" AS ENUM ('Karachi', 'Lahore', 'Islamabad', 'Faisalabad', 'Rawalpindi', 'Multan', 'Hyderabad', 'Gujranwala', 'Peshawar', 'Quetta');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "address",
DROP COLUMN "city",
ADD COLUMN     "city" "City" NOT NULL;
