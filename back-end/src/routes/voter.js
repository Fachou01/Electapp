const express = require("express");
const passport = require("passport");
const voterController = require("../controllers/voterController");
const router = express.Router();

router.get("/", passport.authenticate("jwt", { session: false }), voterController.getVoters);
router.get("/:id", passport.authenticate("jwt", { session: false }), voterController.getVoterById);
router.post("/", passport.authenticate("jwt", { session: false }), voterController.addVoter);
router.put("/:id", passport.authenticate("jwt", { session: false }), voterController.updateVoterById);
router.delete("/:id", passport.authenticate("jwt", { session: false }), voterController.deleteVoterById);

module.exports = router;
