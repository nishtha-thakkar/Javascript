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

console.log(" Take NOTHING, Return SOMETHING ");

function test2(){
  return 10;
}

//test2(); -  if we write return so this call not called and result not is found so we can write with console log

console.log(test2());

console.log(" Take NOTHING, Return SOMETHING ");


// 4. Take SOMETHING, Return SOMETHING

function test3(a,b){
  return a + b;
}

let res =  test3(100 , 200);
console.log(res);

