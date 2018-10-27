// Exercise 1
let doubleSol = (value: number) => value * 2;
console.log(doubleSol(10));

// Exercise 2
let greetSol = (name: string = "Max") => console.log("Hello, " + name);
greetSol();
greetSol("Anna");

// Exercise 3
let numbersSol = [-3, 33, 38, 5];
console.log(Math.min(...numbersSol));

// Exercise 4
let newArraySol = [55, 20];
newArraySol.push(...numbersSol);
console.log(newArraySol);

// Exercise 5
let testResultsSol = [3.89, 2.99, 1.38];
const [result1Sol, result2Sol, result3Sol] = testResultsSol;
console.log(result1Sol, result2Sol, result3Sol);

// Exercise 6
let scientistSol = {firstName: "Will", experience: 12};
const { firstName: FirstName, experience: Experience} = scientistSol;
console.log(FirstName, Experience);
