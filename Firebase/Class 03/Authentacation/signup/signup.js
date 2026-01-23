import { auth , createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "../config.js";


const signupBtn = document.getElementById("signupBtn");
const googleBtn = document.getElementById("googleBtn");


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

googleBtn.addEventListener("click" , async ()=>{


    const provider = new GoogleAuthProvider();


    try {
        
        const result = await signInWithPopup(auth , provider);
        console.log("Google Login Successful: " + result.user.email);
        

    } catch (error) {   

        console.log(error.message);
        
        
    }


})