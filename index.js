// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return inquir.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your Project?'
        },
        {
            type: 'input',
            name: 'desction',
            message: 'What is youir Description?'
        },
        {
            type: '',
            name: '',
            message: ''
        },
        {
            type: '',
            name: '',
            message: ''
        },
        {
            type: '',
            name: '',
            message: ''
        },
        {
            type: '',
            name: '',
            message: ''
        },
        {
            type: '',
            name: '',
            message: ''
        },
        {
            type: '',
            name: '',
            message: ''
        },
    ])
}

// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init();
