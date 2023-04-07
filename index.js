// Imported Packages
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// Created prompt arrays for input.
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of the project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please describe the purpose and functionality of this project.",
        
    },
    {
        type: "input",
        name: "table of contents",
        message: "table of content.",
    },
    {
        type: "list",
        name: "license",
        message: "choose license applicable.",
        choices: ["ISC", "IBM", "MIT", "IPL", "none"],
    },
    {
        type: "input",
        name: "installations",
        message: "What installations were downloaded?",

    },
    {
        type: "input",
        name: "usage",
        message: "State the languages or technologies associated with this project",
    },
    {
        type: "input",
        name: "creator",
        message: "Write your Github username.",
    },
    {
        type: "input",
        name: "name",
        message: "What is your full name?",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter a valid email address",
    },
    {
        type: "input",
        name: "contributors",
        message: "Please lit any contributors and their github names.",
    },
    {
        type: "input",
        name: "test",
        message: "Please walkthrough the required test.",
    },
];

// Created a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
