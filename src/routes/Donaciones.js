const express = require("express");
const router = express.Router();

const postPreferences = require("../controllers/postPreferences.js");
const putPreferences = require("../controllers/putPreferences.js");
const feedback = require("../controllers/feedback.js");

router.post("/preference", postPreferences);
router.put("/preference/:id", putPreferences);
router.get("/feedback", feedback);

module.exports = router;
