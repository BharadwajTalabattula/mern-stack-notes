
/* 
let c = 0;
for (var i = 1; i<=3; i++){
    for(let j = 1; j<=3; j++){
        c++;
        if(j% 2 == 0){
            i++;
        }
    }
}

console.log(c);
console.log(i)
*/

// Prime number
// function isPrime(n){
//     if(n <= 1) return false;
//     for(let i =2; i<= Math.trunc(n/2 ); i++){
//         if(n%i == 0){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPrime(2));

// Perfect number

// function perfectNumber(n){

//     let sum = 0;

//     for(let i = 1; i< n; i++){
//         if(n % i == 0){

//             sum += i;

//         }
//     }
//     if( sum === n){
//         console.log('It is Perfect Number')
//     }else{
//         console.log('It is not Perfect Number')
//     }
// }

// perfectNumber(7)



// Sum of numbers

// function sumOfNumber(n){

//     let sum = 0;

//     while(n > 0){
//         let rem = Math.trunc(n % 10);
//         sum += rem;

//         n = Math.trunc( n / 10 );

//     }

//     console.log(sum);
// }

// sumOfNumber(1234)

// NEON number

// function neon(num){

//     let sqr = num * num;
//     let sum = 0;
//     let temp = sqr;

//     while(temp > 0){
//         let rem = Math.trunc(temp % 10)
//         sum += rem;

//         temp = Math.trunc(temp /10);
//     }

//     if( sum === num){
//         console.log('It is neon number');
//     }else{
//         console.log('It is not neon number');
//     }
// }

// neon(9)

/*
// Factorial

function factorial(num){
    let res = 1;
    for(let i = 1; i<= num; i++){
        res *= i;
    }

   return res;
}





// Strong

function isStrong(num){
    let sum = 0;
    let temp = num

    while(num){
        let rem = Math.trunc(num % 10);
        sum += factorial(rem);

        num  = Math.trunc(num/10);
    }

    if( sum === temp ) console.log('It is strong number');
    else console.log('It is not a strong number');


}

isStrong(143)

*/

/*
function power(base, pow) {

    let rem = 1

    for (let i = 1; i <= pow; i++) {
        rem = rem * base
    }

    return rem

}





function length(num) {
    let count = 0;
    while (num) {
        count++
        num = Math.trunc(num / 10);
    }

    return count;

}


// Amstrong number

function isAmstrong(num) {
    let sum = 0
    let temp = num;
    let count = length(num)
    while (num) {
        let rem = Math.trunc(num % 10)
        sum += power(rem, count)
        num = Math.trunc(num / 10)

    }

    if (sum === temp) console.log('It is Amstrong');
    else console.log('It is not Amstrong')
}

isAmstrong(153)


function isDisarium(num) {
    let sum = 0
    let temp = num;
    let count = length(num)
    while (num) {
        let rem = Math.trunc(num % 10)
        sum += power(rem, count)
        num = Math.trunc(num / 10)
        count = length(num)
    }

    if (sum === temp) console.log('It is Disarium');
    else console.log('It is not Disarium')
}

isDisarium(145)

*/

/*

function product(num){
    let res = 1;
  while(num){
    let rem = Math.trunc( num % 10)
    res *= rem;

    num = Math.trunc(num / 10);
  }

    return res

}




function sum(num){
    let sum = 0;
   while(num){
    let rem = Math.trunc( num % 10)
    sum += rem;

    num = Math.trunc(num / 10);
   }

    return sum

}


function speiNum(num){

    if(sum(num) === product(num)){
        console.log('it is spy number')
    
    }else{
        console.log('it is not spy number')
    }
}

speiNum(123)


// Fibnocci


function fibnocci(range){
    let a = 0;
    let b = 1;
    let res = 0;
    console.log(a)
    console.log(b)
    while( res < range){
        res = a + b;
       
        a = b;
        b = res;
        console.log(res)
     
    }

}

fibnocci(10)
*/

//---------------------------------------------------------------------------------------------------

// Date: 08-01-2026


// Automorphic

function automorphic(num) {

    let sqr = num * num;
    let i = 1
    let temp = num;

    while (temp) {

        i *= 10;
        temp = Math.trunc(temp / 10)
    }

    if (sqr % i === num) {
        console.log('It is automorphic number')
    } else {
        console.log("It is not automorphic number");
    }

}




// reverse


function reverse(num) {
    let temp = num;
    let res = 0;

    while (temp) {
        let rem = Math.trunc(temp % 10);
        res = (res * 10) + rem;
        temp = Math.trunc(temp / 10);
    }
    return res;

}



// Palindrom


function isPalindrom(num) {

    if (num === reverse(num)) return true;
    else return false;

}


// first three numbers
function isPalindromRange(s, e) {
    let c = 0;
    for (let i = s; i <= e; i++) {
        if (isPalindrom(i)) {
            c++;

            if (c <= 3) {
                console.log(`Palindrom Numbers : ${i}`)
            } else {
                break;
            }

        }
    }

}


// last three numbers
function isPalindromRange(s, e) {
    let c = 0;
    for (let i = e; i >= s; i--) {
        if (isPalindrom(i)) {
            c++;

            if (c <= 3) {
                console.log(`Palindrom Numbers : ${i}`)
            } else {
                break;
            }

        }
    }

}


// alternated palindrome numbers in a range

function alternatePalindrome(s, e) {

    let c = false;
    for (let i = s; i <= e; i++) {
        if (isPalindrom(i)) {
            if (c) {
                console.log(`Palindrom Numbers : ${i}`)
            }
        }
        c = !c;
    }

}





function decimalToBinary(num) {

    let temp = num;
    let res = 0;

    let i = 1;

    while (temp) {
        let rem = Math.trunc(temp % 2); //0, 1, 0, 1
        res = (rem * i) + res;
        temp = Math.trunc(temp / 2);
        i *= 10;
    }

    console.log(res);

}


// decimalToBinary(10);


function dToB(n) {
    let b = 0;
    let p = 1;
    while (n) {
        b = (n % 2) * p + b;
        n = Math.trunc(n / 2);
        p *= 10;
    }
    console.log(b);
}
//dToB(10)

function btoD(num) {

    let temp = num;
    let res = 0
    let i = 0;

    while (temp) {
        let rem = Math.trunc(temp % 10);
        res = res + rem * (Math.pow(2, i))
        temp = Math.trunc(temp / 10);
        i++;
    }

    console.log(res);

}

//btoD(1110);

//----------------------------------------------------------------------------------------------------------

// -------------- Basic Patterns--------------------

function pattern(n) {
    let str = ''
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            str += "x" + ' '
        }
        str += "\n"
    }
    console.log(str)

}


function noPattern(n) {

    let str = ''

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            str += j + ' '
        }
        str += '\n';

    }
    console.log(str)
}



function pattern1(n) {

    let str = ''

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            str += i + ' '
        }
        str += '\n';

    }
    console.log(str)
}


function pattern2(n) {
    let str = '';

    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            for (let j = n; j >= 1; j--) {
                str += j + ' '

            }

        } else {
            for (let j = 1; j <= n; j++) {
                str += j + ' '

            }
        }
        str += '\n'
    }
    console.log(str)

}




function pattern3(n) {
    let str = '';


    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {

            if (i == 1 || i == n || j == 1 || j == n) {
                str += 'x' + ' '
            } else {
                str += ' ' + ' '
            }

        }
        str += '\n'
    }

    console.log(str)

}




function pattern4(n) {
    let str = '';


    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {

            if (i == 1 || i == n || j == 1 || j == n || i == j) {
                str += 'x' + ' '
            } else {
                str += ' ' + ' '
            }

        }
        str += '\n'
    }

    console.log(str)

}

function pattern5(n) {
    let str = '';


    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {

            if (i + j == n + 1 || i == j) {
                str += 'x' + ' '
            } else {
                str += ' ' + ' '
            }

        }
        str += '\n'
    }

    console.log(str)

}




// -------------- Number Patterns--------------------


function pattern6(n) {
    let str = '';
    let start = 1;
    let end = 5;


    for (let i = 1; i <= n; i++) {
        for (let j = start; j <= end; j++) {
            str += j + ' '
        }
        str += '\n'
        start += 5;
        end += 5;
    }

    console.log(str)

}



function pattern7(n) {
    let str = '';
    let c = 1


    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            str += c++ + ' '
        }
        str += '\n'

    }

    console.log(str)

}


function pattern8(n) {
    let str = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            str += (n* (i-1) + j) + ' '
        }
        str += '\n'
    }
    console.log(str)
}





/*

1  2  3  4  5
10 9  8  7  6
11 12 13 14 15
20 19 18 17 16 
21 22 23 24 25

*/
// -----------------------------------------------------------------------------------------------------------

// Date: 10-01-2025


// -----------------------------------------------------------------------------------------------------------
// Date: 12-01-2025

function pattern9(n){

    let res = '';

    for(let i=1; i<=n; i++){
        for(let j = 1; j<= i; j++){
            res += 'x' + ' ';

        }
        res += '\n'
    }
    console.log(res);
}




function pattern10(n){

    let res = '';

    for(let i=1; i<=n; i++){
        for(let j = 1; j<= i; j++){
            res += i + ' ';

        }
        res += '\n'
    }
    console.log(res);
}




function pattern11(n){

    let res = '';

    for(let i=1; i<=n; i++){
        for(let j = 1; j<= i; j++){
            res += j + ' ';

        }
        res += '\n'
    }
    console.log(res);
}




function pattern12(n){

    let res = '';

    for(let i=1; i<=n; i++){
        for(let j = i; j>= 1; j--){
            res += j + ' ';

        }
        res += '\n'
    }
    console.log(res);
}




function pattern13(n){

    let res = '';

    for(let i=1; i<=n; i++){
        for(let j = n; j>= (n+1)-i; j--){
            res += j + ' ';

        }
        res += '\n'
    }
    console.log(res);
}





function pattern14(n){

    let res = '';

    for(let i=n; i>=1; i--){
        for(let j = i; j<= n; j++){
            res += j + ' ';

        }
        res += '\n'
    }
    console.log(res);
}





function pattern15(n){

    let res = '';

    for(let i=1; i<=n; i++){
        if(i%2 == 0){
            for(let j = i; j>=1; j--){
                res += j + ' ';
    
            }
        }else{
            for(let j = 1; j<= i; j++){
                res += j + ' ';
    
            }
        }
        res += '\n'
    }
    console.log(res);
}




function pattern16(n){

    let res = '';
    let num = 1;

    for(let i=1; i<=n; i++){
        for(let j = 1; j<=i; j++){
            if(num%2 != 0 ){
                res += num + ' ';
                num++;
            }else{


                res += 'x' + ' ';
                num++;

            }
        }
        res += '\n'
    }
    console.log(res);
}




// -------- patterns in  reverse order-----------------


function pattern17(n){

    let res = '';


    for(let i=n; i >= 1; i--){
        for(let j = 1; j<=i; j++){
                res += 'x' + ' ';
      
        }
        res += '\n'
    }
    console.log(res);
}


function pattern18(n){

    let res = '';


    for(let i=n; i >= 1; i--){
        for(let j = 1; j<=i; j++){
                res += j + ' ';
      
        }
        res += '\n'
    }
    console.log(res);
}



function pattern19(n){

    let res = '';


    for(let i=n; i >= 1; i--){
        for(let j = (n+1) - i; j<=n; j++){
                res += j + ' ';
      
        }
        res += '\n'
    }
    console.log(res);
}




function pattern20(n){

    let res = '';


    for(let i=1; i<=n; i++){
        for(let j = i; j<=n; j++){
                res += i + ' ';
      
        }
        res += '\n'
    }
    console.log(res);
}





// function pattern20(n){

//     let res = '';


//     for(let i=1; i<=n; i++){
//         for(let j = n; j<=(n+i)-i; j--){
//                 res += j + ' ';
      
//         }
//         res += '\n'
//     }
//     console.log(res);
// }



function pattern21(n){

    let res = '';

    for(let i = n; i >= 1; i--){
        for(let j = 1; j<=i; j++){
                res += i + ' ';
      
        }
        res += '\n'
    }
    console.log(res);
}


function pattern22(n){

    let res = '';

    for(let i = 1; i <= n; i++){
        for(let j = n; j >= i; j--){
                res += j + ' ';
      
        }
        res += '\n'
    }
    console.log(res);
}




function pattern23(n){

    let res = '';

    for(let i = 1; i <= n; i++){
       if(i%2 != 0){
        for(let j = n; j >= i; j--){
           if(j%2 != 0){
            res += j + ' ';

           }else{
            res += '*' + ' ';
           }
    }
       }else{
        for(let j = n; j >= i; j--){
            if(j%2 == 0){
             res += j + ' ';
 
            }else{
             res += '*' + ' ';
            }
     }
       }
        res += '\n'
    }
    console.log(res);
}




function pattern24(n){

    let res = '';

       for(let i=1; i<=n; i++){

        for(let j = 1; j <= n ; j++){
            if(j < (n+1)-i){
                res += ' ' + ' '
            }else{
                   res += '*' + ' '
            }
        }
        res += '\n'
    }
    console.log(res);
}




function pattern25(n){

    let res = '';

       for(let i=1; i<=n; i++){

        for(let j = 1; j <= n ; j++){
            if(j < (n+1)-i){
                res += ' ' + ' '
            }else{
                   res += '*' + ' '
            }
        }
        res += '\n'
    }
    console.log(res);
}




function pattern26(n){

    let res = '';
    let space = n-1;

       for(let i=1; i<=n; i++){

        for(let j = 1; j <= space ; j++){
           res += ' ' + ' ';
        }

        for(let j = 1; j <= i ; j++){
            res += '*' + ' '; 
        }
        res += '\n'
        space--;
    }
    console.log(res);
}




function pattern27(n){

    let res = '';
    let space = n-1;

       for(let i=1; i<=n; i++){

        for(let j = 1; j <= space ; j++){
           res += ' ' + ' ';
        }

        for(let j = 1; j <= i ; j++){
            res += i + ' '; 
        }
        res += '\n'
        space--;
    }
    console.log(res);
}




function pattern28(n){

    let res = '';
    let space = n-1;

       for(let i=1; i<=n; i++){

        for(let j = 1; j <= space ; j++){
           res += ' ' + ' ';
        }

        for(let j = i; j >= 1 ; j--){
            res += j + ' '; 
        }
        res += '\n'
        space--;
    }
    console.log(res);
}




function pattern29(n){

    let res = '';
    let space = n-1;

       for(let i=n; i>=1; i--){

        for(let j = 1; j <= space ; j++){
           res += ' ' + ' ';
        }


        for(let j = 1; j <= (n+1) -i  ; j++){
            res += i + ' '; 
        }
        res += '\n'
        space--;
    }
    console.log(res);
}



function pattern30(n){

    let res = '';
    let space = n-1;

       for(let i=n; i>=1; i--){

        for(let j = 1; j <= space ; j++){
           res += ' ' + ' ';
        }

        for(let j = n; j >= i ; j--){
            res += j + ' '; 
        }
        res += '\n'
        space--;
    }
    console.log(res);
}




function pattern31(n){

    let res = '';
    let space = 0;

       for(let i=1; i<= n; i++){

        for(let j = 1; j <= space ; j++){
           res += ' ' + ' ';
        }

        for(let j = i; j <= n ; j++){
            res += "*" + ' '; 
        }
        res += '\n'
        space++;
    }
    console.log(res);
}



function pattern32(n){

    let res = '';
    let space = 0;

       for(let i=n; i>=1; i--){

        for(let j = 1; j <= space ; j++){
           res += ' ' + ' ';
        }

        for(let j = i; j >= 1 ; j--){
            res += j + ' '; 
        }
        res += '\n'
        space++;
    }
    console.log(res);
}



function pattern33(n){

    let res = '';
    let space = 0;

       for(let i=1; i<=n; i++){

        for(let j = 1; j <= space ; j++){
           res += ' ' + ' ';
        }

        for(let j = n; j >= i ; j--){
            res += j + ' '; 
        }
        res += '\n'
        space++;
    }
    console.log(res);
}


function pattern34(n){

    let res = '';
    let space = 0;

       for(let i=n; i>=1; i--){

        for(let j = 1; j <= space ; j++){
           res += ' ' + ' ';
        }

        for(let j = i; j >= 1 ; j--){
            res += i + ' '; 
        }
        res += '\n'
        space++;
    }
    console.log(res);
}


function pattern35(n){

    let res = '';
    let space = 0;

       for(let i=1; i<=n; i++){

        for(let j = 1; j <= space ; j++){
           res += ' ' + ' ';
        }

        for(let j = i; j <= n ; j++){
            res += j + ' '; 
        }
        res += '\n'
        space++;
    }
    console.log(res);
}



function pattern36(n){

    let res = '';
    let space = 0;

       for(let i=n; i>=1; i--){

        for(let j = 1; j <= space ; j++){
           res += ' ' + ' ';
        }

        for(let j = 1; j <= i ; j++){
            res += j + ' '; 
        }
        res += '\n'
        space++;
    }
    console.log(res);
}




function pattern37(n){

    let res = '';
    let space = 0;

       for(let i=1; i<=n; i++){

        for(let j = 1; j <= space ; j++){
           res += ' ' + ' ';
        }

        for(let j = i; j <= n ; j++){
            res += i + ' '; 
        }
        res += '\n'
        space++;
    }
    console.log(res);
}




function pattern38(n){

    let res = '';
    let sp = n-1;
    let star = 1;

       for(let i=1; i<=n; i++){

        for(let j = sp; j >= 1 ; j--){
           res += ' ' + ' ';
        }

        for(let j = 1; j <= star ; j++){
            res += "*" + ' '; 
        }
        res += '\n'
        sp--;
        star += 2;

    }
    console.log(res);
}




function pattern39(n){

    let res = '';
    let sp = n-1;
    let star = 1;

       for(let i=1; i<=n; i++){

        for(let j = sp; j >= 1 ; j--){
           res += ' ' + ' ';
        }

        for(let j = 1; j <= star; j++){
            if(j <= Math.ceil(star/2)){
                res += j + " ";
            }else{
                res += (star +1)-j + ' ';
            }



        }
        res += '\n'
        sp--;
        star += 2;

    }
    console.log(res);
}





function pattern40(n){

    let res = '';
    let sp = 4;
    let star = 1;

       for(let i=1; i<=n; i++){

        for(let j = sp; j >= 1 ; j--){
           res += ' ' + ' ';
        }
        for(let j = 1; j <= star ; j++){
            res += "*" + ' '; 
        }
        res += '\n'
       if(i <= Math.trunc(n/2)){
        sp--;
        star += 2;
       }else{
        sp++;
        star -= 2;
       }

    }
    console.log(res);
}



//----------------------home work --------------------------



function pattern41(n){
    let space = 3;
    let val  = 1;
    let res = '';

    for(let i = 1; i<=n; i++){

        for(let j = 1; j<=space; j++){
            res += ' ' + ' '
        }

        for(let j = 1; j<= val; j++){
            if(j <= Math.ceil(val/2)){
                res += String.fromCharCode(64 + j) + ' ';
            }else{
                res += String.fromCharCode(64 + ((val+1)-j)) + ' ';
            }
        }

        if(i< Math.ceil(n/2)){
            space--;
            val += 2;
        }else{
            space ++;
            val -= 2;
        }
        res += '\n';
    }
    console.log(res);

}

pattern41(7)



































