'use strict';
     prompt('Type your name.');

const num1=Number(prompt("Enter first number"));
const num2=Number(prompt("Enter second number"));
const num3=Number(prompt("Enter third number"));

const sum= num1+num2+num3;
const product=num1*num2*num3;
const average=sum/3;

document.getElementById("output").innerHTML = `
    <p>Sum: ${sum}</p>
    <p>Product: ${product}</p>
    <p>Average: ${average.toFixed(2)}</p>
`;