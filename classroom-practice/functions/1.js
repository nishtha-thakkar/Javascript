// functions

//1. Take nothing , return nothing

console.log(" 1. Take nothing , return nothing ")

function test(){
  console.log(" Hello Kitty ")
}
test();

console.log(" ----------------------------- ");

// 2. take something , return nothing

console.log(" 2. take something , return nothing")

function test1(a,b){
  console.log(a+b);
}

test1(10,20);
console.log(" ----------------------------- ");


// 3. Take NOTHING, Return SOMETHING

console.log("3.Take NOTHING, Return SOMETHING ");

function test2(){
  return 10;
}

//test2(); -  if we write return so this call not called and result not is found so we can write with console log

console.log(test2());


console.log(" ----------------------------- ");

console.log("4. Take SOMETHING  Return SOMETHING ");




// 4. Take SOMETHING, Return SOMETHING

function test3(a,b){
  return a + b;
}

let res =  test3(100 , 200);
console.log(res);

console.log(" ----------------------------- ");


// 5. Recursive Function - with factorial

console.log("5. Recursive Function - with factorial")

function fact (n){
  if(n===1) return 1;
  return n * fact(n-1);
}

const res2 = fact (5);
console.log(res2);

console.log(" ----------------------------- ");

//6. Arrow Function 

console.log("6. Arrow Function");

// let arrow =(a , b) => {
//   return a+b;
// }
// console.log (arrow(10,20))


let arrow =(a , b) =>  a+b ;
  
console.log (arrow(10,20));

console.log(" ----------------------------- ");


// 7. IIFE (Immediately Invoked Function Expression) - we do not need call separately we can call directly

console.log("7. IIFE (Immediately Invoked Function Expression) - we do not need call separately we can call directly");

(function(){
  console.log("hello");
}) ();

console.log(" ----------------------------- ");

// 8. Anonymous Function (Function without name)

console.log("8. Anonymous Function (Function without name)");

const fun = function(){
  console.log("hello js !");
};

fun();

console.log(" ----------------------------- ");


//10. Closure Concept (Important 🔥);or nested function // because oflexical environment we can use parent property in child  but parent can notuse property of child;

console.log("10. Closure Concept (Important 🔥);or nested function // because oflexical environment we can use parent property in child  but parent can notuse property of child;");

function outer (){
  let a=20;
  let b =30;
  let c = 50;

  function inner(){
    console.log("inner function " , a);
    console.log("inner function " , b);
    console.log("inner function " , c);
  }
  inner();

}

outer();
console.log(" ----------------------------- ");

// 11 . nested function - one fun call into another fun

console.log("11 . nested function - one fun call into another fun");

function outer1(){
  console.log("hello kity !");
  inner2();
}
function inner2(){
  console.log("hello kitten ");

}
outer1();



















 


