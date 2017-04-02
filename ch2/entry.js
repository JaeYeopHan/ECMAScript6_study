/*
 * Chapter 2. Arrow function
 * by Jbee
 */

//ES5
document.getElementById("todos").addEventListener("click", function() {
    console.log(this); //#todos
});

//ES6
document.getElementById("todos").addEventListener("click", () => {
    console.log(this); //Window
});

