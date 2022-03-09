const express = require("express");
const router = express.Router();

const postPreferences = require("../controllers/postPreferences.js");
const putPreferences = require("../controllers/putPreferences.js");
const feedback = require("../controllers/feedback.js");
const getDonaStatis = require("../controllers/getDonaStatis.js")
router.post("/preference", postPreferences);
router.put("/preference/:id", putPreferences);
router.get("/feedback", feedback);
router.get("/DonaStatis/:id", getDonaStatis)
router.get("/DonaStatis/", getDonaStatis)
module.exports = router;
