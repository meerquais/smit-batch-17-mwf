import { db,
    auth , onAuthStateChanged,
    collection,getDocs,
    updateDoc,
    doc
 } from "../firebase/config.js";



 onAuthStateChanged(auth, async (user)=>{
    if(!user){
        return window.location.href = "../login/login.html"
    }

    const list = document.getElementById("users");

    list.innerHTML = "";

    const snap = await getDocs(collection(db,"users"));

    snap.forEach((u)=>{
            const data = u.data();

            const div = document.createElement("div");

            div.textContent = `${data.fullname} | ${data.email} | verified: ${data.isVerified}`;

        const toggle = document.createElement("button");

        toggle.textContent = data.isVerified ? "Unverify" : "Verify";

        toggle.onclick = async ()=>{
            await updateDoc(doc(db,"users", u.id),{
                isVerified : !data.isVerified
            });

            Swal.fire("Updated" , "Status Changed" , "success");
            location.reload()
        };

        div.appendChild(toggle);
        list.appendChild(div);




    })


 })