# Data types:

Date types refers what type of value or date which is stored into a variable; there are two types of data tyeps 

premitive(pre-defined) & Non-premitive(user defined) data type;

## Premitive:
1. Number
2. string 
3. boolean
4. Undefined
5. Null 
6. Big int 
7. symbol

## Non-premitive:
1. Objects
2. arrays
3. functions
4. class 
5. regular expressions

# typeof: it is a key word to check what type of data in a variable

let a = 10;
console.log(a, typeof(a)); // Number

## Number: 
* it is used to store either decimal or non-decimal values;

## string: 
* it is used to store a letter or group of letters; it can be represented by '',"", ``;

## Boolean: 
* it is used to store true or fales values;

## Undefined: 
* It is a datatype of a variable which is not initialized yet; 
* Undefined is the default value which is assigned by JS engine to the variable which is declared but not initialized;

## Null: 
* It is an empty value or intentional absense of the value or object value; datatype of null is object;

## Bigint: 
* It is used to store vary large number which cannot store or fit into a number data type, to represent bigint values we have to use lower case 'n';

EX:
```javascript
let m = 1234n;
console.log(m, typeof(m));


let maxValue = Number.MAX_SAFE_INTEGER;
console.log(maxValue, typeof(maxValue));

```
## Symbol: 
* It is used to create an unique identifier for an object; it is introduced in ECMA script 6 version.

---------------------------------------------------------------------------------------------------------
# operators: 

1. Arhtimetic oper
2. uniray operators


# Arthimetic operator:

+, *, -, /, %

it is divided into three types:
1. addition 
2. concatination
3. conversion

## concatination:
* Joining or combining two or more operants is known as concatination; 
* To perform concatination we have to use `+` operator;
* one operant must be string; concatinated output will be a string datatype; 
* to display one proper message we can use concatination;

over view:
 num + num = num
 str + num = str;
 num + str = str;
 str + str = str;
 null + undefined = NaN;
 str + null = str;
 str + undefined = str

# Template literal: 
* It is introduced in ECMA script 6 version; writing some static text with dynamic operations is known is TL;
* It is created using back ticks ``;

 Example:   
    let a = 5;
    let b = 8;
 console.log(`The sum of ${a} + ${b} is ${a+b}`);

-----------------------------------------------------------------------------------------------------------


# Type casting:
converting one data type to another data type; 

there are tow types:
1.Type conversion
2. Type coersion

## Type conversion: 
* convertiing one data type to another data type manually or explicitly;

Ex: constructor
* Number() : used to convert one data type to number data type;
* String() : used to convert one data type to string data type;
* Boolean() : used to convert one data type to boolen data type;

# falsy values:
* when converting one datatype to boolean data type, it returns false;
* there are 6 falsy values:
1. 0
2. false
3. ''
4. Undefined
5. null
6. NaN 

# Truthy values:
when converting one datatype to boolean data type, it returns true, apart from 6 falsy values every other values are truthy values;

## Type coersion:
converting one data type to another data type automatically or implicitly;

Ex:

``` javascript

//no value can be forced to convert to undefined;

let x;
console.log(typeof x); //undefined;

let y = 10 * 'abc' 
console.log(y); // NaN

let y = 10 / 'abc' 
console.log(y); // NaN

let res = Number('abc')
console.log(res)// NaN


//null --> it is not a common direct result of coercion into null from other types;



//string

'hi' + 2 = hi2; //string
10 + '2' = '102'; //string


//number

let x = '42';
console.log(x); //42 number DT
let y = 10 * '2' 
console.log(y) //20; number

let z = Number(null);
console.log(z); // 0 ; number data type


```
-----------------------------------------------------------------------------------------------------------

# Unary operator:

## post increment:
* post a++ 

* Perfrom first then increment in the same line.


## pre increment:
* pre ++a

* increment first then perform in the same line.

## post decrement:
* post a--

* Perfrom first then decerement in the same line.

## pre decrement:
* pre --a

* decrement first then perform in the same line.

condition statement and looping statement;
```javascript

let a = 10;

a = a + 10;
a += 10;

a = a - 2;
a -= 2;

a = a * 2;
a *= 2;

let a = 0;
a = a++; //--> [0-->1]
a = 0;
let b = 1;
b = ++b ; //--> [1-->2]
b = 2;

Example: 
//
let m = 0;
let n = 1;

m++;  // --> m =  0
n  = m + 2; //--> n = 3;
m = m++ +  m--; //--> m = 2 + 1 = 3;
n = ++n - m; //--> n = 4 - 3 = 1
console.log(m,n);// --> 3, 1 //

Example: 
//
let m = 2;
let x = 0;

m ++; //--> 3
 x = x++ + ++x; //--> 0 + 2
 c.log(m,x); //--> 3, 2

 m = ++m - m; //-->  4 - 4
c.log(m) // -->0

x = x++ + ++m - m; //--> 2 + 1 - 1
c.log(x) //--> 2

M ++ ; //--> 2
--x; //--> 1
c.log(m,x); //--> 2, 1 //


Ex: 

let m = 1;
let n = 0;
let x = m + n; //--> 1
m++; //--> 2
x = n++ + m--; //--> 0 + 2 = 2
n = m + n; //--> 1 + 1 = 2
x = m++ + ++n + m--; //-->  1 + 3 + 2 = 6
m = 0; //--> 0
c.log(m,n,x); //--> 0, 3, 6

Ex:

let x = 10;
let y = 1;
x++; //--> 11
++y; //--> 2
let z = x + y--;// --> 11 + 2 = 13
y = z-- + x++; //--> 13 + 11 = 24
y = y-x; //--> 24 - 12 = 12
c.log(x, y, z); //(12, 12, 12)


```

Ex:
```javascript
let a = 5;
let b = a++ + ++a + --a + a--; //---> 5 + 7 + 6 + 6
console.log(a, b);// 5, 24

let x = 2;
let y = (x++ * 2) + (++x * 3) - (--x); //--> 4 + 12 - 3
console.log(x, y); // ? (3, 13)


Ex:
function calc(val) {
  return val++ + ++val + --val; //--> 3+ 5 + 4
}

let result = calc(3);
console.log(result); // ? 12

let arr = [10, 20, 30, 40];
let i = 0;
let res = arr[i++] + arr[++i] + arr[i--] + arr[--i]; //--> 0 + 2 + 2 + 0
console.log(res); // ? 10 + 30 + 30 + 10 = 80


let total = 0;
for (let i = 0; i < 3; i++) { //-->  0, 1, 2
  for (let j = 2; j >= 0; j--) { //--> 2, 1, 0
    total += i++ + --j; 
     
  }
}
console.log(total); // ?


let n = 3;
if (n++ === 3 && ++n === 5) { 
  console.log("Yes", n); //--> yes, 5
} else {
  console.log("No", n);
}

let k = 4;
let res = (k++ + k-- * ++k) - (--k + k++); //--> (4 + 5 * 5) - ( 4 + 4 )
console.log(k, res); // ? (5,  21)

function tricky(n) {
  if (n <= 0) return 0;
  return n + tricky(--n); //--> 10;
}

console.log(tricky(4)); // ?
```
----------------------------------------------------------------------------------------------------------

# Relational operators: 
* It is used to compair two values, relational operators return boolean values;

* >
* >=
* <
* <=
* == --> normal comparison: only value shall me same;
* !=
* === --> strict comparison: value and data type also shall be same;
* !==

Ex: 

let a = 10;
let b = 5;

a > b = true
a < b = false
a <= b = false
a >= b = true
a == b = false
a != b = true
a === b = false
a !== b = true

console.log(a <= b > 10) --> true > 10 --> 1 > 10 --> false


# Logical operators:

they are three types of operators
* && --> AND
* || --> OR
* !  --> NOT

# Logical opertions:

        AND  OR
T   T    T   T
T   F    F   T
F   T    F   T
F   F    F   F

```javascript
let a = 1;
let b = 10;

console.log( a < b && a > 0); --> true

c.log(a > b || 'Hi') --> Hi
false || 'Hi'--> hi
true || 'Hi' --> Hi
'Hi' || null --> Hi
0 || null --> null

false && 'Hi'--> false
true && 'Hi' --> Hi
'Hi' && null --> null
0 && null --> 0

"Hi" && 3 && "hello" && null && 30 && 0; --> null

let a = 0;
let b = 1;

console.log( a==0 && b++ > 0)--> true;
console.log(a, b) --> (0, 2);

let a = 1;
let b = 1;

console.log(a++ > 1 && b++ == 1) --> f && f --> false
console.log(a, b) -->(1, 1)

console.log("Hi" && 2)
```
-----------------------------------------------------------------------------------------------------------

# Condition statement:

if, else, ifelse;

let n1 = 6;

if(n1%6 ==0){
  console.log('n1 is even')
  n1++;
}
n1++;
console.log(n1) --> 8 


# switch statement:

# Loops

# for loop:

syntax: for(initiali; condition; updation){

}

 init --> condition --> true? --> Statement --> updation --> init
 init --> condition --> false? --> updation --> init


# while:

while(condition){

}

# do while:

do{

}while(condition)

# for in: (works for both array & object)

for ( let i in arr){
    console.log(arr[i]);
}

# for of; (works for only array)

for( let ele of arr){
    console.log(ele);
}

-----------------------------------------------------------------------------------------------------------
# Functions:

* It is a set of statements, function is used to perform specific task, in java script we can create function 
in three ways:

* Function declaration
* Function expressions
* Arrow function

# Function declaration :
creating a function with function key word, followed by function name; is known as function declaration;

Ex:  
```javascript
function main(){
    console.log('main starts')
    console.log('main ends')
  }
  main()
```

# Function expression: 
Creating a function, and assigned to a variable, is known as function expression;

Ex:
```javascript
 let m1;
  m1 = function(){
    console.log("m1 starts")
    console.log("m1 ends");

  }
  m1();
```

* Function declartion is a block, function expression is a statement; since function decalrtion is a block
of code we should not end with semi-colen; but function expression is a statement so we must use semicolen

* Function declaration can be used before its creation, function expression cannot be used before its initialization


# Return statement:
* It is used to returns the control to its calling function.
* return statement must be used inside function
* if you are not returning value , then writing return statement is optional.
* if we are returning any value explicitly then return value is needed.

Note: while creating functions in Java script we should not use return types

  function main(): void
  {
    -----------
    -----------
    return;
  }

--> Not Allowed ❌;


# Unreachable statements:
the statements which will never exicute through out the program is called as unreachable statement;

Ex:

for( let i=0; i<10; i++){
  ----------------
  ----------------

  if(true){

    --------------
    --------------

    break; // unreachable after this
  }
  else{

    -------------
    -------------
  }
}

# Difference between return & break:

* break is used to break the current loop;
* return is used to retun the cursor to function.
* break keyword can be used anywere but return keyword must be used with in the function.

-----------------------------------------------------------------------------------------------------------

# Functions with parameters:

they are two types of parameters

1. Functional parameters (perameters)
2. Actual parameters(arguments)

## formal parameters (perameters)
* The parameters which we create at function declaration is known as `formal parameters`;

## Actual parameters(arguments)
* The parameters which we pass at function call is known as `actual parameters`;
* actual parameters are also known as arguments;

Syntax:

function sum(m1, m2){ --> formal parameters
  -------------
  -------------
  -------------
}
sum(10, 2) --> actual parameters

Ex: 
```javascript
main();
function main(){
  let i = 0;
  let j = 0;

  j = m1(++i)+m1(i++); -->m1(1) + m1(1) --> 1 + 1 = 2
  console.log(i,j); --> (2, 2)
}

function m1(n)
{
  return(n++);
}
```
-----------------------------------------------------------------------------------------------------------
# Callback function:

* A function which is passed as arugument to another function is called call back function;

# Higher order function:

* A function which is returning, another function is known as higher order function;

Ex:
``` javascript
function main (a, b){

  return sum(a, b);

}

main(10, 20)

function sum (a, b){

 console.log(a+b);

}

```

# first-class function: 
* In javascript, a first class function refers to the concept of where functions are treated as first-class citizens;
* function can be assigned as a value to a variable.
* Functions can be passed as argument to another function.
* function can be returned from another function;
* functions can be stored in array or objects;


# arrow function:

it is introducted in ES6 version, it is used to create anonymous functions in simple way, 
anonymous function means, a function without function keyword and a name.

Ex: let m2 =() =>{
  console.log("M2, starts");
  console.log("M2, ends");
}

m2();

# IIFE(Immediately Invoked Function Expression):
* It stands for immediately Invoked function expression; IIFE is a function which is defined and exceuted
immediately after its creation, IIFE is an pattern, which is used to create a privite scope of variables;

EX:

```javascript
(function (){
  console.log("Executing...");
})
();
```
-----------------------------------------------------------------------------------------------------------

# Javascript runtime environment:
* it is a ecosystem which enable js code to execute;

it has mainly 5 components inorder to execute the JS code;

1. Java script engine
2. Web Apis 
3. call back Queues
4. Microtask Queues
5. Event loop

* JS Engine is a software which is used to run JS code;

* Web Api's are used to provide extra functionalities  to javascript(Web Api's are belongs to browser)

* Callback Queue/macro task queue is used to store call back functions

* Microtask Queue is used to store high pripority callback functions;

* Event loops is used to push call back functions from call back queue and microtask queue to call stack for their execution.


Find out the image
![alt text](<../DOM/Images/image copy.png>)


## JS Engine (Left side)
#  Memory Heap
* Stores objects, functions, variables
* Long-lived memory
* Garbage-collected

# Call Stack

* Executes synchronous code
* Follows LIFO (Last In, First Out)
* Only one function executes at a time

Note:
* Nothing async runs while the Call Stack is busy

# Web / Browser APIs (Right side)

* These are NOT JavaScript — provided by the browser.

Includes:

`DOM API` → click, input, render
`Web Storage API` → localStorage, sessionStorage
`Timers` → setTimeout, setInterval
`Fetch / Network`
`Web Workers` → background threads

** Arrow labeled `“synchronous interaction”` 

Example: document.getElementById()
JS calls → Browser responds immediately

# Async call leaves JS Engine

Example:
setTimeout(cb, 2000);
fetch(url).then(cb);


** What happens:
* Call Stack registers async function
* Browser API takes over
* JS continues executing next lines

👉 JS does not wait


# Promise resolution vs Events (Important split)
From the diagram you can see two paths 👇

# Microtasks Queue (High Priority 🔥)

📌 Labeled in red: Microtasks (jobs) queue

Comes from:
Promise.then / catch / finally
async / await
queueMicrotask

Example:

# Promise.resolve().then(() => console.log("micro"));
📌 When promise is settled, its callback goes here.


# Tasks Queue (Macrotasks – Lower Priority)

📌 Labeled in yellow: Tasks queue

Comes from:
setTimeout
setInterval
DOM events
Message events

Example:
setTimeout(() => console.log("task"), 0);


# Event Loop (The Orchestrator 🎯)

* The Event Loop does ONLY ONE JOB:
“Can I push something into the Call Stack?”

# Order of execution:
Call Stack must be empty
Drain Microtasks queue completely
Take ONE task from Tasks queue
Execute it
Repeat forever
📌 This priority is the heart of async JS

Ex:
```jsx
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
```
# Execution timeline:

A → Call Stack
setTimeout → Web API
Promise.then → Microtasks queue
D → Call Stack
Call Stack empty
Event Loop → Microtasks first
prints C
Event Loop → Tasks
prints B



----------------------------------------------------------------------------------------------------------
# Object: 
* Object is a real world entity(entity can be living or non-living);
* Object is a collection of state and behaviour; 
* State represents the data; 
* Behaviour represents the functionalities;

Ex:
```javascript
let myDog ={
  // state
  name: "spot",
  breed: "Golden Retiver",
  age: 5,

  // behaviour
  bark: function(){
    console.log("woof! woof!...")
  }
}
```

In javaScript object can be created in two ways, 

1. Object literal
2. Object constructor

Ex:
```js
//object Literal
let obj1 = {};
console.log(obj1, typeof obj1);

//object constructor

let obj2 = new Object ()
console.log(obj2, typeof obj2);

In JavaScript object properties can be accessable in  two ways

1. Dot Notation
2. Bracket Notation

//Accessing Non-existing Props From an Object

let stuAge = s1.age;
console.log(stuAge);

stuAge = s1["age"];
console.log(stuAge);

```

# Difference btw dot & bracket Notation:

* If object properties are invalid identifiers, such properties can only be accessable with [ ] notation;
* Dot notation cannot use for variable values, dot notation mainly used only access static properties;
* Bracket notation can be used for variable values;

Ex:
```javascript
let s1 = {
  id: 101;
  firstName: Kiran;
  lastName: Kumar;
  "full Name": "Kiran Kumar";
  age: 22

};

console.log(s1);

let stuName = s1.["full Name"];
console.log(stuName);
```

----------------------------------------------------------------------------------------------------------
# Array:

* Array is the collection of index based elements;
* javascript arrays size is dynamic and  javascript arrays are hetrogenious in nature;(i.e any type of data type is accepted)
* Javascript is both reference type and value type
* for premitive data it is value type and for non premitive date it is reference type; 
* array can be created in two ways,

1. array literal
2. array constructor

array Literal:
EX:  let arr1 = []
        console.log(arr1, typeof arr1);

array constructor:
Ex:     let arr2 = new Array();
        console.log(arr2, typeof arr2);




Ex:
```javascript
 let n1 = 10;
        console.log(n1);

        let n2 = n1;
        console.log(n1);
        console.log(n2);

        n1= 20;
        console.log(n1, n2); // 20, 10
```
-----------------------------------------------------------------------------------------------------------

# Stack vs Heap Memory:


# Stack memory

* stack memory handles two major things

1. It is region of memory used to store primitive data type values;
2. It is used to manages the exectuion context of functions; data is added and removed in a specific order(LIFO); 

# storing premitive data types(value type execution):
                 Stack
identifier     Address       value
 n1             @A101         10
 n2 = n1        @A101         10 // n2 = still 10;
 n1             @A102         20 // n1 = 10 ❌; n1= 20 ✅

Ex:
let n1 = 10;
let n2 = n1;

console.log(n1);//10
console.log(n2); //10

n1 = 20;

console.log(n2); //10
console.log(n1);//20

# working of execution context based on LIFO:

* Stack memory demonistrate LIFO, the same way how stack memory works, it manages the exectuion context of functions, data is added and removed in a specific order; 

Explanation:

--step by step inside stack memory--
**step-1**
| Global Execution Context | --GEC is always fst present
**step-2**
| sum() Execution Context  | --LEC for sum() -r1
| Global Execution Context |
**step-3**
| Global Execution Context |
After sum() return res;, this context is popped off (removed) from the stack.
**step-4**
again function call
| sum() Execution Context  | --LEC for sum() for r2
| Global Execution Context |
**step-5**
| Global Execution Context |


``` javascript
var a = 10;
var b = 20;

function sum(n1, n2){
  var res = 0;
  res = n1 + n2;
  return res;
}

var r1 = sum(a,b);
var r2 = sum(b, r1); // If you don't use r1 in the second call; Both function calls will be independent.
                      //Each creates its own execution context.LIFO behavior is still demonstrated.But the example will be flat, to create dependencey for r2 on r1 (this works in sequency, to demonistrate stack execution better)

console.log(r1, r2);

```

# Heap Memory

* The heap is large, more dynamic(data can be created, resized, or deleted in any order) region and unstructured  area used to store non-primitive  values;

* It is unstructured(dynaic)(No LIFO);
* works for only non-primitive datatypes(no managing E.C /function context)

# storing non-premitive data types(reference type):
                 Heap
Identifiers        Address                           value
      s1            @A101           { sid: 101, sname: "Kiran, city: "Bengalore"}
      s2            @A101    <---------------------|

Ex:
``` javascript
 let s1 = {sid: 101, sname: "Kiran", city: "Bengalore"}
 console.log(s1);

 let s2 = s1;
 console.log(s2);

 s2.city = "Chennai";

 console.log(s1.city); // Chennai
 console.log(s2.city); // Chennai
```
-----------------------------------------------------------------------------------------------------------

# Reference type vs Value type:

* In Javascript data types are divied into two groups, based on how they are stored;

1. Reference type (Objects)
2. value type (primitive types)

# value type (inherently perfrom deep copy):
* value types store the actual data directly with in the variable;
* when a value type variable is assigned to another variable, a copy of the value is created;
* the changes made to new varibale will not affect original variable; 
* same also happening in stack memeory for premitive data types

Ex:
```javascript
let a =10;
let b = a;
b = 20;

console.log(a); //10 a remains same
console.log(b); //20

```
# Reference type (Shallow Copy by default, req sepecific tech for deep copy):
* Reference types store in the heap memory, and the variable holds a reference to where actual object resides;
* when a reference type is asigned to another variable, a copy of reference is created both variables then point to the same object;

```javascript
Ex:

main();
function main(){

  let arr = [1,2, 3, 4, 5];
  c.log(arr[2]);
  m1(arr);
  c.log(arr[2]);
}

function m1(n){
n[2] = 200;
for(let i =0; i< n.lenght; n++){
  c.log(n[i]); // 3 1 2 200 4 5 200;
}

}
```

let arr = [1,2,3,4,5];

arr has reference type @a101             create an object
at arr --> @A101                            1 2 3 4 5
at n[2] = 200 --> @A101                     1 2 200 4 5
at arr[3] --> @a101                         1 2 200 4 5


-----------------------------------------------------------------------------------------------------


Excetuion in V8 enginer/JS Engine ---> the Js is a programe; which is creatade using C++, java script...


# Global Execution context


Memoory create    code Exectution

Variable Object   
{
  a: Undefined      10
  b: Undefined      20
  sum: {
  ------
  ------
  }
  r1: Undefined     30 ------------------------------------------------> sum(10, 20)
  r2: Undefined     50 -----------> sum(20,30)                 Memory created       code Execution
}                          Memory cretate     code Executed    variableobject
                             variable Obj{ }                    {    }
                              arguments{                       argument{
                                                                    0:10
                                                                    1:20
                                                                      }
                                                               n1:Undefined             10
                                                               n2: Undefined            20
                                                               res: Undefined           30
                              }


-----------------------------------------------------------------------------------------------------------
Date: 04-OCT-2025 

--> Execution context is a container where javascript code memory gets create first, then code will be 
executed;

--> Execution context can be associated as an object; that object will always have 3 properties;

1. variable object (also know as varible environment)
2. scope Chain 
3. this Keyword


# Variable Object:

Variable object is a property of execution context where all the variables, functions and inner functions
declartions memory will be created.

Note: In javascript first memory will be created then code will be executed.

* if we create varibale with var keyword, then initial value is undefined;
* if we create the variable with let or const key words, then the initial value is not initialized or 
uninitialized.
* for function decalration initial value is actual function;
* for function expression and arrow function intial value depends on the keyword(var/let/const);

# Hoisting:

* Hoisting is a behaviour of javascript where variables and functions can be accessable before their declaration.
* Var variables are initialized with undefined during the hoisting phase;
* This will Allow us to acess var variables before their declaration, but its value will be undefined;
* Function declarations are hoisted so you can call function before its creation.
* let, const declations are also hoisted but they are not initialized;
* let and const variables are hoisted but enter into temporery dead zone;

# temprary dead zone: 

* It is a specific region with in a scope where variables are existed, but cannot be accable 
untill they are assigned with a value;

EX:
```javascript
C.log(a)
-------
------- // temporal dead zone
-------
let a;
a = 10;

// Example:

  var stuId = 101;
        let stuName = "Anil";

        function studentDetails(sid, sname){
            let instName = "Jspiders";
            var course = "MERN";
            const branch = "Marathalli";

            function printDetails(){
                console.log(`Student name ==> ${sname}, student Course ==> ${course}`);

            }
            printDetails()

            let greetings = function(){
                console.log(`Hi ${sname}, Welcome to ${instName}`);

            }
            greetings()

            var wishMsg=()=>{
                console.log(`Hey ${sname}, Congartulations 🍾`)
            }
            wishMsg();
        }
        studentDetails(stuId, stuName);

 ```

     Globale Execution context

      Memory created:            code Execution      

        variable Object{          
        stuId: undefined              101
        stuName: Not Initilized       anil
        studentDetails: {
         --- actual function ---
        }
        
        }


        student Details Execution context:

        memory created:

        argument: {
         0: 101
         1: anil
        }
        sid: undefined                     101
        sname: undefined                   Anil
        instName : not Initialized         jspider
        course: undefined                  MERN
        branch: not Initialized            Marathalli
        printDetails: {
        ----Actual function ----
        }

        greetings: Not Initialized        
        wishMsg: undefined                
        
        

# arguments Object:

it is a local varibale for non-arrow functions, arguments object contains all the values which we pass at
function call in the form of index.

arguments object is array like object, but it's not an array because; apart from length property no other 
properties can be used on arguments object.


Example:

```javascript

var stdId = 101;
let stuName = "Anil";

function student Details(sid, sname){
  console.log(arguments.length);
   console.log(arguments[0]);
 console.log(arguments[1]);
}

student Details(stdId, stuName)
```

-----------------------------------------------------------------------------------------------------------
Date: 07-Oct-2025 

# Function overloading:

* Creating multiple functions with same name with diffrent parameters is known as function overloading;

EX:
```javascript

function add(a, b){
  console.log(a + b); // if this also execute then this can come under stack memory
}

function add(a, b, c){      --------> //this function will be executed due to fun is
  console.log(a + b + c);           // non-prem data type which will be stored inside Heap memory
}

add(10, 12); // Nan
add(1, 2, 3); // 6

function add(a, b){
  console.log(a+b)
}

add(10, 2);
add(10.03, 12);
add(10.03, 12.2);
add(10, "Jsp");

```

# Just In Time (JIT)
it is a technique  in javascript employed by mordren Javascript engines to enhance the performance of code execution. it combines aspescts of both interpretation and traditional compilation.

Ex:

var a = 10;

* when a code is repeated to run continuously(Hot Code) then it will not process the code traditionally, instead 
the hot code or optimized code is sent to compiler.
 
Lexical analysis -->syntax Analysis(AST-abstract syntax tree)--->Interpretter----> byte code ---> Execution
                                                                     |  |                          |
                                                  (up)De optimization|  | Hot code(down)           | 
                                                                     |  |                          |
                                                                  compiler --->optimised metix code-->     


Example: Func accessing dynamic arguments
```javascript  

function add(){
  let sum = 0;
  
  for(let i = 0; i < arguments.length; i++){
    sum = sum + arguments[i];
  }
  console.log("sum = " +sum);
}

add(10, 2);
add(10, 12, 13);
add(1, 2, 3, 4);

```

# Rest Parameter:

* It is a feature in javaScript, which is introducted in ES6 version;
* Rest parameter allows a function to accept any number of arguments as an array;
* Rest parameter is represented by (...followed by parameter name)

styntax : ...ParameterName

```javascript
// Rest Parameter OR Rest Operator (ES6)

let add=(...n)=>{
  console.log(n);
}

add(10, 2);
add(10, 2, 3);
add(10, 2, 1, 12);


// Func accessing dynamic arguments using rest operator

let add=(...n)=>{
  let sum = 0;
  for(let i=0; i<n.length;i++){
    sum = sum+n[i];
  }
  console.log("sum = " +sum);
}

add(10, 2);
add(10, 2, 3);
add(10, 2, 1, 12);
```
-----------------------------------------------------------------------------------------------------------

Date: 08-Oct-2025 


# Spread operator: 

* Spread operator is introduced in ES6 version, it is used to expand an array or object into individual elements or properties;

* Spread operator is represented with three dots

Ex: 

```javascript

let r1 = Math.max(12, 3, 4, 5);
console.log(r1); // 12

let nums = [12, 3, 4, 5];

let r2 = Math.max(nums);
console.log(r2); //Nan

let r3 = Math.max(...nums);
console.log(r3); //12

```
# Deep Copy:

In Deep copy, if we do anychanges with cloned object reference then original object will
not be effected.

Working: 
Original s1[A@101] ----> A@101{id:,ename:, city:}            
clone s2[A@101] ----->A@102{id:,ename:, city:}

EX:

```javascript

let s1 = {id: 101, sname:"Kiran", city:"Bengalore"};
let s2 = {id: 101, sname:"Kiran", city:"Bengalore"};
let s3 = {...s1, sname: "naveen"}

console.log(s3);
```

# Shallow Copy:
it means if we do any changes in with cloned object reference, then changes gets effected in original object also.

Working: 
Original e1[A@101] ----> A@101{id:,ename:, city:}
                             |
clone e2[A@101] ------------>|

Ex: 
```javascript

let e1 = {id: 101, ename:"Kiran", city:"Bengalore"};
let e2 = e1;

console.log(e1, e2);
```

# Default values/optional perameters:

* Default values feature is introduced in ES6 version; 
* Default perameters concept allows us to provide some initial values to formal perameters


Ex: 

```javascript
function sum(a=0, b=0, c=0){
  console.log( a+b+c)
}
sum(10);
sum(10, 2);
sum(10, 2, 5);

```

# Scopes:

* Accesibility or visibility of a variable is known as scops;

There are three types of scops:

1. Global scope
2. Function scope/Local scope
3. Block scope

# Global scope:
The code which is not belongs to any function or block is known as top-level code;
Top level code has global scope;

# Function scope/Local scope:
* A variable or a function, which is inside to any function cannot be accessable outside of it;
* Variable are declared with var keyword inside a function cannot be accesable outside of it;

Ex:

```javascript
main()

fuction main(){
  var val = 10;
  console.log(val);//10
}

console.log(val)// error
```


# Block scope:
* blocks are creating scope from ES6 version, a variable which is created with 'let' or 'const' keywords
* In side a block those varibales cannot be accessable outside of the block; 
* for loop acts as block scop when declared with let or const;

EX:

//Before ES6

```javascript
if(true){
  var a =10;
  console.log(a); //10
}

console.log(a); //10

//After ES6

if(true){
  let n =10;
  console.log(n); //10
}

console.log(n); //error

```

# Var Keyword:-

 --> Var Keyword was instroduced in older versions of javascript;
 --> Var keyword variables can be hoisted with undefined
 --> var keyword variables are function scope
 --> var keyword variables can be re-declared as well as re-initialized


# let Keyword:-

 --> let Keyword was instroduced in ES6 versions of javascript;
 --> let keyword variables can be hoisted with uninitialized and they will be in TDZ;
 --> let keyword variables are block & func scoped
 --> let keyword variables cannot be re-declared, but can be re-initialized.


# const keyword:-

 --> const Keyword was instroduced in ES6 versions of javascript;
 --> const keyword variables can be hoisted with uninitialized and they will be in TDZ;
 --> const keyword variables are block & func scoped
 --> const keyword variables cannot be re-declared, as well as cannot be re-initialized.
 --> const keyword must be initialized at declaration.


-----------------------------------------------------------------------------------------------------------
Date: 10-Oct-2025 

# Lexical Environment:
* Lexical Environment in javaScript is an internal object, which will be created along with every Excetuion
context 

* Lexical Environment object referes to the `local memory` of current context and it's parent's Lexical
environment object reference;

* for block scope, JavaScript creates a new lexical environment when a variable is created inside with (let/const).

Ex:
```javascript
let n1 = 10;

function main(){
  let n2 = 20;

  function m1(){
    let n3 = 30;
    console.log(n3);
  }
  m1();
}
main();
```
Exectution:

            Child-2
| Env|  Memory  | condition |
|  l |          |           |
|  a |    n2    |           |
|  c |          |           | m1
|  i |          |           | ()
|  x |    m1()  |           | 
|  e |          |           |
|  L |          |           |
 
            Child-1
| Env|  Memory  | condition |
|  l |          |           |
|  a |    n2    |           |
|  c |          |           | M
|  i |          |           | a
|  x |    m1()  |           | i
|  e |          |           | n
|  L |          |           | ()

            Parent 
| Env|  Memory  | condition |
|  l |          |           |
|  a |     n1   |           |
|  c |          |           | G
|  i |   main() |           | E
|  x |          |           | C
|  e |          |           |
|  L |          |           |

-------- callback queue --------
___________________________________

# Closures:

* A closures is the combination of a function bundiled together, with references to it's lexical environment.

Or 

* Accessing a function variables even though fun execution is completed;


Ex: 

```javascript

let n1 = 10;

 function main(){ 
  let n2 = 20;

  function m1(){
    let n3 = 30;
    console.log(n2); // it can able to access n2 even from main even main is execution is completed
                     // when return is used, this is called closuers
    }                // how main execution is completed(E.C earised)? when return is used the main execution contect 
                    // is earised in call back queue, and for m1 new E.C is created, when retVal is called.
  return m1;

 }

 let retVal = main();
 console.log(retVal); // m1 function is printed
 retVal(); //m1 function is called;

```

# Lexical Scope:
*  Inner function can access the varibale of the parent function is known as lexical scope.


# Scope chain:
* whenever we use a variable then JavaScript will search for that variable in current scope,if it's not found then it will look into outer scope and this process continuous until global scope.


# block scope vs function scope
* Function scopes always create a new Execution Context (EC), 
* while Block scopes (with let/const) create a new Lexical Environment within an existing EC,
* not a full new Execution Context on the call stack


# this keyword:

* this keyword is a property of every execution context.
* this keyword value creates based on execution context at runtime.
* In Method call, this keyword refers to current object.(current object means the function is called for which obj reference).

Ex: 
```javascript
let s1 = { 
  id:101,
  sname: "kiran",
  birthyear: 2000,
  calcAge: function(){
    console.log("Calc Age");
    console.log(this); //s1
    console.log(this.sname); //kiran
  }
}
console.log(s1.id, s1.sname, s1.birthyear, s1.calcAge);
console.log(s1);
s1.calcAge(); //Methord call
```
--->Method call vs function call vs arrow function call<----

----------------------------------------------------------------------------------------------------------
Date: 11-Oct-2025

# this keyword inside a Function vs G.E.C vs Arrow fun

 -------------------------------------------------------------------------
|              SCENARIO             |Normal mode (this)| Strict mode(this)|
| --------------------------------- | ---------------- | ---------------- |
| Global Execution Context (GEC)    | window           | window           |
| Regular function call (func())    | window           | undefined        |
| Arrow function (global)           | window           | window           |
| Regular function as object method | obj              | obj              |
| Arrow function as object method   | window           | window           |
| Arrow inside regular method in Obj| obj              | obj              |
 -------------------------------------------------------------------------


# G.E.C:
* In G.E.C `this` refers to global object (window obj)

# function declar & expression  – this
* In function declaration & expression `this` referes to window obj; (but undefined in strict mode).

Ex:

``` javascript
function main(){
  c.log(this); // window obj
}

main();
```

* If a function declaration & expression is called as a method of an object; this refers to that obj;

Ex:
```javascript

let s1  = {
  id: 101,
  sname: 'kiran',
  greet: function(){
    c.log(this); // s1{} 
  }
}

```

##  Arrow Function – this

* Arrow functions do NOT have their own this.
* They lexically inherit this from their parent scope.
Meaning: this inside an arrow function = this of the surrounding function/block.

```javascript
let s1 = {
  name: 'kiran',
  greet: ()=>{
    c.log(this);// window (GEC this → window)
  }
}

s1.greet()
```


```javascript
let s1 = {
  name: 'kiran',
  intro: function () {
    let greet = () => {
      console.log(this); // s1 object
    };
    greet();
  }
};

s1.intro();

```
* intro() is a normal function
* Normal method → this = calling object (s1)
* Arrow function inherits this from intro


# this in Global Execution Context (GEC) (Normal vs Strict)

* In G.E.C `this` keyword refer to window obj both in strict and normal mode;

| Mode   | `this` in GEC |
| ------ | ------------- |
| Normal | `window`      |
| Strict | `window`      |

``` javascript
Ex:

"use strict"
let n1 = 10;
let n2 = 20;
console.log(this); //window

```
# function declaration & expression (strict vs normal)

* For fun declar & expression function call
* JS assigns this → global object
* In strict mode, JS does not auto-bind this, So this stays undefined


# Case 1: Normal mode

``` javascript
Ex:

function main(){
  console.log(this); // window obj
}
main();
```
Reson:
* Regular function call
* JS assigns this → global object

# Case 2: Strict mode
``` javascript
Ex:
"use strict"
function main(){
  console.log(this); // undefined
}
main();
```
Reason:
* In strict mode
* JS does not auto-bind this
* So this stays undefined

# Case 3: declar & expression func as obj method
Ex:
```javascript

let s1  = {
  id: 101,
  sname: 'kiran',
  greet: function(){
    c.log(this); // s1{} in normal & strict mode
  }
}
```

Reason:
* Method call
* this → object before the dot
* Works same in normal & strict mode

# arrow function (Normal vs strict)

* Arrow functions are unaffected by strict mode
* They always use `parent scope this`


# Case 1: Arrow func in normal mode

``` javascript
Ex:

let main = ()=>{
  console.log(this); // window
}
main();
```
# Case 2: Arrow func in strict mode

Ex:
``` javascript

"use strict"
let main = ()=>{
  console.log(this); // window obj
}
main();
```
# Case 3: Arrow function inside object method (best use case)
```javascript

let s1  = {
  id: 101,
  sname: 'kiran',
  greet: function(){
    let intro = ()=>{
   c.log(this); // s1{}  refers to parent obj in both methods
    }
    intro();
  }
}
s1.greet();
```

# Function constructor:
* Object is created using function 
* Function construct is a blue print in javascript, by using function constructor we can create multiple objects
* to create function constructor we should use non-arrow functions 

Note: we should not use arrow-functions to create a function constructor because arrow function doesn't have it's own this keyword value.

* when we call a function with `new` keyword internally three things will happen

1. An empty object will be created
2. this keyword will referes to newly created empty object;
3. In constructor function we cannot write return statement because it returns automatically newly created object

 
``` javascript

function sum (){
  console.log("sum is executing..");
  console.log(this); 
  return 10; /// we can't return any primitive value, primitve values will be ignored

}

let s1 = new sum();
console.log(s1);

function sum (){
  console.log("sum is executing..");
  console.log(this); 
  return {a: 1}; /// then it will return the this obj(a:1)

}
```
-----------------------------------------------------------------------------------------------------------
Date: 12-Oct-2025
# Application of F/N constructor

``` javascript

function Student(){
  console.log(this); //empty obj
  console.log("Student F/N is executing...");
  return this;
}

let s1 = new student();
s1.sid = 101;
s1.sname = "Kiran";
console.log(s1); // {sid: 101, sname: 'kiran'}
-----------------------
function Student(){
  this.sid=101;
  this.sname = "Kiran";
}
new Student(); // student:{sid:101, sname:Kiran}
new Student(); // student:{sid:101, sname:Kiran}
new Student(); // student:{sid:101, sname:Kiran}
new Student(); // student:{sid:101, sname:Kiran}

--------------------
Dynamicly assigning values to the student object

function Student(id, name){
  this.sid = id;
  this.sname = name;
  console.log(this);
}

let s1 = new Student(101, "kiran");
new Student (102, "Anil");
new Student(102, "Naveen");
```
---------------------
# Instance
* In JavaScript, an instance refers to an individual object created from blueprint,typically a class or function constructor;

``` javascript

function Student(id, name, year){
  this.sid = id;
  this.sname = name;
  this.birthYear = year;
  this.calcAge = function(){
    let age = 2025 - this.birthyear;
    console.log("Age ="+age);
  }
}

let s1 = new Student(101, "Kiran", 2000);
console.log(s1)
s1.calcAge();

let s2 = new Student(102, "Naveen", 1997);
console.log(s2);
s2.calcAge();

let e1 = {eid :101,ename = "Dhruva"};

console.log(s1 instanceof Student); //true
console.log(s2 instanceof Student); //true
console.log(e1 instanceof Student); //false (e1 is not instance of Student function constructor)
console.log(s1 instanceof Object);  //true
console.log(e1 instanceof Object);  //true (e1 is object instance)

``` 

# JavaScript prototypes:

* Prototype is a property which is attached with every function constructor  object in javascript;
* In javaScript we perform inheritance by using prototype property;

# Inheritance:
* Inheritance means acquring properties from one object to another object; 

# what is prototypal inheritance?
* Acquring properties from prototype object to instanciated objects(let s1, let s2);


``` javascript
function Student(id, name, year){
  this.sid = id;
  this.sname = name;
  this.birthYear = year;
  
}

let s1 = new Student(101, "Kiran", 2000);
Student.prototype.calcAge= function (){
  let age = 2025-this.bithyear;
  console.log(age);
}
s1.calcAge();

console.log(student.prototype);

let s1 = new Student(101, "Naveen", 2000);
console.log(s1);
console.log(s1.city);
s1.calcAge;

let s2 = new Student(101, "Anil", 1997);
console.log(s1);
console.log(s1.city);
s2.calcAge;

```
# Prototypal chain:

* The prototypal chain in JavaScript is a mechanism for inheritance, allowing objects to inherit properties and methods from other objects.



-----------------------------------------------------------------------------------------------------------
Date:14-Oct-2025

# Inheritance between function constructor:

* 

# call Method:

* call method is used to set this keyword value explictly by passing object reference as an argument;
* In call method functional objects are passed directly;

Syntax:
F/Nref.call(arg1, arg2, arg3...)

arg1--> this keyword value
arg2,3,4..-->  functional arguments

Ex:
```javascript

let s1 = {id: 101, name:'kiran', city:'bengalore'};

function calcAge(YOB, CY){
  console.log(`${name} is born in ${city} in the year ${YOB}`)
}

calcAge.call(s1, 1997, 2025); // kiran is born in bengalore in the year 1997;

```

``` javascript


Step-2:

function Person (id, name, birthYear){    
  this.id = id;
  this.name = name;
  this.birthyear = birthyear;
}


function Employee (id, name , birthyear, sal, desg)
{
  Person.call(this, id, name, birthyear);
  this.sal = sal;
  this.desg = desg;
}
```

# apply Method:

* apply method is also used to set this keyword value explictly by passing object reference as an argument;
* In apply method functional objects are passed as an array;

Syntax:
F/Nref.call(arg1, [arg2, arg3...])

arg1--> this keyword value
[arg2, arg3...]-->  functional arguments



Example:

``` javascript
let s1 = {id: 101, name: 'kiran', city: 'bengalore'};

function calcAge(YOB, CY){
 console.log(`${name} is born in ${city} in the year ${YOB}`);
}

calcAge.apply(s1, [1997, 2025]); // kiran is born in bengalore in the year 1997;

```



# bind method:

* bind method is also used to set this keyword value explictly by passing object reference as an argument;
* bind method returns a copy of function instread of calling that function immediatly that returned function can be called again and again.

Syntax:
F/Nref.bind(arg1, arg2, arg3..);

Example:
let refFn = calcAge.bind(s1, 2, 4);
console.log(refFn);// printing function
refFn();// s1 object;


# Application of bind method:

``` javascript
let e1= new Employee(101, "Kiran", 2000, 30000, "dev");
console.log(e1); // Employee{ id: 101, name: "Kiran", birthyear: 2000 , sal: 30000 , desg: "dev"}
//Person function constructor reference object is Employee, this is done explictly using `call` method.

let m1 = {id:1, mName: "Kantara"};
let m2 = {id:2, mName: "War2"};

function bookTicket(name, seatNo)
{
  console.log(`Hey ${name}, you Have Booked the ticket from ${this.mName} Movie with Seat Number ${seatNo}`);
}
let retFn1 = bookTicket .bind(m1, "Kiran");
retFu1("A12");
retFun2("A13");

```


``` javascript

let s1 = {id: 101, name: 'kiran', city: 'bengalore'};

function greet(greeting, city){
  console.log(`${name} is born in ${city}- ${greeting} to ${city}`)
}

let retFun = greet.bind(s1, "welcome");

retFun('Pune'); // kiran is born in bengalore - welcome to pune;

```

-----------------------------------------------------------------------------------------------------------
# polymorphism:

* It means one entity has difference behaviours (+ operator, sum(10, 20), sum(10, "jsp"));

# ABstraction:
* The process of hiding the complex implementations and providing only the required functionalities to the user is known as abstraction;

* In functional programming abstraction is performed with call back functions;

Ex:
Calc(10, 20, sum);

``` javascript

function sum (a, b){
return a+b;
}

function calc(a, b, operation){
  let res = operation(a, b);

  console.log(res); // 30
}

calc(10, 20, sum); 

```

# Encapsulation:

* Binding or wraping the data into single unit is known as encapsulation;
* The advantage of encapsulation is the data is not allowed to access directly by the outsiders;

Ex:
``` javascript
let e1 = {
  id: 101,
  ename: "Kiran",
  getEname: function(){
    return this.ename
  }
  setEname: function(val){
    this.ename = val
    return this.ename;
  }
}

let retVal = e1.getEname();
console.log(retVal) // kiran

let setVal = e1.setEname("Naveen");
console.log(setVal); // Naveen
```
-----------------------------------------------------------------------------------------------------------
Date: 18-Oct-2025;

# De-structuring:
* It was introduced in ES6 version, De-structuring is a way of un-packing the values from an object or an array into seperate variables;
* Object  de-structuring must be done with {} brackets;
* Array de-structuring must be done with [] brackets;
* while performing object de-structuring the varible names must be same as object keys;
* while performing array de-structuring the variable names can be any identifier;

Ex:
``` javascript
function main (){
  let a =10;
  let b = 20;
  let sum = a + b;
  let mul = a * b;

  return[sum, mul];
}

let [n1, n2] = main();
console.log(n1, n2);
```

-------------------------------------------------------------------------------------------------------
Date: 18-Nov-2025

# classes:

* classes is introducted in ES6 version 
* classes are blue print which is used to create multiple objects;
* In javascript class can be created in two ways 

1. Class Decalration
2. Class Expression

* classes are `syntactic sugar` of function constructors 

Ex:

```javascript
// class decalration

class Employee
{
  constructor()
  {
    console.log('constructor Func');
    console.log(this);
  }
}

new Employee(); // constructor Func; {}

// class expression

let student = class
{
  constructor()
  {
    console.log('constructor Func');
    console.log(this);
  }
}

new student(); // constructor Func; {}

```

* they are two types of methods in class base programming
1. static method 
2. non-static method

# static method 
* static method is created using static keyword
* static method is called using class reference


# non-static method
* non-static method is created not using static keyword
* non-static method is called using object reference

Ex:

```javascript

class A
{
  static main(){
    console.log('static metod is exicuting...');
  }

  m1()
  {
    console.log('non-static metod is exicuting...');
  }
}

//static method calling
A.main(); //static metod is exicuting...

//non-static method calling
let a1 = new A();
a1.m1(); //non-static metod is exicuting...
```

# Types of variables

* In class based programming they are three types of variables:

1. Local varibale
2. static variable
3. non-static variable




# Local variable:
* A varibale which is created inside any method using let, const, var keyword is known as local variable;
* Local variables cannot be accessable outside the method.

```javascript

class B
{
  static n1 = 10; // static variable
  n2 = 20; // non-static variable

  static main(){
    let a = 10; // local variable
    console.log(a); // 10

    console.log(B.n1); // 20

    let b1 = new B();
    console.log(b1.n2); // 30
  }
}

B.main();
```

Ex:
```javascript
class C
{
  static n1 = 0; 
  n2 = 0; 

  static main(){
    let c1  = new C();
    console.log(c1.n2); //undefined
    console.log(c1.n2); // 0
  }
}

C.main();
```

# static variable:
* A variable which is created inside the class and outside the method with static keyword is known as static variable;
* Static variables are referred with class name;
* for static variables only one copy of the memory will be created;

Ex:

```javascript

//static varibale only one memory copy obj is created
class D
{
  static a = 0; 

  static main(){
    console.log(D.a); // 0
    D.a = 10;
    console.log(D.a); //10
  }
}

D.main();

```


# static variable:
* A variable which is created inside the class and outside the method with static keyword is known as static variable;
* Static variables are referred with class name;
* for static variables only one copy of the memory will be created;

Ex:

```javascript
// for non-static variables a new memory copy will be created for every object creation

class E
{
  static a = 0; 

  static main(){
   let e1 =  new E();
   console.log(e1.a); //0
   e1.a = 10;
   console.log(e1.a); //10

    let e2 =  new E();
   console.log(e2.a); //0
  }
}

E.main();
```
------------------------------------------------------------------------------------------------------------
Date: 19-Nov-2025

Note: 
* JS classes are not hoisted, which means, we cannot create objects before class creation;
* JS classes executes in strict mode;

Ex:
``` javascript
new A(); // error

class A
{

}


new A(); // error
---------------------
Ex:

class A
{
  static main()
  {
    console.log('main starts..');
    n = 10; // not used any keyoword so error 
    console.log(n);
    console.log('main ends..');
  }

}
A.main();

```

# static vs non-static variables application:

* we use static when we need to store the common information which is share among all the objects;
* we use non-static to store specific object infromation

Ex:
```javascript

 class student
 {
  sid = 0;
  sname = null;
  static count = 0;
  static inst = 'JSpiders';

  static getCount()
  {
    return student.count;
  }
  printDetails()
  {
    console.log(`student Name is ${this.sname}`);
  }

 }


 class test
 {

  static main()
  {
    let s1 = new student()
    s1.sid = 101;
    s1.sname = 'kiran';
    student.count++;
    s1.printDetails();
    console.log(`student Count is ${student.getCount()}`);

    let s2 = new student()
    s2.sid = 102;
    s2.sname = 'naveen';
    student.count++;
    s2.printDetails();
    console.log(`student Count is ${student.getCount()}`);
  }


 }
test.main();
```

# Constructor:

* constructor is a set of statements which will be executed when an object is created;
* constructor code will be exicuted only once for an object;
* they are two types of constructor

1. default constructor(no args constructor)
2. parameterized constructor

Ex: default constructor

``` javascript
class B
{
  constructor()
  {
    console.log(`Default ctt is running`); // Default ctt is running // Default ctt is running
  }
}

new B();
new B();
```


Ex: Parameterized constructor

``` javascript
class c
{
  constructor(n1, n2)
  {
    console.log(`Default ctt is running`); // Default ctt is running // Default ctt is running
    console.log(n1, n2); // 1,2 // undefined, undefined
  }
}

new c(1, 2);
new c();
```


# constructor overloading:

* creating multiple constructors in same class with different parameters is known as constructor overloading;

Note:
*  we cannot perform constructor overloading in javascrip because we cannot create more than one constructor in a class;

Ex:
``` javascript

class D
{
  constructor ()
  {
    console.log("Default ctt is running"); //error
  }
  constructor (name)
  {
    console.log("Parameterized ctt is running"); // error
  }
}
new D();
new D('Kiran');

```

# uses of constructor

Ex:
```javascript

 class student
 {
  sid = 0;
  sname = null;
  static count = 0;
  static inst = 'JSpiders';

  constructor()
  {
   student.count++;// executed whenever  new object is created
  }

  static getCount()
  {
    return student.count;
  }
  printDetails()
  {
    console.log(`student Name is ${this.sname}`);
  }

 }


 class test
 {

  static main()
  {
    let s1 = new student()
    s1.sid = 101;
    s1.sname = 'kiran';
    s1.printDetails();
    console.log(`student Count is ${student.getCount()}`);

    let s2 = new student()
    s2.sid = 102;
    s2.sname = 'naveen';
 
    s2.printDetails();
    console.log(`student Count is ${student.getCount()}`);
  }


 }
test.main();
```
-----------------------------------------------------------------------------------------------------------
Date: 20-Nov-2025

* constructor is used to initialize object properties;


Ex:

```javascript

class Student
{
  constructor (sid, sname, age){
    console.log("Constructor exicuting...");
    this.sid = sid;
    this.sname = sname;
    this.age = age;
  }
}


class test1
{
  static main()
  {
    let s1 = new Student(101, 'kiran', 25);
    console.log(s1);

  }
}

```


* when we created non-static methods those are attached to protype method
```javascript

class Student
{
  constructor (sid, sname, age){
    console.log("Constructor exicuting...");
    this.sid = sid;
    this.sname = sname;
    this.age = age;
  }

  calcAge()
  {
    console.log("Age Fn is Running....");
  }
}


class test1
{
  static main()
  {
    let s1 = new Student(101, 'kiran', 25);
    console.log(s1);
     s1.calcAge();

  }
}
```

# Inheritance

* Acquiring properties from one object to another object;
* In class based programming we use `extends` key word to perform inheritance;


Ex:

```javascript

class BasicCalc
{
  sum(n1, n2)
  {
    console.log(`the sum of two number is ${n1 + n2}`);
  }

}

class AdvCalc extends BasicCalc
{
  mul (n1, n2)
  {
    console.log(`the mul of two number is ${n1 * n2}`);
  }
}

let a1 = new AdvCalc();

a1.sum(10, 2);
a1.mul(10, 2);

```

# types of inheritance

1. Single level
2. Multiple level
3. Hirarchical
4. Multiple
5. Hybrid

 
# single level
 class A
   m1{}
    |
    |
    |
 class B
  m2{}


# multilevel
 class A
   m1{}
    |
    |
    |
 class B
  m2{}
   |
   |
   |
 class C
  m3{}



# method overriding

* changing the parent class non-static method implimentation in  child class non-static method is known as method over-riding;

* to perform method overriding inheritence is compulsary;
* while performing over-riding method syntax must be same;


Ex:

```javascript

class Trainer
{
  teach()
  {
    console.log('Trainer teach subject');

  }
}


class Raveesh extends Trainer
{
  teach()
  {
    console.log('Raveesh teach java subject');

  }
}

class Kiran extends Trainer
{
  teach()
  {
    console.log('Kiran teach javascript subject');

  }
}

let k1 = new Kiran();
k1.teach();


```


# call to super:

* Call to super statement is used to call parent class constructor from child class constructor;
* Call to super statement must in the first line;
* call to super statement is used to perform constructor chaining;(call one constructor from another constructor is know as constructor chaining);

syntax:

super(); // it is a statement



Ex:

```javascript

class A
{
  constructor ()
  {
    console.log("Hello");
    console.log("Hi");
    console.log("Bye");

  }
}

class B extends A
{
  constructor ()
  {
    super();
    console.log("tata");
    console.log("good night");

  }

}

new B();

```

------------------------------------------------------------------------------------------------------------
Date: 21-Nov-2025

Ex:

```javascript

class Person
{
  constructor(id, name, birthyear)
  {
    this.id = id;
    this.name = name;
    this.birthyear = birthyear;
  }

}

class Employee  extends Person
{
  constructor(id, name, birthyear, desg, sal)
  {
    super(id, name, birthyear);
    this.desg = desg;
    this.sal = sal;
 
  }
}

class test
{
  static getDetails()
  {
   let t1 =  new Employee(101, 'kiran', 2000, 'web-dev', 20000);
   console.log(t1)
  }
}
test.getDetails();
```

# Example Polimorphism

* One entity is showing different behaviours is known as polymorphism
* Entity can be operator or function or object;
* Their is two  types of polymorphism

1. compiled time polymorphism
2. run time polymorphism

* In javascript we can perform only runtime polymorphism


# Abstraction

* the process of hiding the complex implementations and providing only required functionalities to the user is known as absttraction;




Ex:
```javascript
class Car
{
  start(){}
  acc(){}
  break(){}
}

class BMW extends Car
{
  start(){console.log('BMW starts')}
   acc(){console.log('BMW acc')}
  break(){console.log('BMW break')}
}

class BENZ extends Car
{
  start(){console.log('BENZ starts')}
   acc(){console.log('BENZ acc')}
  break(){console.log('BENZ break')}
}


class Drive  // abstraction
{
  static drive(car) // car is show diff behaviour ex for polymorphism
  {
    car.start();
    car.acc();
    car. break();
  }
}

class test  
{
  static main()
  {
    let b1 = new BMW();
    Driver.drive(b1);

    let b2 = new BENZ();
    Driver.drive(b2);
  }
}
test.main();
```

// diff between static and non-static

# Encapsulation

* Binding/Wraping data into single unit is known as encapsulation the advantage of encapsualtion is we cannot access one object data outside of the class;

Ex:

```javascript

class BankAccount
{
  #transactions = [];

  constructor(id, name, pw)
  {
    this.id = id;
    this.name = name;
    this.pw = pw;
  }

  deposit(amt)
  {
    this.#transactions.push(amt);
  }


}

let a1 = new BankAccount(101, 'Ashok', 'AA@!@#');
console.log(a1);

a1.deposit(1000);
a1.deposit(200);

console.log(a1.#transactions);

```



# Pure function vs impure function:
* the statement in the function does not effect the outside of the function is known as Pure function;
