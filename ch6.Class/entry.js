/*
 * Chapter 6. Class
 * by Jbee
 */

// Class

//클래스 선언문으로 클래스 선언
class name {
    //...
}

//클래스 표현식으로 클래스 선언
let name = class {
    //...
}

let name = class inner_name {
    //...
}

console.log(typeof name); //function

//Not hoisting
let foo = new Foo();

class Foo {

}
//Error:Use before declaration


//class method
class Student {
    getName() {
        console.log("name");
    }
    getScore() {
        console.log("score");
    }
}

let student = new Student();
student.getName(); //name
student.getScore(); //score


//window object?
function Foo() {

}
console.log(window.Foo); // function Foo() {...}
console.log(window.Student); //undefined


//add method to prototype
Student.prototype.newMethod = function() {
    console.log("Add new Method");
}

student.newMethod(); //Add new Method


//new keyword
class Student {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
    getName() {
        return this.name;
    }
}

let s = new Student("Jbee", 100);
console.log(s.name); //Jbee
console.log(s.score); //100
console.log(s.getName()); //Jbee


//contructor
class Foo {
    //do something
}

let f = new Foo();
console.log(f instanceof Foo); //true
console.log("constructor: ", Foo.prototype.constructor);

class Boo {
    constructor() {
        //do something
    }
}

let b = new Boo();
console.log("constructor: ", Boo.prototype.constructor);


//extends
class Foo {
    getName() {
        console.log("Foo");
    }
}

class Bar extends Foo {
}

let bar = new Bar();
bar.getName(); //Foo


//Overriding
class Foo {
    getName() {
        console.log("Foo");
    }
}

class Bar extends Foo {
    getName() {
        console.log("Bar");
    }
}

let bar = new Bar();
bar.getName(); //Bar


//use `super` keyword
class Foo {
    getName() {
        return "Foo";
    }
}

class Bar extends Foo {
    getName() {
        return super.getName() + " Bar";
    }
}

let bar = new Bar();
bar.getName(); //Foo Bar


// Use super class constructor when subClass don't have constructor
class Foo {
    constructor() {
        console.log("Foo constructor");
    }
}

class Bar extends Foo {
}

let bar = new Bar();
//console> Foo constructor


//subclass must have super() in constructor
class Foo {
    constructor() {
        console.log("Foo");
    }
}

class Bar extends Foo {
    constructor() {
        console.log("Bar");
    }
}

let bar = new Bar();
//ReferenceError: this is not defined


//subClass have super() method in constructor
class Foo {
    constructor() {
        console.log("Foo constructor");
    }
}

class Bar extends Foo {
    constructor() {
        super();
        console.log("Bar constructor");
    }
}

let bar = new Bar();
//console> Foo constructor
//console> Bar constructor


//Use static method without creating instance
//Can't use static method on instance
class Foo {
    static getName() {
        console.log("Foo");
    }
}

Foo.getName(); //Foo

let foo = new Foo();
foo.getName();//not a function


//
class Foo {
    static getName() {
        console.log("Foo");
    }

    getAlias() {
        console.log("foo");
    }
}

console.log(Foo.prototype.getName === Foo.getName);//false
console.log(Foo.prototype.getAlias === new Foo().getAlias);//true


//static variable
class Foo {

}
Foo.name = "foo";


//new.target
class Foo {
    constructor() {
        console.log(new.target);//[Function: Bar]
        console.log(typeof new.target);//function
        console.log("Foo: ", new.target.getName());//Foo: bar
    }
}

class Bar extends Foo {
    constructor() {
        super();
    }

    static getName() {
        return "bar";
    }
}

let bar = new Bar();
