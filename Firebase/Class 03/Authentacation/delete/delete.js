import { auth, deleteUser } from "../config.js";

const deleteBtn = document.getElementById("deleteBtn");


deleteBtn.addEventListener("click" , async ()=>{
    const user = auth.currentUser;

    if(user){
        try {
            await deleteUser(user)
            alert("Account Deleted!");
        } catch (error) {
            console.log(error.message);
            
        }
    }else{
        console.log("no user logged in!");
        
    }
})