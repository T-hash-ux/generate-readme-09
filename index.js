// Imported Packages
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
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
        name: "installations",
        message: "What installations were downloaded?",
    
    },
    {
        type: "input",
        name: "usage",
        message: "State the languages or technologies associated with this project",
    },
    {
        type: "list",
        name: "license",
        message: "choose license applicable.",
        choices: ["ISC", "IBM", "MIT", "IPL", "none"],
    },
    {
        type: "input",
        name: "contribution",
        message: "Please lit any contribution and their github names.",
    },
    {
        type: "input",
        name: "test",
        message: "Please walkthrough the required test.",
    },
    {
       type: "input",
       name: "github",
       message: "Enter your github username.", 
    },   
    {    
        type: "input",
        name: "email",
        message: "Please enter a valid email address",
            
    },
];

let fileName = 'userREADME.md';

// Created a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) => {

        err ? console.error(err) : console.log('README made');
    });
}
//  Created a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => writeToFile(fileName, generateMarkdown(response)));
}

// Function call to initialize app
init();
