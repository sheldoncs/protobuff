const fs = require("fs");


const employees = [];

employees.push({ name: "Sheldon", salary: 1000, id: 1001 });

const robin = { name: "Robin", salary: 9000, id: 1002 };

employees.push(robin);

employees.push({ name: "Rick", salary: 5000, id: 1003 });

fs.writeFileSync("jsondata.JSON", JSON.stringify(employees));
