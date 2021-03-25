// Write your solution in this file!
let employee = {
    name: "Zach",
    streetAddress: "123 Main St",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let obj = {...employee};
    obj[key] = value;
    return obj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let obj = {...employee};
    delete obj[key];
    return obj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}