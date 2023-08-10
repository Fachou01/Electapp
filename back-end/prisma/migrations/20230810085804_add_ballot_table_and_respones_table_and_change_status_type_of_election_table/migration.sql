/*
  Warnings:

  - You are about to drop the `VoterOnElection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VoterOnSuggestion` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `status` on the `Election` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "BallotStatus" AS ENUM ('SUBMITTED', 'PENDING');

-- CreateEnum
CREATE TYPE "ElectionStatus" AS ENUM ('STARTED', 'PENDING');

-- DropForeignKey
ALTER TABLE "VoterOnElection" DROP CONSTRAINT "VoterOnElection_electionId_fkey";

-- DropForeignKey
ALTER TABLE "VoterOnElection" DROP CONSTRAINT "VoterOnElection_voterId_fkey";

-- DropForeignKey
ALTER TABLE "VoterOnSuggestion" DROP CONSTRAINT "VoterOnSuggestion_suggestionId_fkey";

-- DropForeignKey
ALTER TABLE "VoterOnSuggestion" DROP CONSTRAINT "VoterOnSuggestion_voterId_fkey";

-- AlterTable
ALTER TABLE "Election" DROP COLUMN "status",
ADD COLUMN     "status" "ElectionStatus" NOT NULL;

-- DropTable
DROP TABLE "VoterOnElection";

-- DropTable
DROP TABLE "VoterOnSuggestion";

-- CreateTable
CREATE TABLE "Ballot" (
    "id" SERIAL NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "electionId" INTEGER NOT NULL,
    "voterId" INTEGER NOT NULL,
    "status" "BallotStatus" NOT NULL,

    CONSTRAINT "Ballot_pkey" PRIMARY KEY ("id","electionId","voterId")
);

-- CreateTable
CREATE TABLE "Response" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "voterId" INTEGER NOT NULL,
    "suggestionId" INTEGER NOT NULL,

    CONSTRAINT "Response_pkey" PRIMARY KEY ("id","voterId","suggestionId")
);

-- AddForeignKey
ALTER TABLE "Ballot" ADD CONSTRAINT "Ballot_electionId_fkey" FOREIGN KEY ("electionId") REFERENCES "Election"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ballot" ADD CONSTRAINT "Ballot_voterId_fkey" FOREIGN KEY ("voterId") REFERENCES "Voter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Response" ADD CONSTRAINT "Response_voterId_fkey" FOREIGN KEY ("voterId") REFERENCES "Voter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Response" ADD CONSTRAINT "Response_suggestionId_fkey" FOREIGN KEY ("suggestionId") REFERENCES "Suggestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
