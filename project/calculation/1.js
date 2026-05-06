// array-function

let arr = [10 , 30 , 20 , 50 , 40 , 70 , 60];
let array = [ 200 , 300 , 400];
const string1 = "JAVASCRIPT DEVELOPER";
const string2 = "     yamaha  google yahoo     ";

//1. push 

function pusharr(){

    arr.push(90);
    console.log(" push element : - to add in last : " , arr);
}

pusharr();

console.log("--------------------------------------------------------------");

// 2. unshift 

function addBeg(){
    arr.unshift(100);
    console.log(" unshift element - to add at begining " , arr);
}

addBeg();

console.log("--------------------------------------------------------------");


// 3. pop 

function lastRemove(){
    arr.pop()
    console.log(" pop element - to remove from the last element " , arr);
}
lastRemove();

console.log("--------------------------------------------------------------");

// 4. shift

function removeFirst(){
    arr.shift();
    console.log(" shift element - to remove from the first element " , arr);
} 

removeFirst();

console.log("--------------------------------------------------------------");

//5.splice

function spliceEle(){
    arr.splice(1 , 2);
    console.log(" splice element - to add and remove element " , arr );
}
spliceEle();

console.log("--------------------------------------------------------------");


// 6 . slice  - it  does not take last element

function sliceEle(){
  const arr1 =  arr.slice(2 , 4);
    console.log(" slice element - to give piece of cake " ,  arr1);
}

 sliceEle();

 console.log("--------------------------------------------------------------");

// 7. join - to convert in string

function joinEle(){
const arr2 = arr.join()
    console.log(" join element - to convert in string " , arr2);
}
joinEle();

console.log("--------------------------------------------------------------");

// 8. reverse

function reverseEle(){
    const arr3 = arr.reverse();
    console.log(" reverse element - to reverse all element" , arr);
}
reverseEle();

console.log("--------------------------------------------------------------");


//9.length

function lengthOf(){
    const arr4 = arr.length;
    console.log(" length element - to give length of an array " , arr4);
}
lengthOf();

console.log("--------------------------------------------------------------");

// 10 . index of

function indexEle(){
    const arr5 = arr.indexOf(40);
    console.log(" indexof element - to find index with the help of no or character " , arr5)
}
indexEle();

console.log("--------------------------------------------------------------");


// 11 . concatinate

function concate(){
    const arr6 = arr.concat(array);
    console.log(" concatinate - to join two array" , arr6);
}

concate();

console.log("--------------------------------------------------------------");

// 12. map 

function map(){
    const arr7 = arr.map((array1) => console.log (array1));
}
console.log(" map fun - to give new array ");
map();

console.log("--------------------------------------------------------------");

// 13. foreach

function forEach(){
    const arr8 = array.forEach((array2) => console.log(array2));
}

console.log(" foreach fun - to chnage in original array");

forEach();
console.log("--------------------------------------------------------------");

// 14. filter

function filter(){
    const arr9 = array.filter((array) => array >100);
    console.log(" filter - to check condition " , arr9);
}
filter();
console.log("--------------------------------------------------------------");


//15 include 

function include(){
    const arr10  = arr.includes(40);
    console.log(" includes - includes or not in our array " , arr10);
}
include();

console.log("--------------------------------------------------------------");

// 16 . sort

function sort(){
    const arr11 = arr.sort();
    console.log(" sort - sorting the array " , arr11);
}
sort();

console.log("--------------------------------------------------------------");



// string fun method

// 1. lowercase

function lower(){
    const str1 = string1.toLowerCase();
    console.log(" lowercase : " , str1);

}
lower();
console.log("--------------------------------------------------------------");

// character at

function char(){
    const str2 = string1.charAt(2);
    console.log(" character : " , str2);
}
char();

console.log("--------------------------------------------------------------");

// indexof

function index(){
    const str3 = string1.indexOf('J');
    console.log(" indexof : " , str3);
}
index();

console.log("--------------------------------------------------------------");

// includes

function includes(){
    const str3 = string1.includes('VA');
    console.log(" include : " , str3);

}

includes();
console.log("--------------------------------------------------------------");

// start with

function start(){
    const str4 = string1.startsWith("JA");
    console.log(" start with : " , str4);
}
start();

console.log("--------------------------------------------------------------");

// end with

function end(){
    const str5 = string1.endsWith("AR");
    console.log(" endwith : " , str5);
}
end();

console.log("--------------------------------------------------------------");

//substring

function sub(){
    const str6 = string1.substring(0,2) + "******" + string1.substring(5 , 7);
    console.log(" substring : " , str6);
}
sub();
console.log("--------------------------------------------------------------");

// replace

function replace(){
    const str7 = string1.replace('J' , 'Y');
    console.log(" replace : " , str7);
}

replace();

console.log("--------------------------------------------------------------");

// trim

function trim(){
    const str8 = string2.trim();
    console.log(" trim - to remove white space:",str8);
}

trim();

console.log("--------------------------------------------------------------");


// trim start

function trimS(){
    const str9 = string2.trimStart();
    console.log(" trim start - to remove start white space : " ,str9);
}
trimS();


console.log("--------------------------------------------------------------");


//trim end

function trimE(){
    const str10 = string2.trimEnd();
    console.log(" trim start - to remove End white space : " ,str10);
}
trimE();















