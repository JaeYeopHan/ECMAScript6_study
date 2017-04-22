/*
 * Chapter 3. Operation
 * by Jbee
 */

// Destructuring
function buildUser(first, last){
    let fullName = first + " " + last;
    return {first, last, fullName};
}
let { first, last, fullName } = buildUser("Sam", "Williams");

console.log(first); // Sam
console.log(last); // Williams
console.log(fullName); // Sam Williams

let { fullName } = buildUser("Sam", "Williams");
console.log( fullName ); // Sam Williams

//ES5
function buildUser(first, last, postCount){
    return {
        first,
        last,
        isActive : function( ) {
            //...
        }
    }
}
//ES6
function buildUser(first, last, postCount){
    return {
        first,
        last,
        isActive( ) {
            //...
        }
    }
}

let one, two, three, four;
//case1
[one, two] = [1, 2];
console.log(one); //1
console.log(two); //2
//case2
[one, two, three] = [1, 2];
console.log(one); //1
console.log(two); //2
console.log(three);//undefined
//case3
[one, two] = [1, 2, 3];
console.log(one); two//1
console.log(two); //2

[one, ...other] = [1, 23, 24, 25];
console.log(one); //1
console.log(other); //[23, 24, 25]

[one, , , four] = [1, 2, 3, 4];
console.log(one); //1
console.log(four); //4

//final example code
function avg({count, sum : {min, max}}) {
    return (min + max)/count;
}
avg({count : 5, sum : {min : 100, max : 200}}); //60



// Default Value
let [first, second, third = 3] = [1, 2];
console.log(first); //1 by destructuring
console.log(second); //2 by destructuring
console.log(third); //3 by default value

let [fourth, fifth, sixth = 6] = [4, 5, 66];
console.log(first); //4 by destructuring
console.log(second); //5 by destructuring
console.log(third); //66 by destructuring

// Default Parameter
let somethingFunction = (prev, post = 20) => prev + post;
console.log(somethingFunction(1)); //21 by default parameter
console.log(somethingFunction(1, 2)); //3
console.log(somethingFunction(1, undefined)); //21 by default parameter
console.log(somethingFunction(1, null)); //1

let tax = x => x * 2;

let getTotal = function(price, tax = 0.07) {
    console.log(arguments.length);
}
getTotal(100); //1
getTotal(100, 0.05); //2
console.log(getTotal.length); //1

//default parameter
let salary = [100, 200, 300];
let [low, avg, high = 500] = salary;
console.log(high); //500

//let assignment
let low, avg, high = 500;
let [low, avg, high] = salary;
console.log(high); //300

// Exponentiation
console.log(2**3);//8
console.log(4**2);//16