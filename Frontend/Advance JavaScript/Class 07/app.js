console.log("Js Connected!");

// let whereAt = window.location.href;

// console.log(whereAt);

// let theDomain = window.location.hostname;

// console.log(theDomain);

// let thePath = window.location.pathname;

// console.log(thePath);

// let theAnchor = window.location.hash;

// console.log(theAnchor);

// function GoToLocation(){
//     // window.location.href = "https://www.google.com/"
//     // window.location.assign("https://www.google.com/");
//     // window.location.replace("https://www.youtube.com/");

//     // window.location.reload();

// }

// console.log(window.location.href);

// var monkeyWindow = window.open()

// var windowContent = `
// <h1>Capuchin monkey</h1><img src= 'monkey.jpg'><p>The word capuchin derives from a
// group of friars<br>named the Order of Friars Minor Capuchin who wear<br>brown
// robes with large hoods covering their heads.</p>`;

// monkeyWindow.document.write(windowContent)

// monkeyWindow.location.assign("./info.html")

// var myWindow = window.open("./info.html" , "width=400,height=300,left=200,top=200");

// var spec = 'width=400,height=300,left=500,top=200';

// // var myWindow = window.open("./info.html" , "Info" , spec)

// let windowContent = '<img src="https://www.autoshippers.co.uk/blog/wp-content/uploads/bugatti-centodieci.jpg" width=200 height=200>'

// let myWindow = window.open('' , "Img" , spec )

// myWindow.document.write(windowContent)

// setTimeout(()=> myWindow.close(),5000)

// function checkForPopBlocker(){
//  var spec = 'width=400,height=300,left=500,top=200';

//  let testPopUp = window.open("./info.html" , "info" , spec)

//  if(testPopUp === null){
//     alert("Please disable your popup blocker.");
//     testPopUp.close()
//  }
// }

// function checkForLastName(){
//     if(document.getElementById("lastNameField").value.length === 0){
//         alert("Please enter your last name")
//         return false;
//     }
// }

// function checkForLastName() {
//   let firstfield = document.getElementById("firstNameField");
//   let lastfield = document.getElementById("lastNameField");

//   if (firstfield.value.length === 0) {
//     alert("Please enter your first name");
//     firstfield.focus();
//     firstfield.style.backgroundColor = "yellow";
//     return false;
//   }
//   if (lastfield.value.length === 0) {
//     alert("Please enter your last name");
//     lastfield.focus();
//     lastfield.style.backgroundColor = "yellow";
//     return false;
//   }
//     firstfield.style.backgroundColor = "white";
//     lastfield.style.backgroundColor = "white";

  
// }

// function checkForSelection(){
//     let select = document.getElementById("states")

//     if(select.selectedIndex === 0 ){
//         alert("Please select a state.");
//         return false;
//     }
// }

// function validateRadios(){
//     let radios = document.getElementsByName("r1");

//     for(var i = 0; i < radios.length; i++){
//         if(radios[i].checked){
//             return true
//         }
//     }

//     alert("Please select a option");
//     return false;
    
// }

// function validateZIP(){
//     let zip = document.getElementById("zip").value.length;
//     if(zip < 5){
//         alert("Please enter a 5-digit number");
//         return false;
//     }
// }


// function validateZIP(){
//     let zip = document.getElementById("zip").value;
//     let numChars = zip.length;
//     if(numChars < 5){
//         alert("Please enter a 5-digit number");
//         return false;
//     }

//     for(var i = 0; i < 4; i++){
//         var thisChar = parseInt(zip[i]);
//         if(isNaN(thisChar)){
//             alert("Please enter valid numbers!");
//             return false;
//         }
//     }

// }


// function validateEmail(){
//     let email = document.getElementById("email").value;
//     console.log(email);
    

//     if(email.indexOf(" ") !== -1){
//         alert("No spaces allowed in email address!")
//         return false;
//     }

// }

// var email = "MeerQuais";

// console.log(email.indexOf(" "));



// function validateEmail(){
//     let email = document.getElementById("email").value;

//     var at = email.indexOf("@");
//     if(at < 1 || at > email.length - 5){
//         alert("Invalid Position of @")
//         return false;
//     }
//     return true;
// }

// function validateEmail(){
//     let email = document.getElementById("email").value;

//     let at = email.indexOf("@");
//     let dot = email.indexOf(".");

//     if(dot - at < 2 || dot > email.length - 3 ){
//         alert("Dot location invalid");
//         return false;
//     }
//     if(at < 1 || at > email.length - 5){
//          alert("Invalid Position of @")
//          return false;
//      }
//     if(email.indexOf(" ") !== -1){
//         alert("No spaces allowed in email address!")
//        return false;
//     }
//     return true;
// }

// function validateEmail(){
//     let e = document.getElementById("email").value;
//     let firstAt = e.indexOf("@");
//     let lastAt = e.lastIndexOf("@");

//     if(firstAt === -1 || firstAt !== lastAt){
//         alert("Email must contain Exactly One @");
//         return false;
//     }
//     return true;
// }

// function validateEmail(){
//     let e = document.getElementById("email").value.trim();
//     var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

//     if(!regex.test(e)){
//         alert("Enter a valid Email!")
//         return false;
//     }
//     return true;
// }


// function isValidPassword(password) {
//   const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
//   return strongPasswordRegex.test(password);
// }


// console.log(isValidPassword("abc123"));
// console.log(isValidPassword("Sameer@321"));
// console.log(isValidPassword("$03Captial"));


// function greetWorld(){

//     try {
//     var greeting = "Hello World!";
//     aler(greeting);
        
//     } catch (error) {
//         alert(error)
//     }



   
// }

// greetWorld()






// function greetWorld(){
//     let greet = "Hello World!";

//     aler(greet);
// }

// greetWorld()


// function greetWorld(){


//     try {
        
//         let greet = "Hello World!";
//         aler(greet)


//     } catch (error) {
//         alert(error)
//     }


// }

// greetWorld()





// function checkPassword(){
//     try {


//         let password = document.getElementById("f1").value;

//         if(password.length < 8){
//             throw "Please enter at least 8 chars"
//         }
//         if(password.indexOf(" ") !== -1){
//             throw "No spaces in the password, please.";
//         }

//         let numberSomewhere = false;

//         // for(var i = 0; i < password.length;i++){
//         //     if(isNaN(i , i +1) === false){
//         //         numberSomewhere = true;
//         //         break;
//         //     }
//         // }
//         // if(numberSomewhere === false){
//         //     throw "Please add at least 1 number."
//         // }



//     } catch (error) {
//         alert(error)
//     }
// }


// let pass = "Meer ";


// console.log(pass.indexOf(" ") !== -1);


// console.log(true == 1);
// console.log(false === -1);
