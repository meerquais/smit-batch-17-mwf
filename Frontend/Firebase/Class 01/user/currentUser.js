import { auth } from "../config.js";


const checkBtn = document.getElementById("checkBtn");


checkBtn.addEventListener("click" , async ()=>{



    const user = auth.currentUser;

    if(user){
        Swal.fire({
  title: 'Current User!',
  text: user.email,
  icon: 'success',
})
    }else{
        Swal.fire({
  title: 'Error!',
  text: "No User Logged In!",
  icon: 'error',
})
    }


})