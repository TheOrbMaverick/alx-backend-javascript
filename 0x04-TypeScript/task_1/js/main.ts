//TASK 1
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}


//TASK 2
export interface Directors extends Teacher {
    numberOfReports: number
}


//TASK 3
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Implement the function
export const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};



//TASK 4
// Interface for the StudentClass constructor
interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface for the StudentClass methods
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

// Implementing the StudentClass
export class StudentClass implements StudentClassInterface {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}
