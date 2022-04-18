const express = require("express");

const { getInterviews } = require("../controllers/interviewsControllers");

const router = express.Router();

router.get("/:id", getInterviews);

module.exports = router;
