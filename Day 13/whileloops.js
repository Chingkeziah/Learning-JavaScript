// The below code will enter into an infinite loop because "Enter your email"
// will keep getting executed since no email has been provided
let age = "";
while(email = ""){
    console.log("Enter your email")
}

// However, in this instance, we'll keep getting please enter your name until we do so
//  we are therefore allowed to escape the while loop due to the fact that we used a prompt 
let userName = "";
      while(userName === "" || userName === null){
    userName = window.prompt(`Please enter your name`)           
}
  console.log(`Welcome ${userName}`);
  