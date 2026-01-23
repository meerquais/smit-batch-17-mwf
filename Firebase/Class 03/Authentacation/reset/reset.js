import { auth , sendPasswordResetEmail } from "../config.js";



const resetBtn = document.getElementById("resetBtn");


resetBtn.addEventListener("click" , async ()=>{

    const email = document.getElementById("email").value;

    try {
        await sendPasswordResetEmail(auth , email);
        alert("Password reset email sent to " + email);
    } catch (error) {

        console.log(error.message);
        
        
    }

})