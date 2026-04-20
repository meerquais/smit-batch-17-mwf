import { db, collection , addDoc, doc } from "../config.js";

const addBtn = document.getElementById("addAutoBtn");
const out = document.getElementById("out");


addBtn.addEventListener("click" , async ()=>{
    const value = document.getElementById("docValue").value;

    try {
         
        const docRef = await addDoc(collection(db, "users") , {
            value,
            createdAt: Date.now()
        });
        out.textContent = `Document added with auto ID: ${docRef.id}`
    } catch (error) {
        out.textContent = "Error: " + error.message
    }
})