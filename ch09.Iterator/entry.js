/*
 * Chapter 9. Iterator
 * by Jbee
 */

let arr = [1, 2, 3];
console.log(typeof arr[Symbol.iterator]);// function

let iterator = arr[Symbol.iterator]();
console.log(iterator.next());// {value: 1, done: false}
console.log(iterator.next());// {value: 2, done: false}
console.log(iterator.next());// {value: 3, done: false}
console.log(iterator.next());// {value: undefined, done: true}

let name = "jbee";
let iterator = name[Symbol.iterator]();
console.log(iterator.next());// {value: j, done: false}
console.log(iterator.next());// {value: b, done: false}
console.log(iterator.next());// {value: e, done: false}
console.log(iterator.next());// {value: e, done: false}
console.log(iterator.next());// {value: undefined, done: true}


// Final Example code
let autoIncrement = {
    [Symbol.iterator]() {
        let id = 0;
        return {
            next() {
                return {
                    value: ++id,
                    done: false
                }
            }
        }
    }
}
// Define User class
class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const idCreator = autoIncrement[Symbol.iterator]();
console.log(new User(idCreator.next().value, "jbee"));// { id: 1, name: 'jbee' }
console.log(new User(idCreator.next().value, "foo"));// { id: 2, name: 'foo' }
console.log(new User(idCreator.next().value, "bar"));// { id: 3, name: 'bar' }