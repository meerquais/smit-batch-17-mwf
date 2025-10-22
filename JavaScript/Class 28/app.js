console.log("JavaScript Connected!");

function foo(){
    var userName = "Meer";
    alert("Hello " + userName)
}


function checkAddress(fieldId){

    var val = document.getElementById(fieldId).value;

    if(val === ""){
        alert("Email address is required!");
        return false; 
    }

    return true;
    

}
