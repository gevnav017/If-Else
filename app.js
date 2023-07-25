const output = document.getElementById('output');

let bool = '';

if (bool) {
    output.textContent = 'The boolean value true is truthy';
}
else {
    output.textContent = 'The boolean value false is falsy';
}


const output1 = document.getElementById('output1');

let num1 = 50;
let num2 = 51;

if (num1 + num2 < 100) {
    output1.textContent = `${num1 + num2} is greather than 100`;
}
else {
    output1.textContent = `${num1 + num2} is greather than 100`;
}


const output2 = document.getElementById('output2');

let num3 = 5;
let num4 = 6;

if (num1 >= 5 && num2 >=5) {
    output2.textContent = `${num1} and ${num2} is greather than 5`;
}
else {
    output2.textContent = `${num1} and ${num2} is greather than 5`;
}

const output3 = document.getElementById('output3');

let value1 = "cat";
let value2 = "cat";
let value3 = 6;
let value4 = "6";

if ((value1 == "cat" && value2 == "cat") || (value3 == 6 && value4 == 6)) {
    output3.textContent = `true`;
}
else {
    output3.textContent = `false`;
}