const employee = {};
employee.name = 'Sam';
employee.streetAddress = '123 Main St';

/*function beforeEach(employee, key){
    return delete employee[key];
}*/

/*function assignEmployee(key, value){
    const employee = {};
    return employee[key] = value;
}*/

function updateEmployeeWithKeyAndValue(employee, key, value){
    //const updatedEmployee = {...employee};
    return {
        ...employee,
        [key]: value,
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const updatedEmployee = {...employee};
    delete updatedEmployee[key];
    return updatedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}