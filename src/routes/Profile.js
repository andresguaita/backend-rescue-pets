const { Router } = require("express");
const router = Router();

const {
    CreateProfileUser,
    getAllProfiles,
} = require("../controllers/CreateProfileUser");

router.post("/ProfileUser",CreateProfileUser);

router.get('/profiles/:id', getAllProfiles)

module.exports = router