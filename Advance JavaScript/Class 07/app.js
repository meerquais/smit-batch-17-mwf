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


function validateZIP(){
    let zip = document.getElementById("zip").value;
    let numChars = zip.length;
    if(numChars < 5){
        alert("Please enter a 5-digit number");
        return false;
    }

    for(var i = 0; i < 4; i++){
        var thisChar = parseInt(zip[i]);
        if(isNaN(thisChar)){
            alert("Please enter valid numbers!");
            return false;
        }
    }

}