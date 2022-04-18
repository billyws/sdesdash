const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const bodyParser = require("body-parser");

// Import routes
const assignmentsRouter = require("./routes/assignmentRoutes");
const interviewsRouter = require("./routes/interviewRoutes");

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mount routes
app.use("/assignments", assignmentsRouter);
app.use("/interviews", interviewsRouter);

const PORT = process.env.PORT || 5000;

app.use(errorHandler);

// Listening app
const server = app.listen(
  PORT,
  console.log(`Server is running on port ${PORT}`)
);

// Handle Unhandled Promise Rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit);
});
