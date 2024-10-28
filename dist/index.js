var myNumberTs = 1;
var myStringTs = 'Hello World';
var myBooleanTs = true;
var myArrayTs = [1, 2, 3];
var myPersonTs = { firstName: 'John', lastName: 'Doe' };
function logMyNumberTs(numberToLog) {
    console.log(numberToLog);
}
function logMyNameTs(person) {
    console.log(person.firstName + ' ' + person.lastName);
}
function logAllNumberTs(numbers) {
    numbers.forEach(function (number) { return console.log(number); });
}
logMyNumberTs(myNumberTs);
//# sourceMappingURL=index.js.map