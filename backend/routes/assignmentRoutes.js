const express = require("express");
const {
  getAllAssignments,
  getAssignment,
} = require("../controllers/assignmentsControllers");

const { getInterviews } = require("../controllers/interviewsControllers");

const router = express.Router();

router.get("/", getAllAssignments);
router.get("/:id", getAssignment);

module.exports = router;
