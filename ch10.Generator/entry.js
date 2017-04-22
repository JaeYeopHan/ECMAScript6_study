/*
 * Chapter 10. Generator
 * by Jbee
 */

// 선언문
function* calc(prev, post) {
    console.log("generator start");
    yield prev + post;
}

//표현식
let calc1 = function*(prev, post) {
    console.log("generator start");
    yield prev + post;
}

let generator = calc(1, 2);
console.log(typeof generator); // object

// .next()
console.log(generator.next());
//generator start
//{ value: 3, done: false }
console.log(generator.next());
//{ value: undefined, done: true }


// Aboud yield Keyword
function* calc(prev, post) {
    let result = 0;
    console.log(`Initial result: ${result}`);
    result = yield prev + post;

    console.log(`Middle result: ${result}`);

    result = yield;
    console.log(`Last result: ${result}`);
}

let generator = calc(10, 20);

console.log(generator.next()); //첫번째 yield까지 실행한다.
// Initial result: 0
// { value: 30, done: false } :: value assigned expression

console.log(generator.next()); //두번째 yield까지 실행한다.
// Middle result: undefined :: [expression] 값이 할당되지 않는다.
// { value: undefined, done: false }

console.log(generator.next(20)); //yield가 없으므로 brace까지 실행한다.
// Last result: 20
// { value: undefined, done: true }


// return keyword
function* calc(prev, post) {
    return prev + post;
}

let generator = calc(10, 20);
console.log(generator.next());
// { value: 30, done: true }


//return() method
function* idMaker(prev, post) {
    let value = 0;
    while(true) {
        yield ++value;
    }
}

let g = idMaker();
console.log(g.next());// { value: 1, done: false }
console.log(g.next());// { value: 2, done: false }
console.log(g.next());// { value: 3, done: false }
console.log(g.return(100));// { value: 100, done: true }

//throw() method 1
function* idMaker(prev, post) {
    let value = 0;
    try {
        while(true) {
            yield ++value;
        }
    } catch(e) {
        console.log(`Error message: ${e}`);
    }

}

let g = idMaker();
console.log(g.next());// { value: 1, done: false }
console.log(g.next());// { value: 2, done: false }
console.log(g.next());// { value: 3, done: false }
console.log(g.throw("Throw Exception"));
//Error message: Throw Exception
//{ value: undefined, done: true }


// throw method 2
function* idMaker(prev, post) {
    let value = 0;
    try {
        while(true) {
            yield ++value;
        }
    } catch(e) {
        yield e;
    }
}

let g = idMaker();
console.log(g.next());// { value: 1, done: false }
console.log(g.next());// { value: 2, done: false }
console.log(g.next());// { value: 3, done: false }
console.log(g.throw("Throw Exception"));
//{ value: 'Throw Exception', done: false }
console.log(g.next());// { value: undefined, done: true }


// yield* case 1
function* gen() {
    yield 1;
    yield* [10, 20, 30];
    yield 2;
}
let g = gen();
console.log(g.next());// { value: 1, done: false }
console.log(g.next());// { value: 10, done: false }
console.log(g.next());// { value: 20, done: false }
console.log(g.next());// { value: 30, done: false }
console.log(g.next());// { value: 2, done: false }
console.log(g.next());// { value: undefined, done: true }
