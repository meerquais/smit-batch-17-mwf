import { auth , signInWithEmailAndPassword, signOut  } from "../config.js";

const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

loginBtn.addEventListener("click" , async ()=>{

 const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth,email, password);
        Swal.fire({
  title: 'Success!',
  text: 'Logged In',
  icon: 'success',
  
  
})
console.log(userCredential.user);
        
    } catch (error) {
        Swal.fire({
  title: 'Error!',
  text: error.message,
  icon: 'error',
})
    } 




})

logoutBtn.addEventListener("click" , async()=>{

    const user = auth.currentUser;
    if(user){
try {
        await signOut(auth);
         Swal.fire({
  title: 'Success!',
  text: "User Logged out!",
  icon: 'success',
})

    } catch (error) {
         Swal.fire({
  title: 'Error!',
  text: error.message,
  icon: 'error',
})
    }
    }else{
         Swal.fire({
  title: 'Error!',
  text: "No User Logged In!",
  icon: 'error',
})
    }

    
})