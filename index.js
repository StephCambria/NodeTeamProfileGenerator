// using inquirer@8.2.4
const inquirer = require('inquirer');
// importing lib files
// const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
// importing site generation files
// const generateSite = require('./src/generate-site.js');
const fs = require("fs");
const path = require("path");
// directory files
// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");
// array to hold team members
const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?',
                // validate property to check if the user provided a value
                validate: (value) => { if (value) {return true} else {return 'Please enter a value to continue'}},
            },
            {
                type: 'input',
                name: 'employeeId',
                message: 'Enter your employee ID',
                // validate property to check if the user provided a value
                validate: (value) => { if (value) {return true} else {return 'Please enter a value to continue'}},
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter your email address',
                // validate property to check if the user provided a value
                validate: (value) => { if (value) {return true} else {return 'Please enter a value to continue'}},
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Enter your office number',
                // validate property to check if the user provided a value
                validate: (value) => { if (value) {return true} else {return 'Please enter a value to continue'}},
            },
        ]
    ).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt(
        [
            {
                type: 'list',
                name: 'menu',
                message: 'Please select which option you would like to continue with:',
                choices: ['add an engineer', 'add an intern', 'finish building my team'],
            }
        ]
    )
    .then(userChoice => {
        switch (userChoice.menu) {
            case "add an engineer":
                promptEngineer();
                break;
            case "add an intern":
                promptIntern();
                break;
            default:
                buildTeam();
        }
    });
}

const promptEngineer = () => {
    console.log(`
    ===============
    Add a New Engineer
    ===============
    `);

    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the engineer?',
                validate: (value) => { if (value) {return true} else {return 'Please enter a value to continue'}},
            },
            {
                type: 'input',
                name: 'employeeId',
                message: 'Enter their employee ID',
                // validate property to check if the user provided a value
                validate: (value) => { if (value) {return true} else {return 'Please enter a value to continue'}},
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter their email',
                // validate property to check if the user provided a value
                validate: (value) => { if (value) {return true} else {return 'Please enter a value to continue'}},
            },
            {
                type: 'input',
                name: 'githubUsername',
                message: 'Enter their Github username',
                validate: (value) => { if (value) {return true} else {return 'Please enter a value to continue'}},
            }
        ]
    )
}