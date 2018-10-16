"use strict";
var doubleSol = function (value) { return value * 2; };
console.log(doubleSol(10));
var greetSol = function (name) {
    if (name === void 0) { name = "Max"; }
    return console.log("Hello, " + name);
};
greetSol();
greetSol("Anna");
var numbersSol = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbersSol));
var newArraySol = [55, 20];
newArraySol.push.apply(newArraySol, numbersSol);
console.log(newArraySol);
var testResultsSol = [3.89, 2.99, 1.38];
var result1Sol = testResultsSol[0], result2Sol = testResultsSol[1], result3Sol = testResultsSol[2];
console.log(result1Sol, result2Sol, result3Sol);
var scientistSol = { firstName: "Will", experience: 12 };
var FirstName = scientistSol.firstName, Experience = scientistSol.experience;
console.log(FirstName, Experience);
