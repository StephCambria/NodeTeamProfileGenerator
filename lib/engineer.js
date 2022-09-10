const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, githubUsername) {
    // calling the parent constructor:
    super(name, id, email);

    this.githubUsername = githubUsername;
  }
  getGithubUsername() {
    return this.githubUsername;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
