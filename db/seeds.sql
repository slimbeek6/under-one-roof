use household;

INSERT INTO household.expenses (expenseName, expenseAmount, expenseDate, expenseType, createdAt, updatedAt, paid) 
VALUES ("electricity", 100, "2021-02-02 19:54:05", "utilities", "2021-02-02 19:54:05", "2021-02-02 19:54:05", false);

INSERT INTO household.expenses (expenseName, expenseAmount, expenseDate, expenseType, createdAt, updatedAt, paid) 
VALUES ("cable", 100, "2021-02-02 19:54:05", "utilities", "2021-02-02 19:54:05", "2021-02-02 19:54:05", false);

INSERT INTO household.events (title, date, description, createdAt, updatedAt) 
VALUES ("Landlord Visit", "03/14/2021", "Clean up your stuff!", "2021-03-14 19:54:05", "2021-03-14 19:54:05");

INSERT INTO household.events (title, date, description, createdAt, updatedAt) 
VALUES ("Party", "03/15/2021", "Party at our place. BYOB!", "2021-03-15 19:54:05", "2021-03-15 19:54:05");