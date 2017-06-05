/*
 * Chapter 10. Generator
 * by Jbee
 */

// new Map()
let newMap = new Map([
    ['1', 'one'],
    ['2', 'two'],
    ['3', 'three']
]);

printMap(newMap);

// Map.prototype.get(), set()
let webs = new Map();

webs.set('1', 'React')
    .set('2', 'Angular2')
    .set('3', 'Vue')
    .set('2', 'Redux');
print(webs);

printMap(webs);
console.log(`webs.get('1'): ${webs.get('1')}`);

// Map.prototype.has()
console.log(webs.has('1'));//true
console.log(webs.has('4'));//false

// Map.prototype.delete(), clear()
webs.delete('1');
printMap(webs);
// console
// key: 2, value: Redux
// key: 3, value: Vue

webs.clear();
printMap(webs);
// console
// undefined

// Map.prototype.forEach()
webs.forEach((value, key, obj) => {
    console.log(`key: ${key}, value: ${value}`);
});


// utils
function printMap(map) {
    for (let [key, value] of map) {
        console.log(`key: ${key}, value: ${value}`);
    }
}

function print(map) {
    for (let item of map) {
        console.log(Array.isArray(item));
        console.log(item);
    }
}