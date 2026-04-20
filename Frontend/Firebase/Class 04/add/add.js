import { db , collection , addDoc } from "../config.js";

const addBtn = document.getElementById("addBtn");
const out = document.getElementById("out");


addBtn.addEventListener("click" , async ()=>{

    const value = document.getElementById("docValue").value;

    try {
        const docRef = await addDoc(collection(db, "students"), {
            value,
            createdAt: Date.now(),

        });
        console.log(docRef);        
        out.textContent = `Document added with auto ID : ${docRef.id}`

    } catch (error) {
        out.textContent = "Error: " + error.message
        
    }

})