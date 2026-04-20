import { auth, db,
    onAuthStateChanged,
    collection , addDoc,
    getDocs,query,where,
    orderBy, serverTimestamp
 } from "../firebase/config.js";

const cloudName = "dmujtx4yc";
const uplaodPreset = "myTodos";

const task = document.getElementById("task");
const imageInput = document.getElementById("imageInput");
const addBtn  = document.getElementById("addBtn");
const posts = document.getElementById("posts");

let uid = null;

onAuthStateChanged(auth, (user)=>{
    if(!user){
        return window.location.href = "../login/login.html";
    }
    uid = user.uid;
    loadPosts();
});

async function uploadToCloudinary(file) {
    const formData = new FormData();
    formData.append("file" , file);

    formData.append("upload_preset" , uplaodPreset);

    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: "POST",
        body:formData
    });

    const data = await res.json();

    return data.secure_url;
}

addBtn.addEventListener("click" , async ()=>{
    const text = task.value.trim();
    const file = imageInput.files[0];

    if(!text){
        Swal.fire("Missing" , "Todo text required" , "warning");
        return;
    };

    try {
        Swal.fire({
            title:"Saving",
            allowOutsideClick:false,
            didOpen: ()=>{
                Swal.showLoading()
            }
        });

        let imageUrl = "";

        if(file){
            imageUrl = await uploadToCloudinary(file);
        }

        await addDoc(collection(db,"posts"),{
            uid,
            text,
            imageUrl,
            createdAt:serverTimestamp()
        });

        Swal.fire("Saved","Todo Added","success");

        task.value = "";
        imageInput.value = "";

        loadPosts();


    } catch (error) {
        console.log(error.message);
        
    }



})


async function loadPosts() {
    posts.innerHTML = "";

    const q = query(collection(db,"posts"),where("uid", "==" , uid),
    orderBy("createdAt", "desc")
    );

    const snap = await getDocs(q);

    snap.forEach(docSnap =>{
        const data = docSnap.data();

        const div = document.createElement("div");

        div.innerHTML = `
        
        <p>${data.text}</p>
        ${
            data.imageUrl ? `<img src="${data.imageUrl}" width="150">` : ""

        }

        
        `


        posts.appendChild(div);
    })


}