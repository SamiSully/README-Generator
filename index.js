// array of questions for user
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown.js");

const questions = [];

inquirer.prompt([
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
  { type: "input", name: "username", message: "What is your github username?" },
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
  { type: "list", name: "license", choices: ["MIT", "GNU", "APM"] },
  {
    type: "input",
    name: "contributors",
    message: "Who/what has contributed to your project?",
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
]).then(answers => {
    var createREADME = generateMarkdown(answers);
    fs.writeFile("new.md", createREADME, err => {
        if (err) throw err;
        console.log("Readme! Hopefully this works!")
    })
});
// // function to write README file
// function writeToFile(fileName, data) {}

// // function to initialize program
// function init() {}

// // function call to initialize program
// init();
