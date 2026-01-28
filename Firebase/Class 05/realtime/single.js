import { db, doc , onSnapshot } from "../config.js";


const listenBtn = document.getElementById("listenBtn");
const stopBtn = document.getElementById("stopBtn");
const out = document.getElementById("out");

let unsubscribe = null;

listenBtn.addEventListener("click" , ()=>{
    const id = document.getElementById("docId").value.trim();
    if(!id){
        out.textContent = "Enter Document ID";
        return;
    }

    unsubscribe = onSnapshot(doc(db, "users" , id) , (docSnap)=>{
        if(docSnap.exists()){
            out.textContent = "Realtime Data: " + JSON.stringify(docSnap.data() , null , 2);

        }else{
            out.textContent = "Document not found!"
        }
    }, (err) => {
        out.textContent = "Listener error: " + err.message;
    })
})
stopBtn.addEventListener("click" , ()=>{
    if(unsubscribe){
        unsubscribe();
        out.textContent = "Listener stopped";
        unsubscribe = null;
    }else{
        out.textContent = "No active listener";
    }
})