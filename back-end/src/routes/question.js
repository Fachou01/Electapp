const express = require("express");
const passport = require("passport");
const router = express.Router();
const questionController = require("../controllers/questionController");

router.get("/", passport.authenticate("jwt", { session: false }), questionController.getQuestions);
router.get("/:electionId", passport.authenticate("jwt", { session: false }), questionController.getQuestionsByElectionId);
router.post("/", passport.authenticate("jwt", { session: false }), questionController.addQuestion);
router.delete("/:id", passport.authenticate("jwt", { session: false }), questionController.deleteQuestionById);

module.exports = router;