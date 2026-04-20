import { db, doc, getDoc } from "../config.js";

const readBtn = document.getElementById("readBtn");
const out = document.getElementById("out");


readBtn.addEventListener("click" , async ()=>{

    const id = document.getElementById("docId").value.trim();

    if(!id){
        out.textContent = "Enter doc ID";
        return
    }

    try {
        
        const docRef = doc(db , "users" , id);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()){
            out.textContent = JSON.stringify(docSnap.data(),null , 2)
        }else{
            out.textContent = "No Document Found"
        }
    } catch (error) {
        out.textContent = "Error: " + error.message
    }


})