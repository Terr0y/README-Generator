const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// const { error } = require("console");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description of your project:",
  },
  {
    type: "input",
    name: "Table of Contents",
    message:"Table of Contents",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use this project?",
  },
  {
    type: "list",
    name: "license",
    message: "Which license is the project under?",
    choices: ["MIT"],
  },
  {
    type: "input",
    name: "contributing",
    message: "How can others contribute to this project?",
  },
  {
    type: "input",
    name: "tests",
    message: "What are the test instructions?",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address:",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  // fs.writeFile(fileName, data, (error) => {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log("README DATA Created Successful");
  //   }
  fs.writeFileSync(path.join(process.cwd(), fileName), data)
  // });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile("GeneratedREADME.md", readmeContent);
  });
}

// function call to initialize program
init();
