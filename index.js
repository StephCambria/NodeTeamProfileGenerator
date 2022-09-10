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
 const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");
// array to hold team members
const teamMembers = [];



// ============================




// initial prompt
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



// ============================



// once the manager info is pushed to the array, the default prompt menu is called
// this menu will be called at the end of every prompt
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



// ============================



// prompt for the engineer option
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
    ).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.githubUsername);
        teamMembers.push(engineer);
        promptMenu();
    })
};



// ============================



// prompt for the intern option
const promptIntern = () => {
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
                message: 'What is the name of the intern?',
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
                name: 'school',
                message: 'Enter their school name',
                validate: (value) => { if (value) {return true} else {return 'Please enter a value to continue'}},
            }
        ]
    ).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
        teamMembers.push(intern);
        promptMenu();
    })
        
};



// ============================



// function to build a team based on the user input
const buildTeam = () => {
    console.log(`
    ===============
    Finished building the team!
    ===============
    `);

    // create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generateSite(teamMembers), "utf-8");
}



// ============================



// calling the promptManager() function on load
promptManager();