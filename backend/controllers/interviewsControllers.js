const asyncHandler = require("express-async-handler");
const { fetchInterviews } = require("../utils/susoData");

// @desc        Get assignments by id
// @route       GET interviewers/:id
// @access      Public
exports.getInterviews = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const data = await fetchInterviews(id);

  if (!id) {
    return next(new Error("No assignment found"));
  } else {
    res.status(200).json({
      success: true,
      data,
    });
  }
});
