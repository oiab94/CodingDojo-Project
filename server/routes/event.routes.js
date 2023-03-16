const { Router } = require("express");
const eventController = require("../controllers/event.controller");

const router = Router();

router.post("/api/event", eventController.event_post);
router.get("/api/event", eventController.event_get);
router.get("/api/event/:id", eventController.event_get_id);

module.exports = router;