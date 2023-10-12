const usernames = ["bob123", "rob321", "mae213", "ali231"];

const emails = [
  "bob123@gmail.com",
  "rob321@yahoo.com",
  "mae213@outlook.com",
  "ali231@aol.com",
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Function to generate random assignments that we can add to student object.
const getRandomAssignments = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      assignmentName: getRandomArrItem(appDescriptions),
      score: Math.floor(Math.random() * (99 - 70 + 1) + 70),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomAssignments };
