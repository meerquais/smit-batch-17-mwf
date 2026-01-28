import { db , doc, deleteDoc } from "../config.js";

const deleteBtn = document.getElementById("deleteBtn");
const out = document.getElementById("out");


deleteBtn.addEventListener("click" , async ()=>{

    const id = document.getElementById("docId").value.trim();


    if(!id){
        out.textContent = "Please Enter Doc ID";
        return
    }

    try {
        await deleteDoc(doc(db, "students" , id));
        out.textContent = `Document ${id} Deleted!`
    } catch (error) {
        out.textContent = "Error: " + error.message
    }


})