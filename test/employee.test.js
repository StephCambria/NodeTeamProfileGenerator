// use jest to run testing

// =====================================================

const Employee = require("../lib/employee");
const employee = new Employee("stephanie", "082994", "scambria@fakemail.com");

// =====================================================

test("test if we can get the constructor values for the employee object", () => {
  expect(employee.name).toBe("stephanie");
  expect(employee.id).toBe("082994");
  expect(employee.email).toBe("scambria@fakemail.com");
});

test("test if we can get the name from the getName() method", () => {
  expect(employee.getName()).toBe("stephanie");
});

test("test if we can get the id from the getId() method", () => {
  expect(employee.getId()).toBe("082994");
});

test("test if we can get the email from the getEmail() method", () => {
  expect(employee.getEmail()).toBe("scambria@fakemail.com");
});

test("test if we can get the role from the getRole() method", () => {
  expect(employee.getRole()).toBe("Employee");
});
