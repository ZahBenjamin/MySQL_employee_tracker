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
("Hobbyist" 50000, 3),
("Bum", 90000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Immanuel", "Kant", 1),
("John", "Rawls", 1),
("Thomas", "Aquinas", 1),
("William", "Shakespear", 2),
("Claude", "McKay", 2),
("John Stuart", "Mill", 2),
("Adam", "Smith", 3),
("Karl", "Marx", 3),
("Ludwig", "Wittgenstein", 4),
("Bertrand", "Russell", 4);