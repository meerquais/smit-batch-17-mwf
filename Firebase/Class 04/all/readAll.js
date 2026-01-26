import { db , collection , getDocs } from "../config.js";

const readBtn = document.getElementById("readBtn");
const out = document.getElementById("out");

readBtn.addEventListener("click" , async ()=>{


    try {
        const colRef = collection(db , "students");
        const snapShot = await getDocs(colRef);

        const results = [];

        snapShot.forEach(doc => results.push({
            id: doc.id,
            ...doc.data()
        }))
        out.textContent = JSON.stringify(results, null , 2)

    } catch (error) {
        out.textContent = "Error: " + error.message
        
    }



})