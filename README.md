# Getting Started with Javascript

## Steps to start with
* Install Live Server extension by Live Server(ritwickdey.liveserver) in VS Code & Check Go Live Icon at bottom
* Create index.html and Live Server will launch this in Server in Chrome(http://127.0.0.1:5500/)

## Javascipt Engine
* Javascript Engine interpretes Javascript based on [ECMAScript Engine](https://en.wikipedia.org/wiki/List_of_ECMAScript_engines)
* First Javascript Engine(SpiderMonkey) is still used by Firefox
* Most popular Javascript Engine(V8 written in C++) is used by Chrome Browser & Node.js
* Javascript code -> Lexical Analysis -> Parser/Token -> Abstract Syntax tree([AST](https://astexplorer.net/))
                            ->    Interpreter -> ByteCode
                            ->    Interpreter ->  Profiler -> Compiler -> Optimized Code
* Garbage collected language(Mark & Sweep Algorithm)

## JIT Compiler
* Interpreter + Compiler = JIT(Just In Time)
* Inline Caching : Below studentData is not pulled multiple times, but JIT caches and does the task internally

```javascript
function findStudent(student){
    return `Found ${student.firstName}`
}

const studentData {
    firstName: 'Anupama'
    lastName: 'Sinha'
}

findStudent(studentData)
```

* Hidden Classes : Below must be optimized and written so that Caching is possible by JIT

```javascript
function Student(x,y){
    this.x=x;
    this.y=y;
}

const student1 = new Student(1,2);
const student2 = new Student(3,4);

student1.a=10;
student1.b=20;
student2.b=10;
student2.a=20;
```

* Stack Overflow : Check below code in Chrome Inspect

```javascript
function calculate(){
    calculate();
}
calculate();

VM369:2 Uncaught RangeError: Maximum call stack size exceeded
    at calculate (<anonymous>:2:5)
```

## Javasript Runner
* Single Threaded language(Single Call Stack), hence Synchronous
* Below parallelism is acheieved using Call Stack, CallBack Function & Web API

```javascript
console.log('1');
setTimeout(() => {console.log('2'),3000});
console.log('3');
1
3
undefined
2
```
* Node.js is Javascript runner(runtime built) on top of V8, built in C++. Server side(Uses Js outside browser), non blocking(Worker threads in background does the job and sends result through Call Back Queue)
* Vanilla Javascript treated each Request as separate thread. But Node.js used Single Thread to get all Requests and got job done by Node.js

## References
* [Advanced Javascript 2021 by Andrei Neagoie](https://www.udemy.com/course/advanced-javascript-concepts/)