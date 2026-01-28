import { db , doc , setDoc } from "../config.js";

const addBtn = document.getElementById("addBtn");

const out = document.getElementById("out");

addBtn.addEventListener("click" , async ()=>{

    const id = document.getElementById("docID").value.trim();
    const value = document.getElementById("docValue").value;

    if(!id){
        out.textContent = "Please enter an ID! ID is required!";
        return
    }

    const obj = {
            value:value,
            createdAt: Date.now(),
            create:"no",
            isActive:true,
            paid:null,
        }

    try {
        await setDoc(doc(db , "users" , id) , obj );
        out.textContent = `Document created with ID : ${id}`;
    } catch (error) {
        out.textContent = "Error: " + error.message;
    }



})