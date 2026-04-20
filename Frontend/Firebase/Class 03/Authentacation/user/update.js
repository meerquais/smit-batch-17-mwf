import { auth, updateProfile } from "../config.js";


const updateBtn = document.getElementById("updateBtn");

updateBtn.addEventListener("click" , async ()=>{

    const user = auth.currentUser;
    const name = document.getElementById("name").value;
    const photo = document.getElementById("photo").value;


    if(user){
        try {
            
            await updateProfile(user , {
                displayName : name,
                photoURL: photo
            });
            alert("Profile Update done!");

        } catch (error) {
            console.log(error.message);
            
        }
    }else{
        alert("No user logged in!")
    }
    


})