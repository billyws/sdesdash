const asyncHandler = require("express-async-handler");
const { fetchAssignments, fetchAssignment } = require("../utils/susoData");

// @desc        Get all assignments
// @route       GET /assignments
// @access      Public
exports.getAllAssignments = asyncHandler(async (req, res, next) => {
  const data = await fetchAssignments();

  if (!data) {
    return next(new Error("No assignments found"));
  } else {
    res.status(200).json({
      success: true,
      data,
    });
  }
});

// @desc        Get single assignments
// @route       GET /assignments/:id
// @access      Public
exports.getAssignment = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const data = await fetchAssignment(id);

  if (!id) {
    return next(new Error("No assignment found"));
  } else {
    res.status(200).json({
      success: true,
      data,
    });
  }
});
