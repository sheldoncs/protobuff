const Schema = require("./employees_pb");
const fs = require("fs");

const adam = new Schema.Employee();
adam.setId(1001);
adam.setName("Adam");
adam.setSalary(1000);

const julian = new Schema.Employee();
adam.setId(1002);
adam.setName("Julian");
adam.setSalary(9000);

const harold = new Schema.Employee();
adam.setId(1003);
adam.setName("Harold");
adam.setSalary(6000);

const Employees = new Schema.Employees();
Employees.addEmployees(adam);
Employees.addEmployees(adam);
Employees.addEmployees(julian);
Employees.addEmployees(harold);
const Bytes = Employees.serializeBinary();

fs.writeFileSync("EmployeesBinary",Bytes);

const Employees2 = Schema.Employees.deserializeBinary(Bytes);

console.log("Employees ",Employees2.toString());