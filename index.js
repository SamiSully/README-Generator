// array of questions for user
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown.js");

function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of the project?",
      },
      {
        type: "input",
        name: "description",
        message: "Write a description of your project.",
      },
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "username",
        message: "What is your github username?",
      },
      {
        type: "input",
        name: "installation",
        message: "How do you install your project?",
      },
      {
        type: "input",
        name: "usage",
        message: "What is the usage of your project?",
      },
      {
        type: "list",
        name: "license",
        message: "What license for your project?",
        choices: [
          `MIT License

(https://choosealicense.com/licenses/mit/)`,

          `GNU GPLv3 License

(https://choosealicense.com/licenses/gpl-3.0/)`,

          `ISC License

(https://choosealicense.com/licenses/isc/)`,

          `Apache 2.0 License

(https://choosealicense.com/licenses/apache-2.0/)`,
        ],
      },
      {
        type: "list",
        name: "message",
        message: "What license for the README badge?",
        choices: ["MIT", "GNU", "ISC", "APACHE2.0"],
      },
      {
        type: "input",
        name: "year",
        message: "What year was the project made?",
      },
      {
        type: "input",
        name: "color",
        message: "What color for the badge?",
      },
      {
        type: "input",
        name: "contributors",
        message: "Who/what has contributed to your project?",
      },
      {
        type: "checkbox",
        name: "tech",
        message: "What languages and installations were used?",
        choices: ["HTML ", "CSS ", "BOOTSTRAP ", "JAVASCRIPT ", "NODE.JS ", "JQUERY ", "REACT ", "PHP ",],
      },
      {
        type: "input",
        name: "tests",
        message: "How has your project been tested?",
      },
      {
        type: "input",
        name: "questions",
        message: "Where can veiwers reach you for questions?",
      },
    ])
    .then((answers) => {
      var createREADME = generateMarkdown(answers);
      fs.writeFile("newREADME.md", createREADME, (err) => {
        if (err) throw err;
        console.log("Yay a README!");
      });
    });
}
init();
