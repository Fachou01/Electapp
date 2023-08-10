const express = require("express");
const router = express.Router();
const suggestionController = require("../controllers/suggestionController");

router.get("/", suggestionController.getSuggestions);
router.post("/", suggestionController.addSuggestion);
router.post("/bulk", suggestionController.bulkCreateSuggestion);

module.exports = router;