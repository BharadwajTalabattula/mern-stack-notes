``` javascript

function isObject(a){
    if(!Array.isArray(a) && typeof(a) != null && typeof(a) == object )
        return true;
    return false;
}
isObject();


let a= 5;

while( a++ < 6){
    a++;
    ++a;
}
console.log(a) //9

console.log(x);
var x = 10;
console.log(x);
x= 20;

if(true){
    console.log(x);
    let x = 30;
    console.log(x);
}

console.log(x);

```

# for in: (works for both array & object)

for ( let i in arr){
    console.log(arr[i]);
}

# for of; (works for only array)

for( let ele in arr){
    console.log(ele);
}

5 x 5 pattern:

1 2 3 4 5
2       4
3       3
4       2
5 4 3 2 1

# ES6 Features:

* Template literals
* Arrow function 
* default perameters or optional perameters
* Rest operator
* Spread operator
* Destructuring
* modules
* let & const
* promises
* classes
* symbol
 
------------------------------------------------------------------------------------------------------------
Date: 23-Oct-25

# Array methods

## push method
* it will add the element in the array and the reference variable returns the length;

Ex:
```javascript

let a = [50, 60, 70];
let arr = [10, 20 , 30];

let res = arr.push(40, 41, 42 43);

console.log(arr); // [10, 20, 30 , 40 , 41, 42, 43]

console.log(a); // [50, 60, 70];

console.log(res);// 7
```

## Pop method

* it will remove the last element in from the array and return that value;

Ex:

```javascript
let a = [50, 60, 70];
let arr = [10, 20 , 30];

let res = arr.pop()

console.log(arr); // [10, 20]

console.log(a); // [50, 60, 70];

console.log(res);// 30
```

## unshift method
* it add the elements in the starting of an array, and the reference varibale will return length of the updated array;

```javascript
let a = [10, 20, 30];
let arr = [50, 60, 70];

let res = arr.unshift(40, 41, 42);

console.log(arr); // 40, 41, 42, 50, 60, 70
console.log(res); // 6
```
## shift method
* it will remove the first element from the array and the reference varibale will return the removed value;

```javascript

let a = [10, 20, 30];
let arr = [50, 60, 70];

let res = arr.shift();

console.log(arr); // 60, 70
console.log(res); // 50

```
## indexOf method
* it will return the index of the first matched element; and it search from left to right;
* the second input specify the index from where the search should start;

```javascript
Ex:

let a = [20, 70, 50, 60, 30];

let res = a.indexOf(10);

console.log(res); // -1

Ex: 
let a = [10, 70, 50, 10, 30];

let res = a.indexOf(10, 2);

console.log(res); // 3
```

## last indexOf method

* it will return the index of the first matched element; and it search from right to left;
* the second input specify the index from where the search should start;

```javascript
Ex:

let a = [10, 70, 50, 10, 30];

let res = a.lastIndexOf(10);

console.log(res); // 4

Ex: 
let a = [10, 70, 50, 10, 30];

let res = a.lastIndexOf(10, 2);

console.log(res); // 0
```

## includes method

* inclued method is used to check whether the element is present or not;

let a= [10, 70, 50, 20, 30, 10];

let res = a.includes(20);

console.log(res); // true


# write the functions for all the array methods;

* include function;

``` javascript
let arr = [10, 70, 50, 20, 30, 10];
let ele = 20;

function include(arr, ele){
    for(let e in arr){
        if(e === ele)
        return true;
    
    }
    retun false;

}
include(arr, ele);

```
------------------------------------------------------------------------------------------------------------
Date: 24-Oct-2025

# Arrow function:
* when we are using arrow function and that function is having only one statement,and we are going to return the same statement; then curly brackets and return keyword not required;
* return keyword cannot be written outside curly brackets;

Ex: 
let add = (a, b) => a+b; // here add return a+b ✅

# forEach method:

* it is user to iterater an array from left to right;
* forEach method return nothing, so by default it will return undefined;
* forEach can give output of three arguments;
1. element
2. index
3. actual array
* for non-arrow function inside the forEach method no need of calling the call back function; just give the referenc of the function;


Ex: Arrow function

```javascript
let arr = [10,20, 30, 40, 50];

let res = arr.forEach((ele, i, a)=>{
    console.log(ele, i)
    if(i < 3){
        return;
    }
    console.log(ele, i)

})

console.log(res); // undefined

```
Ex: Non-arrow function

```javascript

let arr = [10,20, 30, 40, 50];

function main(ele, i, a){
    console.log(ele, i)
    if(i < 3){
        return;
    }
    console.log(ele, i)
}

let res = arr.forEach(main);

console.log(res);
```

# slice method:

* slice method take two input argument,( second one is optional);
* first argument specify the index of starting of the input array element; 
* second argument specify the end index + 1 of the input array element;
* slice method return the new update array after slice the input array;
* slice method is deep copy for premitive data type and shallow copy for non-premitive data tyep;

Ex:
```javascript

let arr = [10, 20, 30, 40, 50]

console.log(arr.slice(2, 4)); // [30, 40]
```


# splice method:
* splice method over writes the original array;
* splice method adds or remove an element from an arrar;
* splice method returns an array containing the removed element;
* the first argument specifies the index from where the new elements starts to remove or add;
* the second argument specifies number of elements to be removed;
* the third argument specifies the input element to be added to original array;


Ex:

``` Javascript

let arr = [10, 20, 30, 40, 50];
let res = arr.splice(2, 0, 23, 24, 25, 26);

console.log(arr); //[10, 20, 23, 24, 25, 26, 30, 40, 50]
console.log(res);// []


Ex:

let arr = [10, 20, 30, 40, 50];
let res = arr.splice(2, 2, 23, 24, 25, 26);

console.log(arr); //[10, 20, 23, 24, 25, 26, 50]
console.log(res);// [30, 40]


```

# deep copy vs shallow copy

let std = {
    id: 101,
    name: "abc",
    city: {
        add: 
    }

}

------------------------------------------------------------------------------------------------------------
Date: 25-Oct-2025

# find method:

* find method is used to find the element which satisfys the condition;
* when the call back function return true to find method, find method return first element from the array which satisfies the condition;
* when condition is not satisfied it will return undefined; 


Ex:
``` javascript

let std = [{n: 'a', age: 14}, {n: 'b', age: 17}, {n: 'c', age: 21}, {n: 'd', age: 24}, {n: 'e', age: 25}, ]

console.log(std.find((ele, i, a)=>{
    return ele.age >= 18;
})); //{n: 'c', age: 21}

```

# Filter method:

* the filter methord will return all the elements which satisfy the call back function condition.
* when no- element in the array satisfy the condtion, then filter method return empty array;
* the output will be the shallow copy output; for primitive and non-primitive data types;

EX:
```javascript

let std = [{n: 'a', age: 14}, {n: 'b', age: 17}, {n: 'c', age: 21}, {n: 'd', age: 24}, {n: 'e', age: 25} ]

console.log(std.filter((ele, i, a)=>{
    return ele.age >= 18;
})); //[{n: 'c', age: 21}, {n: 'd', age: 24}, {n: 'e', age: 25}]

console.log(std.filter((ele, i, a)=>{
    return ele.age >= 30;
})); //[]

```

# Map method:

* map method alway return an array, with same length as input array;
* when call back function return a value that value will be returned by map method inside an array;


EX:
```javascript
let arr = [5, 8, 10, 12]

let res = arr.map((e)=>{
    console.log(e) // 5, 8, 10, 12
})
console.log(res); // [ undefined,  undefined,  undefined,  undefined ] since in the callback function no return keyword is used, by default it returns 'undefined' ;

//------
let arr = [5, 8, 10, 12]

let res = arr.map((e)=>{
   if(e > 10)
   return e
})
console.log(res); //[undefined,  undefined, undefined,  12]

//------

let arr = [5, 8, 10, 12]

let res = arr.map((e)=>{
   return console.log(e) // 5, 8, 10, 12
})
console.log(res);// [ undefined,  undefined,  undefined,  undefined ] beacuse console.log() always return undefined

```

# diff btw find vs filter

## Find:
* find method return first element which satisfy the call back  function condition;
* find method retuns a value;

## Filter:
* filter method return all the elements which satisfy the call back function condition
* filter method return always an array


# diff btw forEach vs Map

## ForEach:
* forEach method always return undefined

## MAP
* map method always return an array, with same length as original array;
* map method return an array with elements value returned by the callback function;



# reduce method:
* it will always return single value
* it can accept two arguments, second argument is optional;
* one argument is call back function second one is inital value for accumulator;
* once the call back function return a value the accumlator value will be updated to the call back returned value;
* when inital  values is not defined then the inital value will be first element of the array, and the call back function will execute from second element;

EX:

```javascript
let arr = [10, 20 , 30 , 40]

let res = arr.reduce((acc, e, i, a)=>{
   return acc + e // 0+10--> 10, 10+20--> 30, 30+30--> 60, 60+40-->100
}, 0 ) // 0 is inital value of accumulator
console.log(res); // 100


let arr = [9, 7, 10, 5, 11, 6]
let res = arr.reduce((acc, e, i, a)=>{
  return e > acc? e : acc
} ) 
console.log(res);  // 11

```
------------------------------------------------------------------------------------------------------------
Date: 27-Oct-2025


