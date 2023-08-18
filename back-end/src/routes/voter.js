const express = require("express");
const passport = require("passport");
const voterController = require("../controllers/voterController");
const parseCsvFile = require("../middlewares/parseCsv");
const multer = require("multer");
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.get("/", passport.authenticate("jwt", { session: false }), voterController.getVoters);
router.get("/:id", passport.authenticate("jwt", { session: false }), voterController.getVoterById);
router.post("/", passport.authenticate("jwt", { session: false }), voterController.addVoter);
router.post("/bulk", passport.authenticate("jwt", { session: false }),upload.single("file"), parseCsvFile, voterController.bulkCreateVoters);
router.put("/:id", passport.authenticate("jwt", { session: false }), voterController.updateVoterById);
router.delete("/:id", passport.authenticate("jwt", { session: false }), voterController.deleteVoterById);

module.exports = router;
