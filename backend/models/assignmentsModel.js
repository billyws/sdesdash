const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
  },
  ResponsibleId: {
    type: String,
  },
  ResponsibleName: {
    type: String,
  },
  QuestionnaireId: {
    type: String,
  },
  InterviewsCount: {
    type: Number,
  },
  Quantity: {
    type: Number,
  },
  Archived: {
    type: Boolean,
  },
  CreatedAtUtc: {
    type: Date,
  },
  UpdatedAtUtc: {
    type: Date,
  },
  Email: {
    type: String,
  },
  Password: {
    type: String,
  },
  WebMode: {
    type: Boolean,
  },
  ReceivedByTabletAtUtc: {
    type: Date,
  },
  IsAudioRecordingEnabled: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Assignment", assignmentSchema);
