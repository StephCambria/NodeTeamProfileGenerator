// function to generate team info based on user input
const generateTeam = (team) => {
    console.log(team);

    // create an empty array to push HTML elements to,
    // as well as to loop through team data
    const html = [];

    // create functions for each type of employee that returns HTML data

    const generateManager = manager => {
        console.log(manager);

        let managerHtml = ` `;

        html.push(managerHtml);
    }

    const generateEngineer = engineer => {
        console.log(engineer);

        let engineerHtml = ` `;

        html.push(engineerHtml);
    }

    const generateIntern = intern => {
        console.log(intern);

        let internHtml = ` `;

        html.push(internHtml);
    }

// create a loop for all of the employees
for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager") {
        generateManager(team[i]);
    }
    if (team[i].getRole() === "Engineer") {
        generateEngineer(team[i]);
    }
    if (team[i].getRole() === "Intern") {
        generateIntern(team[i]);
    }
}

// join the HTML blocks
return html.join(' ');

}

// export function to generate entire page
module.exports = team => {
    return ` `;
}

// ` ` should contain html syntax with ${}
// add later