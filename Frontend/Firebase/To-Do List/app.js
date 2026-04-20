import { db, collection , getDocs , query , orderBy } from "./firebase/config.js";

async function loadFeed() {

    const feed = document.getElementById("feed")
    const q = query(collection(db,"posts"), orderBy("createdAt" , "desc"));

    const snap = await getDocs(q);


    snap.forEach(p =>{
        console.log(p.data());
        
        const div = document.createElement("div");
        div.textContent = p.data().text + " " + p.data().userEmail;
        feed.appendChild(div)
    });
}

loadFeed();