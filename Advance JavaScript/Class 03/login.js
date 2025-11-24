function login(){

    let email = document.getElementById("email");
    let password = document.getElementById("password");

    let users = JSON.parse(localStorage.getItem("users")) || [] ;

    for(var i = 0; i < users.length;i++){
        if(users[i].email === email.value && users[i].password === password.value){
            alert("Logged In!");
            email.value = "";
            password.value = "";
            return;
        }

        alert("Invalid email or password!")
    }

    


}