// TODO: modules
const inquirer = require('inquirer');
const mysql = require('mysql2');
const Connection = require('mysql2/typings/mysql/lib/Connection');
require('console.table')

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
        viewAllRoles(); 
        break;
      case 'View all employees':
        viewAllEmployees(); 
        break;
      case 'Add a department':
        addDepartment(); 
        break;
      case 'Add a role':
        addRole();  
        break;
      case 'Add an employee':
        addEmployee(); 
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
  `SELECT * FROM department`

  db.query(query, (err, response) => {
    if (err) throw err;
    console.table(response);
    firstPrompt();
  });
}

//view all roles
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

db.query(query, (err, response) => {
  if (err) throw err;
  console.table(response);
  firstPrompt();
});

//view all employees, 
function viewAllEmployees() {
  let query = 
  `SELECT * FROM employee`

  db.query(query, (err, response) => {
    if (err) throw err;
    console.table(response);
    firstPrompt();
  });
}

//add a department, 
function addDepartment() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'departmentName',
      message: 'What department would you like to add?'
    }
  ]).then((response) => {
    dq.query("INSERT INTO department SET ?", {
      name: response.departmentName,
    }, (err, response) => {
      if (err) throw err;
      console.table(response);
      
      firstPrompt();
  });
});
}

//add a role, 
function addRole() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What role would you like to add?'
    },
    {
      type: 'input',
      name: 'salary',
      message: 'What is the salary for the role?'
    },
    {
      type: 'input',
      name: 'departmentId',
      message: 'What is the department of the role?'
    },
  ]).then((response) => {
    dq.query("INSERT INTO role SET ?", {
      title: response.title,
      salary: response.salary,
      department_id: response.departmentId,
    }) 
    firstPrompt();
  });
}

//add an employee,  
function addEmployee() {
  var query =
    `SELECT * FROM role`

    db.query(query, (err, response) => {
      if (err) throw err;
  
      const roleOptions = res.map(({ id, title, salary }) => ({
        value: id, title: `${title}`, salary: `${salary}`
      }));
  
      console.table(response);
  
      addedEmployeeRole(roleOptions);
    });
}

function addedEmployeeRole(roleOptions){
  inquirer.prompt([
        {
          type: "input",
          name: "first",
          message: "What is their first name?"
        },
        {
          type: "input",
          name: "last",
          message: "What is their last name?"
        },
        {
          type: "list",
          name: "roleId",
          message: "What is the employee role?"
          choices: roleOptions
        }
      ]).then((response) => {
        console.log(response);

        dq.query("INSERT INTO role SET ?", {
          first_name: response.first,
          last_name: response.last,
          role_id: response.roleId,
        }, 
        (err, response) => {
          if (err) throw err;
          console.table(response);

          firstPrompt();
        });
      });
    }


//update an employee role
function updateEmployeeRole() {
  let query = 
  ``
  db.query()
}