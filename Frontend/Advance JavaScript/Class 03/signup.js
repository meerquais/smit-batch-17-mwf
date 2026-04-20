console.log("JavaScript Connected!");



// var a = 10;

// var a = 20; 

// console.log(a);

// let a = 30;

// let a = 40; 

// a = 50;
// console.log(a);

// const name = "Meer";

// const name = "Meer Quais";

// name = "Meer Quais";

// console.log(name);






function signUp(){
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    // console.log(email);
    // console.log(password);

    let users = JSON.parse(localStorage.getItem("users")) || [] ;

    for(var i = 0; i < users.length;i++){
        if(users[i].email === email.value){
            alert("User Already Exists!")
            return;
        }
    }

    let newUser = {
        email: email.value,
        password:password.value
    }
    users.push(newUser);
    localStorage.setItem("users" , JSON.stringify(users));
    alert("User Created!")

    email.value = "";
    password.value = ""

    window.location.href = "login.html";
    
    
    


}
