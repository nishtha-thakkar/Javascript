const form = document.getElementById("form");

form.addEventListener("submit" , (e) =>{
    e.preventDefault();
    const err = document.getElementById("error")

                              // 1st method

//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value
//     const password = document.getElementById("password").value;

   


//     if(!name){
//         alert("name is required");
//         return;
//     }


//    if(!email.includes ("@") || email === "" ){
//     alert("email is not valid");
//     return;

//    }
 
//   if(!password){
//     alert("password is required");
//     return;
// }



                                    // 2nd method


 try{
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value;

    if(!name || !email.includes("@") || email === "" || !password){
        throw "ALL FILEDS ARE REQUIRED";
    }

 } catch(error) {
    console.error(error)
    err.innerHTML  = error;

 }                           

 console.log(name);
 console.log(email);
 console.log(password);





})