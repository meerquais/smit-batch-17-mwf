import { auth , signInWithEmailAndPassword  } from "../config.js";


const loginBtn = document.getElementById("loginBtn");


loginBtn.addEventListener("click" , async ()=>{


    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email , password);
        console.log("Login Succesful: " , userCredential.user );
        console.log("Login Succesful: " , userCredential );
        console.log("Login Succesful: " , userCredential.user.email );

        
    } catch (error) {
        console.log("Error: " , error.message);
        
    }
})