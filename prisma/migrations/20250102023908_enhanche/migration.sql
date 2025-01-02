-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "index" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "is_admin" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_staff" BOOLEAN NOT NULL DEFAULT false;
