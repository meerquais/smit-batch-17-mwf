import { auth , onAuthStateChanged } from "../config.js";


onAuthStateChanged(auth , (user)=>{

    const status = document.getElementById("status");
    const img = document.getElementById("img")

    if(user){
        status.innerText = "Logged in as " + user.displayName;
        img.src = user.photoURL
    }else{
        status.innerText = "No user logged in!"
    }


})