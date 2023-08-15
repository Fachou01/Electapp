const express = require("express");
const router = express.Router();
const suggestionController = require("../controllers/suggestionController");

router.get("/", suggestionController.getSuggestions);
router.post("/", suggestionController.addSuggestion);
router.post("/bulk/:questionId", suggestionController.bulkCreateSuggestion);

module.exports = router;