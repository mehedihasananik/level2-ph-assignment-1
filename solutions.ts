function multiplyValue(value: number, multiplier?: number): number {
    if (multiplier === 0) {
        return 0;
    }

    if (multiplier === undefined) {
        multiplier = 2;
    }

    return value * multiplier;
}


function processInput(value: string | number | boolean): string | number {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    } 

    else if (typeof value === "number") {
        return value * 10;
    } 

    else {
        return value ? "Active" : "Inactive";
    }
}


type Coordinate = readonly [number, number, string];

function formatCoordinate(coordinate: Coordinate): string {
    const [latitude, longitude, locationName] = coordinate;

    return `Location: ${locationName} (${latitude}, ${longitude})`;
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result: T[] = [];

    for (const array of arrays) {
        for (const item of array) {
            result.push(item);
        }
    }

    return result;
}


interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
    const popularCourses: Course[] = [];

    for (const course of courses) {
        if (course.isPublished && course.students >= minStudents) {
            popularCourses.push(course);
        }
    }

    return popularCourses;
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
    const result: T[K][] = [];

    for (const item of items) {
        result.push(item[key]);
    }

    return result;
}

class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}


function validateAgeAsync(age: number): Promise<string> {
    return new Promise((resolve, reject) => {
        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
        } 
        else {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
    });
}