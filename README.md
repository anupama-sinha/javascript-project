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

## IIFE(Immediately Invoked Function Expression)
(function(){

})();



## Javascript Sample Codes(Standalone runnable)


## Chrome Extensions for Coding
* ColorPick Eyedropper : Helps in selecting color
* Cloudflare CDN : Use for Font Awesome Icons(https://cdnjs.com/libraries/font-awesome, https://www.w3schools.com/icons/fontawesome_icons_intro.asp)

## HTML Tags
* template : Tag to hold hidden data when page loads
* !DOCTYPE html : Represents HTML5

## Bootstrap
* Library for CSS
* It divides a row into 12 sections. So, a container can have multiple rows and each row is by default divided equally unless specified otherwise

## Font Awesome Website for Icons
* Search any icon and start using it and copy the CSS provided. Just a CDN to be included in style for download

## CSS(Cascaded Style Sheets)
* Precedence : Inline Style > External & Internal > Browser
* [CSS Font Awesome Icons](https://fontawesome.com/v5.15/icons?d=gallery&p=2&m=free)

## Bootstrap(CSS Library)
* Bootstrap defined classes can be used to have default features

## JQuery
* Lightweight Javascript Library
* Multiple features for any task(HTML/DOM Manipulation, CSS Manipulation, HTML Event Methods, Effects & Animation, AJAX, Utilities, etc)
* Syntax : $(selector).action() [$: Signifies JQuery, selector: Finds HTML element, action: Action performed on elements, ready event: To wait for full load of document and then initiate action]

## Mock JSON API Creation
* https://mocki.io/fake-json-api

## Validation of JSON 
* https://jsonlint.com/

## References
* [Advanced Javascript 2021 by Andrei Neagoie](https://www.udemy.com/course/advanced-javascript-concepts/)
* [My React.js Notes](https://github.com/anupama-sinha/anupama-notes/blob/master/react-js.md)
* [My Standalone HTML, Javascript Sample Code](https://github.com/anupama-sinha/reactjs-redux-project/blob/master/src/components/BasicComponent.html)
* https://javascript.info/
* https://getbootstrap.com/docs/5.0/getting-started/introduction/
* [Free SVG Icons](https://www.flaticon.com/free-icon/)
* [Free Font Awesome Website for Icons](https://fontawesome.com/v5.15/icons?m=free)
* https://github.com/iamvickyav/stud-to-software-developer/blob/master/batch_1/ui-notes/ui-session-notes.md
* https://www.w3schools.com/css/default.asp
* https://www.w3schools.com/bootstrap4/
* https://www.w3schools.com/jquery/default.asp