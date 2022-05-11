// modules
const inquirer = require('inquirer');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
require('console.table');

const db = mysql.createConnection(
  {
  host: '127.0.0.1',
  user: "root",
  database: "employee_db",
  password: "",
  });
// console.log('You have connected to the Employee db !');


db.connect((err) => {
  if (err){ 
  console.log('There was a database err', err);
  }
  firstPrompt();
});



function firstPrompt() {
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
  `SELECT * FROM role`
    
    db.query(query, (err, response) => {
      if (err) throw err;
      console.table(response);
      firstPrompt();
    });
  }

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
    db.query("INSERT INTO department SET ?", {
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
    db.query("INSERT INTO role SET ?", {
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

      inquirer
      .prompt([
        {
          type: "input",
          message: "Enter the employee's first name",
          name: "firstName",
        },
        {
          type: "input",
          message: "Enter the employee's last name",
          name: "lastName",
        },
        {
          type: "rawlist",
          name: "role_id",
          choices: function () {
            var choiceArr = [];
            for (i = 0; i < response.length; i++) {
              const choice = {
                value: response[i].id,
                name: response[i].title
              }
              choiceArr.push(choice);
            }
            return choiceArr;
          },
          message: "Select title",
        },
        {
          name: "manager_id",
          type: "number",
          message: "Enter manager ID",
          default: "1",
        },
      ])
      .then(function (response) {
        db.query("INSERT INTO employee SET ?", {
          first_name: response.firstName,
          last_name: response.lastName,
          role_id: response.role_id,
          manager_id: response.manager_id
        }, (err, result) => {
          if (err){
            console.log(err);
          };
          firstPrompt();
        })
      });
  });
};



// update an employee role
// function updateEmployeeRole() {
  