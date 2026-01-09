const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const { getProfile } = require("../controllers/profile.controller");

router.get("/", auth, getProfile);
module.exports = router;
