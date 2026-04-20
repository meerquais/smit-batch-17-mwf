import { auth,
    db,
    googleProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    doc,
    getDoc,
    setDoc
 } from "../firebase/config.js";


const loginBtn = document.getElementById("loginBtn");
const googleBtn = document.getElementById("googleBtn");

let password = document.getElementById("pass");
let email = document.getElementById("email");

async function handleRedirect(userId) {
    const snap = await getDoc(doc(db,"users", userId));

    if(!snap.exists()){
        return;
    };

    const data = snap.data();

    if(!data.isVerified){
        Swal.fire("Not Verified" , "Admin has not approved yet", "warning")
        return;
    }

    if(data.role === "admin"){
        window.location.href = "../admin/admin.html"
    }else{
        window.location.href = "../user/user.html"
    }
};

loginBtn.addEventListener("click", async ()=>{

    const emailVal = email.value;
    const passVal = password.value;

    try {
        const res = await signInWithEmailAndPassword(auth, emailVal ,passVal);
 await handleRedirect(res.user.uid);

    } catch (error) {

        Swal.fire("Error" , error.message, "error")
        
    }
});

googleBtn.addEventListener("click" , async()=>{
    try {
        const res = await signInWithPopup(auth, googleProvider);

        await setDoc(doc(db,"users", res.user.uid),{
            email:res.user.email,
            fullName:res.user.displayName || "",
            role:"user",
            isVerified:false,
            createdAt: Date.now()
        }, {merge:true} )

        await handleRedirect(res.user.uid);


    } catch (error) {
        Swal.fire("Error", error.message,"error");
    };
});

