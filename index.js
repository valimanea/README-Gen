// include modules
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  "What is your GitHub username?",
  "What is your email address?",
  "What is the title of your project?",
  "Enter a short description of your project:",
  "What type of License should your project have?",
  "What command should be run to install dependencies?",
  "What command should be run to run tests?",
  "Enter the usage information of this repo:",
  "Enter the contribution guidelines to this repo:",
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: questions[0],
        name: "github",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "Please enter a value!";
          }
        },
      },
      {
        type: "input",
        message: questions[1],
        name: "email",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "Please enter a value!";
          }
        },
      },
      {
        type: "input",
        message: questions[2],
        name: "title",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "Please enter a title!";
          }
        },
      },
      {
        type: "input",
        message: questions[3],
        name: "description",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "Please enter a description!";
          }
        },
      },
      {
        type: "checkbox",
        message: questions[4],
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        name: "license",
      },
      {
        type: "input",
        message: questions[5],
        name: "installation",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "Please enter a command!";
          }
        },
      },
      {
        type: "input",
        message: questions[6],
        name: "tests",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "Please enter a command!";
          }
        },
      },
      {
        type: "input",
        message: questions[7],
        name: "usage",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "Please enter some ussage info!";
          }
        },
      },

      {
        type: "input",
        message: questions[8],
        name: "contributing",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "Please enter some contribution info!";
          }
        },
      },
    ])
    .then((response) => {
      writeToFile("README.md", generateMarkdown(response));
      console.log("Generating README...");
    //   console.log(response);
    });
}

// function call to initialize program
init();
