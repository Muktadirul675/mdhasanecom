/*
  Warnings:

  - You are about to drop the column `stock` on the `Color` table. All the data in the column will be lost.
  - You are about to drop the column `stock` on the `Size` table. All the data in the column will be lost.
  - Added the required column `stocks` to the `Color` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stocks` to the `Size` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Color" DROP COLUMN "stock",
ADD COLUMN     "stocks" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Size" DROP COLUMN "stock",
ADD COLUMN     "stocks" INTEGER NOT NULL;
