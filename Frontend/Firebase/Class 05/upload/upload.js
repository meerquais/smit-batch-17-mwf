const CLOUD_NAME = "druaws0tu";
const UPLOAD_PRESET = "upload";

const STORAGE_KEY = "cloudinary_media";

const uploadFile = document.getElementById("uploadFile");

uploadFile.addEventListener("click" ,async ()=>{


 const fileInput = document.getElementById("fileInput");

    const file = fileInput.files[0];

    if(!file){
        alert("Select a file first!");
        return
    }

    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

    const formData = new FormData();

    formData.append("file" , file);

    formData.append("upload_preset" , UPLOAD_PRESET);


    // if(saved?.public_id){
    //     formData.append("public_id" , saved.public_id);
    //     formData.append("overwrite" , "true");
    // }


    const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`;

    try {

        const res = await fetch(url, {
            method: "POST",
            body: formData
        });

        const data = await res.json();

        console.log("Uploaded: " ,  data);

        const media = {
            public_id: data.public_id,
            resource_type: data.resource_type,
            secure_url: data.secure_url
        };

        localStorage.setItem(STORAGE_KEY , JSON.stringify(media));

        showResult(media);


        
    } catch (error) {
        console.log("Upload failed" , error);
        
    }
});


function showResult(data){
    const result = document.getElementById("result");
    result.innerHTML = "";

    if(data.resource_type === "image"){
        const img = document.createElement("img");
        img.src = data.secure_url + "?cb=" + Date.now();
        result.appendChild(img);

    }

    if(data.resource_type === "video"){
        const video = document.createElement("video");
        video.src = data.secure_url + "?cb=" + Date.now();
        video.controls = true;
        result.appendChild(video);
    }
}

(function init(){
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(saved){
        showResult(saved)
    }
})()

