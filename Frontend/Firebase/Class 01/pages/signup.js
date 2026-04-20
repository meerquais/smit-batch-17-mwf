import { auth , createUserWithEmailAndPassword } from "../config.js";

const signupBtn = document.getElementById("signupBtn");

signupBtn.addEventListener("click" , async ()=>{

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try{
        const userCredential = await createUserWithEmailAndPassword(auth,email, password);
        Swal.fire({
  title: 'Success!',
  text: 'User Created',
  icon: 'success',
})
        console.log(userCredential.user);
        console.log("Signup Successful: " , userCredential.user.email);
        // alert("User Created: ", userCredential.user.email);              
    } catch (error) {

        console.log("Error: " , error.message);        
        
    }




})