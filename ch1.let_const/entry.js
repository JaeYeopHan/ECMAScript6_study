/*
 * Chapter 1. let, const
 * by Jbee
 */

//ES5 code
console.log(foo); //undefined
var foo;
console.log(foo); //undefined
foo = 123;
console.log(foo); //123

//ES6 code
console.log(foo); //ReferenceError
let foo;
console.log(foo); //undefined
foo = 123;
console.log(foo); //123

//ES5 code
function loadFiles( userNames ) {
    for (var i in userNames) {
        _fetchProfiles(userNames[i], function() {
            console.log(userNames[i]);
        }
    }
}
loadFiles(["A", "B", "C", "D"]);

console >
D // userNames[4]
D // userNames[4]
D // userNames[4]
D // userNames[4]


//ES6 code
function loadFiles( userNames ) {
    for (let i in userNames ) {
        _fetchProfile(userNames[i], function() {
            console.log(userNames[i]);
        }
    }
}
loadFiles(["A", "B", "C", "D"]);

console >
A // userNames[1]
B // userNames[2]
C // userNames[3]
D // userNames[4]

//ES6 code
let a = 'hello';
a = 'world' // available

let a = 'hello';
let a = 'world'; // false -> TypeError : Identifier ‘a’ has already been declared

let flashMessage = 'hello';
function loadFiles(userNames) {
    let flashMessage = 'world'; // available
    return flashMessage;
}


