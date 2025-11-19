console.log("JavaScript Connected!");

// Local and Session Storage Methods!

// setItem(key, value) - store karta hai.

// getItem(key) - value ko lata hai.

// removeItem(key) - specific key ko remove karta hai.

// clear() - saara storage clear karta hai.


var form = document.getElementById("signupForm");

var msg = document.getElementById("msg")



form.addEventListener('submit' , function(e){

    e.preventDefault()

    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value;
    
    
    if(!username || !password){
        msg.textContent = "username aur password chahiye!";
        return
    }

    var existing = localStorage.getItem('users');

    var users = existing ? JSON.parse(existing) : [] ;


    for(var i = 0;i < users.length ; i++){
        if(users[i].username === username){
            msg.textContent = "User Phele sy moujood hai. || User Already Exists!"
            return;
        }
    }

    var newUser = {
        username:username,
        password:password
    };

    users.push(newUser);

    localStorage.setItem("users" , JSON.stringify(users));

    msg.textContent = "Signup ho gaya hai, ab jao login karo."


    form.reset();




})


// var obj = {
//     name: "Meer",
//     age: 25,
//     email: "meerquais@gmail.com"
// };


// console.log(obj);

// var stringify = JSON.stringify(obj);

// console.log(stringify);

// var backToObj = JSON.parse(stringify);


// console.log(backToObj);










var loginForm = document.getElementById("loginForm");

var loginMsg = document.getElementById("loginMsg");

var loggedMsg = document.getElementById("loggedMsg");



loginForm.addEventListener('submit' , function(e){


    e.preventDefault();

    var username = document.getElementById("loginUsername").value.trim();
    var password = document.getElementById("loginPassword").value;


    var existing = localStorage.getItem('users');
    console.log(existing);
    

    var users = existing ? JSON.parse(existing) : [];

    console.log(users);
    


    for(var i =0 ; i < users.length; i++){
        if(users[i].username === username && users[i].password === password){
            loginMsg.textContent = "Login ho gaya ahi.";

            loggedMsg.textContent = username
            
            form.reset();
            return;
        }
    }


    loginMsg.textContent = "Galat username or Password!";

})