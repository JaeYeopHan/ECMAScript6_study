/*
 * Chapter 10. Generator
 * by Jbee
 */

// ** Array.from **

// array-like-object to array
const arrLikeObj = {'0': '100', '1': '101', '2': '102', 'length': 3};
const arrFrom = Array.from(arrLikeObj);

console.log(arrFrom);//Array ['100', '101', '102']

const str = "Jbee";
console.log(Array.from(str));//Array ['J', 'b', 'e', 'e']
console.log(new Array(...str));//Array ['J', 'b', 'e', 'e']


// Using with DOM manipulation
const ul = document.getElementById('content');
const ulClassList = ul.classList;
console.log(ulClassList);
//["content-list", "foo", "bar", "baz", value: "content-list foo bar baz"]
console.log(Array.isArray(ulClassList));//false

const ulClassArr = Array.from(ulClassList);
console.log(ulClassArr);//["content-list", "foo", "bar", "baz"]
console.log(Array.isArray(ulClassArr));//true


// Use from with callback function
const arrFromWithCb1 = Array.from(arrLikeObj, elm => elm + 100);
console.log(arrFromWithCb1);

const arrFromWithCb2 = Array.from(arrLikeObj, elm => +elm + 100);
console.log(arrFromWithCb2);


// Use `from` with callback function and third parameter
const arrFromWithCb3 = Array.from(arrLikeObj, function(elm){
    return +elm + this.value
}, {value: 200});
console.log(arrFromWithCb3);//[300, 301, 302]



// ** Array.of() **
const arr = Array.of(1, 2, 3);
console.log(Array.isArray(arr));//true
console.log(arr);//[1, 2, 3]

const str = `Jbee`;
const strArr = Array.of(...str);
console.log(Array.isArray(strArr));//true
console.log(strArr);


// ** Array.prototype.entries() **
const arr = [1, 2, 3];

for (let item of arr) {
    console.log(`${item}`);//1  2  3
}

for (let [ key, value ] of arr.entries()) {
    console.log(`${key} : ${value}`);//0:1  1:2  2:3
}


// ** Array.prototype.filter() **
const arr = ['Jbee', 'babel', 'React']
const result = arr.find(elm => elm.includes('e'));
console.log(result);//'Jbee'


// ** Array.prototype.filter **
const arr = ['Jbee', 'babel', 'React']
const result = arr.filter(elm => elm.includes('e'));
console.log(result);//'Jbee', 'babel', 'React'


// ** Array.prototype.map **
const arr = ['Jbee', 'babel', 'React']
const result = arr.map((elm, i) => `${i}: ${elm}`);
console.log(result);// ['0: Jbee', '1: babel', '2: React']


// ** Array.prototype.reduce **
const result = [0, 1, 2, 3].reduce(function(previousValue, currentValue, currentIndex, array) {
    console.log(currentIndex);
    console.log(array);
    return previousValue + currentValue;
});

const result = [0, 1, 2, 3].reduce((pre, cur) => pre + cur);
console.log(result);


// ** Array.prototype.splice, Array.prototype.slice **
const arr = [{0: 'zero'}, {1: 'one'}, {2: 'two'}];
const result = arr.splice(0, 1, {4: 'foour'});
console.log(arr);// [{4: 'foour'}, {1: 'one'}, {2: 'two'}]
console.log(result);// [{0: 'zero'}]

const arr = [{0: 'zero'}, {1: 'one'}, {2: 'two'}];
const newArr = arr.slice(0, arr.length);
console.log(arr);// [{0: 'zero'}, {1: 'one'}, {2: 'two'}]
console.log(newArr);// [{1: 'one'}, {1: 'one'}, {2: 'two'}] is new Array