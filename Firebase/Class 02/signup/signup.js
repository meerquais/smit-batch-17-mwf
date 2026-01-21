import { auth , createUserWithEmailAndPassword } from "../config.js";


const signupBtn = document.getElementById("signupBtn");


signupBtn.addEventListener("click" , async ()=>{


    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email , password);
        console.log("Signup Succesful: " , userCredential.user );
        console.log("Signup Succesful: " , userCredential );
        console.log("Signup Succesful: " , userCredential.user.email );

        
    } catch (error) {
        console.log("Error: " , error.message);
        
    }
    






})