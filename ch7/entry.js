/*
 * Chapter 7. Template literal
 * by Jbee
 */

// Template literal
console.log(`template literal`);

//Use variable and new line
let name = "jbee";
//ES5
console.log("Hi, " + name + "!\nHave a nice day!");
// console>
// Hi, jbee!
// Have a nice day!

//ES6
let grettingTemplate = `
Hi, ${name}!
Have a nice day!
`;
console.log(grettingTemplate);
//console>
// Hi, jbee!
// Have a nice day!


// tagged template
let name = "jbee"
let num = 27;
console.log(`hi, ${name}! Have a nice day! ${num} is your number`);
//console> hi, jbee! Have a nice day! 27 is your number

//Use tagged template and separate text and value
function greet(text, value) {
    console.log(text);
    console.log(value);
    console.log(typeof value);
}
greet `hi, ${name}! Have a nice day! ${num} is your number`;
//console> [ 'hi, ', '! Have a nice day! ', ' is your number' ]
//console> jbee
//console> string

function greet(text, value, value2) {
    console.log(text);
    console.log(value);
    console.log(value2);
}
greet `hi, ${name}! Have a nice day! ${num} is your number`;
//console> [ 'hi, ', '! Have a nice day! ', ' is your number' ]
//console> jbee
//console> 27

//Use Rest parameter
function greet(text, ...value) {
    console.log(text);
    console.log(value);
}
greet `hi, ${name}! Have a nice day! ${num} is your number`;
//console> [ 'hi, ', '! Have a nice day! ', ' is your number' ]
//console> [ 'jbee', 27 ]


//Assign expression statement
function greeting(message) {
    let name = `ecmascript`;
    console.log(message);
}

let name = `jbee`;
greeting(`Hi, ${name}`);
//console> Hi, jbee
