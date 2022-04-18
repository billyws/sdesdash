const axios = require("axios");

const fetchAssignments = async () => {
  const URI = process.env.API_URL;
  const token = process.env.API_TOKEN;

  const assignments = await axios.get(
    "http://108.61.96.210:9700/sdes/api/v1/assignments",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic bnNvaG9zdG1hc3RlcjpOJDAxY3RAMjAyMSE=",
      },
    }
  );
  const data = await assignments.data;
  return data;
};

// Get assignments by Id
const fetchAssignment = async (id) => {
  const URI = process.env.API_URL;
  const token = process.env.API_TOKEN;

  const assignment = await axios.get(
    `http://108.61.96.210:9700/sdes/api/v1/assignments/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic bnNvaG9zdG1hc3RlcjpOJDAxY3RAMjAyMSE=",
      },
    }
  );
  const data = await assignment.data;
  return data;
};

// Get Interviews by id
// API doesn't allow to fetch all interviews
const fetchInterviews = async (id) => {
  const URI = process.env.API_URL;
  const token = process.env.API_TOKEN;

  const interviews = await axios.get(
    `http://108.61.96.210:9700/sdes/api/v1/interviews/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic bnNvaG9zdG1hc3RlcjpOJDAxY3RAMjAyMSE=",
      },
    }
  );
  const data = await interviews.data;
  return data;
};

module.exports = {
  fetchAssignments,
  fetchAssignment,
  fetchInterviews,
};
