# Team Profile Generator with Node.js, Inquirer, and Jest
![License Badge](https://shields.io/badge/license-ISC-green)



## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [License](#license)
7. [Questions](#questions)

## Description
A Node.js command line application that takes information about employees on a software engineering team to generate a simple HTML page. Users will interact with it through answering simple prompts, such as filling in the employee's name and email, to provide the data that will appear on the generated page. This way, a company or management team can have quick and easy access to their team's contact information.

Tests were run on each part of the code using Jest.
## Installation
To install this application, clone this repository to your local machine, and install [Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4). Then, on the command line, enter ```npm init```, followed by ```npm install inquirer@8.2.4```. Afterwards, the program can be run by entering ```node index.js```.
## Usage
Once Inquirer is installed, you can use a require call to load it into your code: ```const inquirer = require('inquirer');```

* Upon running ```node index.js```, you will be prompted to enter your manager's name, ID, email, and office number.

* You will then be asked if you want to add any engineers or interns (you can add as many as you like, or you can add none!), and you will be asked again once you're done. 

* If you select 'finish building my team', the HTML page will generate with all of your input.
## Contributing
You can contribute to this project by submitting bugs via [ISSUES](https://github.com/StephCambria/NodeREADMEGenerator/issues).
## Tests
All tests were run with [Jest](https://jestjs.io/docs/getting-started).

<img width="753" alt="test-pass" src="https://user-images.githubusercontent.com/107421370/189754568-98b6112d-3f30-4616-bff7-18bd2b685b2a.png">

## License
This application is licensed under the ISC license.

## Questions
You can find me [HERE](https://github.com/StephCambria) on Github.
You can email me at steph.cambria.art@gmail.com if you have any additional questions.
