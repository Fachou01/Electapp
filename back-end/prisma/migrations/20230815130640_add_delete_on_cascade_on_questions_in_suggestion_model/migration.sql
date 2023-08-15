-- DropForeignKey
ALTER TABLE "Suggestion" DROP CONSTRAINT "Suggestion_questionId_fkey";

-- AddForeignKey
ALTER TABLE "Suggestion" ADD CONSTRAINT "Suggestion_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;
