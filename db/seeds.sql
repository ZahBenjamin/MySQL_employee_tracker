USE employee_db;

INSERT INTO department (name)
VALUES 
("Ethics"),
("Metaphysics"),
("Existentialism"),
("Aesthetics");

INSERT INTO role (title, salary, department_id)
VALUES 
("Philosopher", 30000, 1),
("Poet", 10000, 1),
("Economist", 80000, 2),
("Hobbyist", 50000, 3),
("Bum", 90000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Immanuel", "Kant", 1, null),
("John", "Rawls", 1, 1),
("St. Thomas", "Aquinas", 1, 1),
("William", "Shakespear", 2, 1), 
("Claude", "McKay", 2, null),
("John Stuart", "Mill", 2, 1),
("Adam", "Smith", 3, null),
("Karl", "Marx", 3, 1),
("Ludwig", "Wittgenstein", 4, null),
("Bertrand", "Russell", 4, 1);