const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // calling the parent constructor:
    super(name, id, email);

    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
