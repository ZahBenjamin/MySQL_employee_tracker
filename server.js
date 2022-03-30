// TODO: modules
const inquirer = require('inquirer');
const mysql = require('mysql2');
const Connection = require('mysql2/typings/mysql/lib/Connection');
require('console.table')length

const db = mysql.createConnection({
  host: 'localhost',
  port: '3002',
  user: 'root',
  database: 'employee_db'
},
console.log('You have connected to the Employee db !');
);

db.connect(function (err) {
  if (err) throw err;
  firstPrompt();
});

function firstPrompt(){
  inquirer.prompt([
    {
      type: 'list',
      name: 'option',
      message: 'Pleae select an option',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role'
      ]
    }
  ]).then((response) => {
    switch(response.option){
      case 'View all departments':
        viewAllDepartments();
        break;
      case 'View all roles':
        viewAllRoles(); // TODO
        break;
      case 'View all employees':
        viewAllEmployees(); // TODO
        break;
      case 'Add a department':
        addDepartment(); // TODO 
        break;
      case 'Add a role':
        addRole(); // TODO 
        break;
      case 'Add an employee':
        addEmployee(); // TODO
        break;
      case 'Update an employee role':
        updateEmployeeRole(); // TODO
        break;
    }
  }).catch((err) => {
    if (err) throw err;
  });
}

// When selected show department name and id
function viewAllDepartments() {
  let query =
  `SELECT
    *
   FROM department`

  db.query(query, (err, response) => {
    if (err) throw err;
    firstPrompt();
  });
}
//view all roles
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
function viewAllRoles() {
  let query = 
  `SELECT
    role.title,
    role.id
    department.name
    role.salary
  FROM employee
  JOIN role
    ON department.id = role.id`
}


//view all employees, 
function viewAllEmployees() {
  let query = 
  ``
  db.query()
}
//add a department, 
function addDepartment() {
  let query = 
  ``
  db.query()
}
//add a role, 
function addRole() {
  let query = 
  ``
  db.query()
}
//add an employee,  
function addEmployee() {
  let query = 
  ``
  db.query()
}
//update an employee role
function updateEmployeeRole() {
  let query = 
  ``
  db.query()
}

