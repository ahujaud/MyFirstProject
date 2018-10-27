"use strict";
var str = "My Name is Uday Ahuja";
var num = 12.45;
var bool = true;
var arr = ["first", "second", "third"];
var arrTupe = ["Uday", 23];
var Color;
(function (Color) {
    Color[Color["Green"] = 0] = "Green";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Red"] = 100] = "Red";
    Color[Color["White"] = 101] = "White";
})(Color || (Color = {}));
console.log(Color.Green);
var myColor = Color.Blue;
var myObj = "new type";
myObj = 45;
myObj = {
    type: "localStorage",
    allowed: false,
};
var myFun;
myFun = function (x, y) {
    console.log("this is function argument" + x + y);
};
myFun("uday", 23);
var myNewFun = myFun;
console.log(myNewFun);
console.log(myNewFun("new Type", 23));
var Obj = {
    name: "uday",
    age: 23,
};
Obj = {
    age: 25,
    name: "anurag",
};
var union;
union = 45.36;
union = "Uday";
console.log(typeof myFun);
if (typeof str === "string") {
    str = "hkhk";
}
