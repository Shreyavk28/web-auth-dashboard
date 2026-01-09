const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const controller = require("../controllers/task.controller");

router.post("/", auth, controller.createTask);
router.get("/", auth, controller.getTasks);
router.put("/:id", auth, controller.updateTask);
router.delete("/:id", auth, controller.deleteTask);

module.exports = router;
