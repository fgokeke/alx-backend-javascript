
// Define interface Student

interface Student {
  firstName: string,
  lastName: string,
  age: Number,
  location: string
}

// Create two students

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};
 
// Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// Render table and append rows

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement("table");
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");
const rowHead: HTMLTableRowElement = thead.insertRow(0);
const firstCellHead: HTMLTableCellElement = rowHead.insertCell(0);
const secondCellHead: HTMLTableCellElement = rowHead.insertCell(1);

firstCellHead.innerHTML = "firstName";
secondCellHead.innerHTML = "location";
table.append(thead);

studentsList.forEach(student => {
  const row: HTMLTableRowElement = tbody.insertRow(0);
  const firstCell: HTMLTableCellElement = row.insertCell(0);
  const secondCell: HTMLTableCellElement = row.insertCell(1);

  firstCell.innerHTML = student.firstName;
  secondCell.innerHTML = student.location;
});

table.append(tbody);
body.append(table);
