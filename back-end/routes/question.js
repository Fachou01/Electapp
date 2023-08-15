const express = require("express");
const router = express.Router();
const questionController = require("../controllers/questionController");

router.get("/", questionController.getQuestions);
router.get("/:electionId", questionController.getQuestionsByElectionId);
router.post("/", questionController.addQuestion);
router.delete("/:id", questionController.deleteQuestionById);

module.exports = router;