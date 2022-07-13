"use strict";
//Basic sintact of TypeScript
let id = 5;
let company = "CG";
let isPublished = true;
let x = "Hello";
x = 2;
// Run a tsc file
//-----------------
//Compile tsc with:             tsc index
//To whatch any changes:        tsc --watch index
//Set up a tsc config file
//-----------------
//Set up a tsc config file:     tsc --init
// With config file run "tsc" it compile all the ts files in the project
// Can specfy where to compile the JS files. Itt will be in a different folder (pl dist)
// Output the compliled files:  outDir: "./dist"
// Where to find the ts files:  rootDir: "./src"
console.log("ID: ", id);
//Array only containts numbers
let ids = [1, 2, 3];
ids.push(4);
let arr = [1, true, "Hello"];
//Tuple specify the order of array.
let person = [1, "Bob", true];
let employee;
employee = [
    [1, "Bob"],
    [2, "Jack"],
    [3, "Jill"],
];
//Union
let productId = 22;
productId = "22";
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log("Direction Up: ", Direction1.Up);
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right";
})(Direction2 || (Direction2 = {}));
console.log("Direction Up with modified location: ", Direction2.Up);
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "Up";
    Direction3["Down"] = "Down";
    Direction3["Left"] = "Left";
    Direction3["Right"] = "Right";
})(Direction3 || (Direction3 = {}));
console.log("Direction Up: ", Direction3.Up);
const user = {
    id: 1,
    name: "John",
};
let user2 = 3;
//Type Assertion
let cid = 1;
let costumerId = cid;
let costumerId2 = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
console.log("Add Number: ", addNum(1, 5));
//not returning anything
function log(message) {
    console.log(message);
}
log("Hello void message");
const user1 = {
    id: 1,
    name: "John",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log("Add Number with interface: ", add(2, 6));
//Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const greg = new Person(1, "Greg");
const jack = new Person(2, "Jack");
console.log("New Person", greg, jack);
console.log(greg.register());
//Can extend an exisint class like:
//They called subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Vera", "developer");
console.log(emp.register());
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["Brad", "Jack", "John"]);
strArray.push("Hello");
