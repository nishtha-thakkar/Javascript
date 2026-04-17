// string function method

const str = "test10@gmail.com";
const str1 = "drumil";

//1. length 

let length = str.length;
console.log(" 1. length of str : " , length)


// 2. toupparcase - convert into upparcase

let string = str.toUpperCase();
console.log(" 2. toupparcase fun -to convert uppar case : " , string);

//3. lowerupparcase - convert into lowerrcase

let string1 = str.toLowerCase();
console.log(" 3. toLowerCase fun -to convert toLowerCase  : " , string1);


// 4. character at - to find in which index , which character comes

let string2 =  str.charAt(2);
console.log(" 4. character at - to find in which index , which character comes: " , string2)


// 5. indexof - which character is which index like t is 1 index

let string3 = str.indexOf('t');
console.log(" 5. indexof - which character is which index like t is 1 index : " , string3);

//6. includes - this is find the character is in our string or not ans is yes or no

let string4 = str.includes("te");
console.log(" 6. includes - this is find the character is in our string or not : " , string4);

// 7. start with - we can check our character start with te or not ams is yes or no?

let string5 = str.startsWith("te");
console.log(" 7. startswith -we can chek our character start with te or not? :  " , string5);

// 8.endsWith() - check at end our character end with com or not ans is yes or no?

let string6 = str.endsWith("com");
console.log(" 7. endsWith -we can chek our character end with com or not? :  " , string6);

// 9. substring - Extract string

let string7 = str.substring (0,4) +' ******' + str.substring(13 , 16);
console.log(" 9. substring - Extract string :  " , string7);

//10 . slice - a piece of string

let string8 = str.slice(1,4);
console.log("10. slice - a piece of string : " , string8);


// 11. replace() Replace text str.replace('a','b');

let string9 = str.replace('e' , 'v');
console.log(" replace - replace to character : " , string9);

// 12 . replaceAll() Replace all str.replaceAll('a','b')

let string10 = str.replaceAll('t' , 'j');
console.log("12. replace - replace all character of t : " ,string10 );

//13 . split()- to convert string into array
//const str = "test10@gmail.com";

let string11 = str.split();
console.log("13. split - to convert string into array : " , string11);

//14 . trim() Remove white  spaces str.trim()

const str2 = " rajagygygygygd "

let string12 = str2.trim();
console.log("14. trim() - Remove white  spaces:",string12);

//15. trimStart() Remove start space str.trimStart()

let string13 = str2.trimStart()
console.log("15. trimStart() - Remove start space str.trimStart() :" ,string13);

//16.trimEnd() Remove end space str.trimEnd()

let string14 = str2.trimEnd()
console.log("16. trimEnd() - Remove end space str.trimEnd()",string14);

//17. concat() Join strings str1.concat(str2)

// const str = "test10@gmail.com";
// const str1 = "drumil";

let string15 = str.concat(str1);
console.log("17. concat() - Join strings str1.concat(str2)" , string15)



