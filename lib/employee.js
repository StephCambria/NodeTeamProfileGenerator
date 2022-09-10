class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }
    
    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }
// use polymorphism to change the role that gets returned
// ie employee, intern, etc
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;

// WRITE HTML FILE TO DIST FOLDER
// WRITE CSS TO DIST FOLDER