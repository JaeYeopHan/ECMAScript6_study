let arr = [];
console.log(arr[Symbol.iterator]); //function values() { [native code] }
let obj = {a:1};
console.log(obj[Symbol.iterator]); //undefined

let iteratorObj = arr[Symbol.iterator](); //iterator object

let categories = ["Korean", "English", "Science"];
categories.forEach(subject => {
    console.log(subject);
});
// console>
// Korean
// English
// Science

for (let i = 0; i < subject.length; i++) {
    console.log(categoried[i]);
}
// console>
// Korean
// English
// Science

for (let item in categories) {
    console.log(item);
}
// console>
// 0
// 1
// 2

for (let item of categories) {
    console.log(item);
}
// console>
// Korean
// English
// Science

let obj = {
    one : 1,
    two : 2,
    three : 3
};

for (let key in obj) {
    console.log(key);
}

// console>
// one
// two
// three

for (let key in obj) {
    console.log(obj[key]);
}
// console>
// 1
// 2
// 3

for (let item of obj) {
    console.log(item);
}
// console>
// Uncaught TypeError: obj[Symbol.iterator] is not a function
