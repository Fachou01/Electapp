/*
  Warnings:

  - You are about to drop the column `password` on the `Voter` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[voterId]` on the table `Voter` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `key` to the `Voter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `voterId` to the `Voter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Voter" DROP COLUMN "password",
ADD COLUMN     "key" TEXT NOT NULL,
ADD COLUMN     "voterId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Voter_voterId_key" ON "Voter"("voterId");
