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


//TASK 5
// DirectorInterface with the expected methods
export interface DirectorInterface {
    workFromHome: () => string;
    getCoffeeBreak: () => string;
    workDirectorTasks: () => string;
}

// TeacherInterface with the expected methods
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

export class Director implements DirectorInterface {

    workFromHome(): string {
        return "Working from home"
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break"
    }

    workDirectorTasks(): string {
        return "Getting to director tasks"
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

export function createEmployee(salary: string): Director | Teacher {

    const intSalary = parseInt(salary)
    if (Number.isInteger(intSalary) && intSalary < 500) {
        return new Teacher
    }
    return new Director
}


function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}