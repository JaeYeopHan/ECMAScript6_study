/*
 * Chapter 3. Spread and Rest parameter chapter
 * by Jbee
 */
let prev = [3,4];
let post = [7,8];
let spreadObj = [1, 2, ...prev, 5, 6, ...post, 9];
console.log(spreadObj); // [1,2,3,4,5,6,7,8,9]

let sObj = [..."javascript"];
console.log(sObj); // ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]

let price = [12, 20, 18];
Math.max(12, 20, 18);

Math.max.call(Math, price);
let maxPrice = Max.max(...price);
//
const values = [10, 20, 30];
function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

sum(...values); //60

let getElement = (elm) => {
    console.log(elm);
}
getElement(...values); //10

let getElementByRest = (...rest) => {
    console.log(rest);
}

getElementByRest(...values); //[10, 20, 30]

let getElementByRestWithParam = (param, ...rest) => {
    console.log(param);
    console.log(rest);
}
console.log(getElementByRestWithParam.length); // 1
const values = [10, 20, 30];
getElementByRestWithParam(...values); //10 \n [20, 30]

// Array-like object
let arrLikeObj = {
    0 : "zero",
    1 : "one",
    2 : "two",
    length : 3
};

for (let i = 0; i < arrLikeObj.length; i++) {
    console.log(arrLikeObj[i]);
}