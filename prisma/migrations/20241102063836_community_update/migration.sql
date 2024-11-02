/*
  Warnings:

  - The values [CommunityA,CommunityB,CommunityC] on the enum `Community` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Community_new" AS ENUM ('UrduSpeaking', 'Punjabi', 'Sindhi', 'Pashtun', 'Baloch', 'Muhajir', 'Saraiki', 'Hindko', 'EnglishSpeaking', 'Brahui');
ALTER TABLE "User" ALTER COLUMN "community" TYPE "Community_new" USING ("community"::text::"Community_new");
ALTER TYPE "Community" RENAME TO "Community_old";
ALTER TYPE "Community_new" RENAME TO "Community";
DROP TYPE "Community_old";
COMMIT;
