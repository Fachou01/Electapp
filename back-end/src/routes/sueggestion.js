const express = require("express");
const passport = require("passport");
const router = express.Router();
const suggestionController = require("../controllers/suggestionController");

router.get("/", passport.authenticate("jwt", { session: false }), suggestionController.getSuggestions);
router.post("/", passport.authenticate("jwt", { session: false }), suggestionController.addSuggestion);
router.post("/bulk/:questionId", passport.authenticate("jwt", { session: false }), suggestionController.bulkCreateSuggestion);

module.exports = router;