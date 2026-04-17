// array-function-method

let arr = [10 , 20 , 30 , 40 , 50 , 60 , 70 , 80];
let array = [110 , 120];

//1. push - to add element to last

arr.push(90);
console.log(" push element : - to add in last - 90 " ,arr);

// console.log (" array : " , arr);

//2.unshift - to add element in first

arr.unshift(1000);
console.log("unshift element : to add in  first -  1000 " , arr);

// 3. pop - to remove element from last

arr.pop();
console.log(" pop element : - to remove element from last - 90 - remove 90 " , arr)

// 4. shift - to remove first element

arr.shift();
console.log(" shift element : - to remove element from first - 1000 - remove 1000 " , arr)

//  5. splice() → add/remove (original array changes)

arr.splice(1,2) //  index 1 થી 2 elements remove
console.log( " splice element : - to remove element - first index -20 and second index - 30   "  , arr);

//6. slice() → copy part (no change in original) - to convert in string

// console.log("10, 40, 50, 60, 70, 80") 

let arr1 = arr.slice(2,4);
console.log(" slice element- to give slice like 2 and 3 index 40 and 50 , not given 60 " ,arr1);

//7. join - to convert in string

let arr2 = arr.join();
console.log (" join function - to convert in string " , arr2);

// 8. reverse - to reverse all element

console.log(" original arr : " , arr);

let arr3 = arr.reverse();
console.log ("reverse array :" , arr3);


// 9. length - to return length

// 80, 70, 60, 50, 40, 10

let arr4 = arr.length;
console.log ("length function : " , arr4);


//10 index of - to fing element through index

//80, 70, 60, 50, 40, 10

let arr5 = arr.indexOf(60);
console.log("inedexof function to find index : " , arr5);

//11. concatinate - to merge to array

// 80, 70, 60, 50, 40, 10 

let arr6 = arr.concat(array);
console.log (" concate array - to merge two array " , arr6);

// 12 - map - to give new array

// 110 , 120
console.log (" map function - to give new array");
const arr7 = array.map((arr15) => console.log(arr15));

// 13 . foreach - to change in original array

console.log (" foreach function -  internal process - to change internaly");

// 80, 70, 60, 50, 40, 10 

const arr8 = arr.forEach((arr8) => console.log(arr8));

//14. filter - to check condition

const arr9 = array.filter((array) => array > 110);
console.log(" filter function - to check condition " , arr9);

//15 . include -  to check the value 



const arr10 = arr.includes(60);
console.log (" include function - to check the value : " , arr10);


//16 . reduce - to reduce the value

// const arr11 = arr.reduce;
// console.log ("reduce the value : " , arr11);



//17 sort - sorting the element 

 //80, 70, 60, 50, 40, 10

 let arr12 = arr.sort();
 console.log(" sorting the array " , arr12);



// 18 . find - first match

let arr13 = arr.find(x => x === 70);
console.log (" find fun : " , arr13);


// findindex
// reduce
//find
//














    









