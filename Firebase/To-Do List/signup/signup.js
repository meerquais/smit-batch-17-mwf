import { auth , db , googleProvider , 
    createUserWithEmailAndPassword , signInWithPopup
    , doc , setDoc
 } from "../firebase/config.js";


 const btn = document.getElementById("signupBtn");
 const googleBtn = document.getElementById("googleBtn");

 let fullname = document.getElementById("fullname");
 let email = document.getElementById("email");
 let location = document.getElementById("location");
 let password = document.getElementById("password");


 btn.addEventListener("click" , async ()=>{

    const fullName = fullname.value;
    const emailVal = email.value;
    const loc = location.value;
    const pass = password.value;

    try {
        const res = await createUserWithEmailAndPassword(auth, emailVal, pass);

        await setDoc(doc(db,"users" , res.user.uid), {
            email:emailVal,
            fullName,
            location:loc,
            role:"user",
            isVerified:false,
            createdAt: Date.now()
        });

        Swal.fire("Account Created" , "Wait for admin verification","success").then(()=>{
 window.location.href = "../login/login.html"
        })
        


    } catch (error) {
        Swal.fire("Error" , error.message , "error");
        
    };
 });

 googleBtn.addEventListener("click", async ()=>{
   try {
     const res = await signInWithPopup(auth , googleProvider);

    await setDoc(doc(db,"users", res.user.uid),{
        fullName:res.user.displayName || "",
        email: res.user.email,
        role:"user",
        isVerified:false,
        createdAt: Date.now()
    } , {merge:true});

    Swal.fire("Google account saved", "Wait for admin approval" , "success").then(()=>{
        window.location.href = "../login/login.html";
    })
   } catch (error) {
        Swal.fire("Error" , error.message , "error")  ;
   }

 })



