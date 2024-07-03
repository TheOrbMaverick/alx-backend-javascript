interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}


const student1: Student = {
    firstName: 'Johnson',
    lastName: 'Grandeur',
    age: 24,
    location: 'Flemmington'
}


const student2: Student = {
    firstName: 'Villim',
    lastName: 'Ransid',
    age: 24,
    location: 'Overu Sun'}


const studentsList: Student[] = [student1, student2]


const table = document.createElement('table');
const tableHeader = table.createTHead();
const headerRow = tableHeader.insertRow();
const firstNameHeader = headerRow.insertCell();
firstNameHeader.innerText = "First Name";
const locationHeader = headerRow.insertCell();
locationHeader.innerText = "Location";


studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    const locationCell = row.insertCell();
    firstNameCell.innerText = student.firstName;
    locationCell.innerText = student.lastName;
})


document.body.appendChild(table);
