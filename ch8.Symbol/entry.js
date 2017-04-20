/*
 * Chapter 8. Symbol
 * by Jbee
 */

// Create Symbol
let s = new Symbol("symbol description");
//Error: Symbol is not a constructor

let s = Symbol("symbol description");
console.log(typeof s);//symbol
console.log(s.toString());//Symbol(symbol description)
console.log(s.valueOf());//{}
console.log(s);//{}

// toString() result
let s1 = Symbol("foo");
let s2 = Symbol("foo");
console.log("s1: ", s1.toString());//Symbol(foo)
console.log("s2: ", s2.toString());//Symbol(foo)
console.log(s1 == s2);//false

//for method
let sFor1 = Symbol.for("foo");
let sFor2 = Symbol.for("foo");
console.log(sFor1.toString());//Symbol(foo)
console.log(sFor2.toString());//Symbol(foo)
console.log(Symbol.keyFor(sFor1));//foo
console.log(Symbol.keyFor(sFor2));//foo
console.log(sFor1 == sFor2);//true
console.log(sFor1 === sFor2);//true

let sym = Symbol("symbol description");
console.log (`symbol: ${sym}`);
//TypeError: Cannot convert a Symbol value to string


// return emtpy object
let sym = Symbol("symbol description");
let obj = {
  [sym]: "value"
};
let str = JSON.stringify(obj);
console.log(str);//{}


//
let user = {
  [Symbol.for("name")] : "jbee",
  age : 25,
  major: "Computer Science"
}
console.log(Object.getOwnPropertyNames(user));//['age', 'major']


for (let item in user) {
  console.log(item);
}
// console>
// age
// major

// We can use getOwnPropertySymbols() method
console.log(Object.getOwnPropertySymbols(user)[0].toString());//Symbol(name)

// Use []
const sym = Symbol.for("name");
let user = {
  [sym] : "jbee",
}
console.log(user.sym);//undefined
console.log(user[sym]);//jbee


// Override toStringTag
class User {
  constructor(name) {
    this.name = name
  }
}

let user = new User("jbee");
console.log(user.toString());//[object Object]

let obj = {
  name: "jbee"
}
console.log(obj.toString());//[object Object]

User.prototype[Symbol.toStringTag] = "User";
Object.prototype[Symbol.toStringTag] = "Obj";
console.log(user.toString());//[object User]
console.log(obj.toString());//[object Obj]
let values = [1, 2, 3];
let sum = values + 100;
console.log(sum);//1,2,3100
console.log(typeof sum);//string


// Override toPrimitive
values[Symbol.toPrimitive] = function(hint) {
  console.log(hint);
  let result = 0;
  for (let item of values) {
    result += item;
  }
  return result;
}

let sum2 = values + 100;
console.log("sum2: ", sum2);//106
console.log(typeof sum2);//number

// Use `hint`
let obj = {
  [Symbol.toPrimitive](hint) {
    if (hint === "number") {
      return 1;
    }
    if (hint === "string") {
      return "문자열";
    }
    return "default";
  }
}

console.log ("default: ", 100 + obj);//100default
console.log ("number: ", 1 * obj);//number: 1
console.log (`string: ${obj}`);//string: 문자열
console.log(+obj +1);//2


// Override isConcatSpreadable
let prev = [1, 2];
let post = [3, 4];
console.log(prev.concat(post));//[1, 2, 3, 4]

prev[Symbol.isConcatSpreadable] = false;
console.log(prev.concat(post));//[[1, 2], 3, 4]
post[Symbol.isConcatSpreadable] = false;
console.log(prev.concat(post));//[[1, 2], [3, 4]]