// Types.

let str: string = "My Name is Uday Ahuja";

let num: number = 12.45; // this can either be integer or floating point number.

let bool: boolean = true; // number value are not allowed eg. 0 or 1.

// bool = 0; // this will give error

let arr: string[] = ["first", "second", "third"]; // define array like this also string[] both types are allowed.

// arr = [1,2,3]; // this will give error

let arrTupe: [string, number] = ["Uday", 23];
// type here is necessory it should be of that type and the length should be fixed.

enum Color {
    Green,
    Blue,
    Red = 100,
    White, // this will be 101
}
console.log(Color.Green);

let myColor: Color = Color.Blue;

let myObj: any = "new type";

myObj = 45;
myObj = {
    type: "localStorage",
    // tslint:disable-next-line:object-literal-sort-keys
    allowed: false,
};

let myFun: (value: string, value1: number) => void;
// function type with 2 arguments name can not be same but type should be same otherwise it will give error

// tslint:disable-next-line:only-arrow-functions
myFun = function(x: string, y: number): void {
console.log("this is function argument" + x + y);
};
// myFun = function(y: string, z:string): void {

// }
// error type number is not assignable to type string.

myFun("uday", 23);

type myType  = (value: string , another: number) => void; // creaing custom type.
let myNewFun: myType = myFun;
console.log(myNewFun);
console.log(myNewFun("new Type" , 23));

let Obj = {
     name: "uday",
     // tslint:disable-next-line:object-literal-sort-keys
     age: 23,
 }; // in function order is important and in object name of property is important.

Obj = {
     age: 25,
     name: "anurag",
    };

// Obj = {
//     newName: "Roshan",
//     age: 25,
// } // giver error newName property is not valid property in type.

// Union Types

let union: number | string;
union = 45.36;

union = "Uday";

// union = myFun; giver error not assiginable to type number | string;

console.log(typeof myFun);

// to check for types using types in quotes

if (typeof str === "string") {
  str = "hkhk";
}
