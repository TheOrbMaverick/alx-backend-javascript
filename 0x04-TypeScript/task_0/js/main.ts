interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}


const student1: Student = {
    firstName: 'Johnson',
    lastName: 'Grandeur',
    age: 24,
    location: 'Flemmington',
}


const student2: Student = {
    firstName: 'Villim',
    lastName: 'Ransid',
    age: 24,
    location: 'Overu Sun',
}


const studentsList: Student[] = [student1, student2]


const table: HTMLTableElement = document.createElement('table');
const tableHeader: HTMLTableSectionElement = table.createTHead();
const headerRow: HTMLTableRowElement = tableHeader.insertRow();
const firstNameHeader: HTMLTableCellElement = headerRow.insertCell();
firstNameHeader.innerText = "First Name";
const locationHeader: HTMLTableCellElement = headerRow.insertCell();
locationHeader.innerText = "Location";


studentsList.forEach((student) => {
    const row: HTMLTableRowElement = table.insertRow();
    const firstNameCell: HTMLTableCellElement = row.insertCell();
    const locationCell: HTMLTableCellElement = row.insertCell();
    firstNameCell.innerText = student.firstName;
    locationCell.innerText = student.lastName;
})


document.body.appendChild(table);
