//Basic sintact of TypeScript
let id: number = 5;
let company: string = "CG";
let isPublished: boolean = true;

let x: any = "Hello";
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
let ids: number[] = [1, 2, 3];
ids.push(4);

let arr: any[] = [1, true, "Hello"];

//Tuple specify the order of array.
let person: [number, string, boolean] = [1, "Bob", true];
let employee: [number, string][];

employee = [
  [1, "Bob"],
  [2, "Jack"],
  [3, "Jill"],
];

//Union
let productId: string | number = 22;
productId = "22";

//Enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

console.log("Direction Up: ", Direction1.Up);

enum Direction2 {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log("Direction Up with modified location: ", Direction2.Up);

enum Direction3 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log("Direction Up: ", Direction3.Up);

//Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John",
};

type u2 = number | string;
let user2: u2 = 3;

//Type Assertion
let cid: any = 1;
let costumerId = <number>cid;
let costumerId2 = cid as number;

//Functions
function addNum(x: number, y: number): number {
  return x + y;
}

console.log("Add Number: ", addNum(1, 5));

//not returning anything
function log(message: string | number): void {
  console.log(message);
}

log("Hello void message");

//Iterfaces
interface UserIterface {
  //You can make it read only
  readonly id: number;
  name: string;
  //With ? mark you can make it optional
  age?: number;
  accountNum?: number;
}

const user1: UserIterface = {
  id: 1,
  name: "John",
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;
console.log("Add Number with interface: ", add(2, 6));

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

//Classes
class Person implements PersonInterface {
  //   private id: number;
  //  protected id: number;
  id: number;
  name: string;

  constructor(id: number, name: string) {
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
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "Vera", "developer");

console.log(emp.register());

//Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["Brad", "Jack", "John"]);

strArray.push("Hello");

//Create a React typescript app
//npm create-react-app . --template typescript

// export interface Props {
//     title: string
//     color?: string
// }

// const Header = (props: Props) => {
//     return (
//         <header>
//             <h1 style={{ color: props.color ? props.color : "blue" }}>
//                 {props.title}
//             </h1>
//         </header>
//     )
// }