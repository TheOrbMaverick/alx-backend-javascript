interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number
}

function printTeacher(firstName: string, lastName: string) {
    const firstLetter = firstName[0]
    return firstLetter + '. ' + lastName
}

interface printTeacherFunction {
    firstLetter: string;
    dot: '. ';
    lastName: string;
}

console.log(printTeacher("John", "Doe"));
