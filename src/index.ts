type Person = { firstName: string, lastName: string };

let myNumberTs: number = 1;
const myStringTs: string = 'Hello World';
const myBooleanTs: boolean = true;
const myArrayTs: number[] = [1, 2, 3];
const myPersonTs: Person = { firstName: 'John', lastName: 'Doe' };

function logMyNumberTs(numberToLog: number): void {
    console.log(numberToLog);
}

function logMyNameTs(person: Person) :void {
    console.log(person.firstName + ' ' + person.lastName);
}

function logAllNumberTs(numbers: number[]): void {
    numbers.forEach(number => console.log(number));
}

logMyNumberTs(myNumberTs);