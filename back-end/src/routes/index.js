const express = require("express");

const adminsRoute = require('./admin');
const votersRoute = require('./voter');
const electionsRoute = require('./election');
const questionsRoute = require('./question');
const suggestionRoute = require('./sueggestion');

const router = express.Router();

router.use("/admins", adminsRoute);
router.use("/voters", votersRoute);
router.use("/elections", electionsRoute);
router.use("/questions", questionsRoute);
router.use("/suggestions", suggestionRoute);


module.exports = router;