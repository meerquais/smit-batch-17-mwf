import { auth , db,
    onAuthStateChanged , 
    collection, addDoc,
    query,where,
    orderBy,getDocs,
    updateDoc,deleteDoc,
    doc, serverTimestamp
 } from "../firebase/config.js";


 let uid = null;
 let userEmail = null;

 const addBtn = document.getElementById("addBtn");

 const posts = document.getElementById("posts")

onAuthStateChanged(auth, async (user)=>{
     if(!user) return window.location.href = "../login/login.html";

     uid = user.uid;
     userEmail = user.email;
     
     loadPosts();   
 });

async function loadPosts() {
    posts.innerHTML = "";

    const q = query(collection(db,"posts"),
    where("uid", "==", uid),
    orderBy("createdAt" , "desc"));

    const snap = await getDocs(q);

    snap.forEach(p =>{
        const data = p.data();

        const div = document.createElement("div");
        div.textContent = `${data.text}`;

        const edit = document.createElement("button");

        edit.textContent = "Edit";

        edit.onclick = async ()=>{
            const val = prompt("Update Task" , data.text);
            if(!val) return;

            await updateDoc(doc(db,"posts", p.id),{
                text:val,
                updatedAt: serverTimestamp()
            });
            loadPosts();
        }

        const del = document.createElement("button");

        del.textContent = "Delete";

        del.onclick = async ()=>{
            await deleteDoc(doc(db,"posts", p.id));
            loadPosts()
        };

        div.append(edit , del);
        posts.appendChild(div);
    });
}



addBtn.addEventListener("click" , async()=>{

    const task = document.getElementById("task")

    await addDoc(collection(db,"posts"),{
        uid,
        userEmail,
        text:task.value,
        createdAt: serverTimestamp(),
        updatedAt: null
    });
    task.value = "";
    loadPosts()
})