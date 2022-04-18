const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong";
  res.status(statusCode).json({
    message: message,
    status: statusCode,
    error: process.env.NODE_ENV === "production" ? "Server error" : err.stack,
  });
};

module.exports = errorHandler;
