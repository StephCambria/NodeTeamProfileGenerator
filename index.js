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
                message: 'What is your name?'
            }
        ]
    )
}
