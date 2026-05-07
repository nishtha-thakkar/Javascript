// Loop + Condition

//question- 1  Print all leap years between 2000–2025.

console.log(" QUESTION : 1");

for(let i = 2000 ; i<=2025 ; i++){
    if(i%4==0){
        console.log(" i = " , i)
    }
}

console.log("---------------------------------------------");


// question-2  Print numbers divisible by 7 but not by 5.

console.log(" QUESTION : 2");

for(let  i = 1 ; i<=50 ; i++ ){
    if(i % 7 ==0 && i % 5 != 0)
        console.log(" i = " , i)

}

console.log("---------------------------------------------");

// question-3 Find sum of all elements in array.

console.log(" QUESTION : 3");

let arr = [10 , 20 , 30 , 40 , 50]
let sum = 0;

for(let i = 0 ; i<arr.length ; i++){
    sum += arr[i];

}

console.log(" sum = " , sum);

console.log("---------------------------------------------");


// question-4  Using a for loop, write a program that calculates the product(multiplication) of all 
// odd numbers from 1 to 10.

console.log(" QUESTION : 4");

let product = 1

for(let i = 1 ; i<=10 ; i++ ){
    if(i % 2 != 0){

        console.log(i)

        product *= i

        
    }
}
console.log(`  multiplication of an odd no = ${product}`);

console.log("---------------------------------------------");


// question-5  Find  smallest number in array.

console.log(" QUESTION : 5");

let arr2 = [10 , 20 , 30 , 40 ,5];

let smallest = arr[0];

for(let i = 0 ; i<arr2.length ; i++ ){
    if(arr2[i] < smallest){
        smallest = arr2[i]
    }
}

console.log(" smallest no is = " , smallest);

console.log("---------------------------------------------");



// question-6 Write a program to find even numbers between 1 to 15

console.log(" QUESTION : 6");

for(let i = 1 ; i<=15 ; i++){
    if(i % 2 ==0){
        console.log(" even no is : " , i);
    }
}

console.log("---------------------------------------------");


// question - 7 Print cube of numbers from 1–20 with condition

console.log(" QUESTION : 7");

for(let i  = 1 ; i<=20 ; i++){
    if (i > 10){
        let cube = i ** 3;
        console.log(" cube of no : " , cube);
    }
}

console.log("---------------------------------------------");


// question-8 Find HCF of two numbers. - high common factor

console.log(" QUESTION : 8");

let num1 = 12;
let num2 = 18;

let hcf = 1;

for (let i = 1; i <= num1 && i <= num2; i++){
    if(num1 % i === 0 && num2 % i ===0){
        hcf = i;
    }
}

console.log(" HCF : " , hcf);

console.log("---------------------------------------------");

// question 9   Find total  vowels and consonants.

console.log(" QUESTION : 9");

let str5 = "JAVASCRIPTDEVELOPER" // j -c , a-v , v-c , a-v , s-c , c-c, r-c, i-v, p-c , t-c , d-c
// e-v , v-c , l-c , o -v , p-c, e-v , r-c   - v-7 , c- 12

let vowels = 0 ;
let consonants =0;

for(let i = 0 ; i<str5.length ; i++){
    if( str5[i] === "A" || str5[i] === "E" || str5[i] === "I" || str5[i] === "O" || str5[i] === "U"){
        vowels++
    }else{
        consonants++
    }
}

console.log(`VOWELS ARE :  ${vowels} and CONSONANTS ARE :  ${consonants}`)

console.log("---------------------------------------------");


// question-10 Check if a number is positive or negative.

console.log(" QUESTION : 10");

let arr4 = [-10 , -20 , -30 , 40 , 50 , 60]


for(let i = 0 ; i<arr4.length ; i++){
    if(arr4[i] < 0){
      console.log(" negative no : " , arr4[i]);

    }else if (arr[4] > 0){
        console.log(" positive no : " , arr4[i]);
    }
}

















