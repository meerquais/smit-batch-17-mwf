import { auth , sendEmailVerification, signOut} from "../config.js";

const checkBtn = document.getElementById("checkBtn");
const logoutBtn = document.getElementById("logoutBtn");
const verifyBtn = document.getElementById("verifyBtn");


checkBtn.addEventListener("click" , async ()=>{

    const user = await auth.currentUser;

    if(user){
        console.log(user.email);
        alert("Current User :" +  user.email)
        console.log( user)
        
    }else{
        alert("No User Logged In!")
    }


})


logoutBtn.addEventListener("click" , async ()=>{

    const user = await auth.currentUser;

    try {
        if(user){
            await signOut(auth);
            alert("User successfully signed out!");
        }else{
            alert("No User Logged in!")
        }

        
    } catch (error) {
        console.log(error.message);
        
    }
})


verifyBtn.addEventListener("click" , async ()=>{
        const user = auth.currentUser;

        if(user){
            try {
                await sendEmailVerification(user);
                alert("Verification email sent to: " + user.email);
            } catch (error) {
                console.log(error.message);
                
            }
        }else{
            alert("No user is currently logged in!");
        }
})