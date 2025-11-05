console.log("JavaScript Connected!");



// var box = document.getElementById("box");

// for(var i = 0; i < box.childNodes.length; i++){
//     console.log(box.childNodes[i].nodeType);
    
// }



// var div = document.getElementById("box");

// var pCounter = 0;

// for(var i = 0; i < div.childNodes.length;i++){

// if(div.childNodes[i].nodeType === 1){
//     pCounter++
// }

// if(pCounter === 2){
//     div.childNodes[i].textContent = "Replaced!";
//     break;
// }
// }


// var ul = document.getElementById("menu");

// console.log(ul.firstChild);
// console.log(ul.firstElementChild);


// var ul = document.getElementById("menu");

// console.log(ul.lastChild);
// console.log(ul.lastElementChild);



// var ul = document.getElementById("menu");


// console.log(ul.lastElementChild.previousElementSibling.previousElementSibling);
// console.log(ul.firstElementChild.nextElementSibling.nextElementSibling);


// var div = document.getElementById("box1");


// console.log(div.firstChild.nodeName);
// console.log(div.firstElementChild.nodeValue);



// var parent = document.getElementById("div");

// var target = parent.firstChild;

// console.log(target.nodeValue);


// var parent = document.getElementById("div");

// var target = parent.firstElementChild;

// console.log(target.nodeValue);
// console.log(target.nodeName);


// var h2 = document.querySelector("h2");

// console.log(h2.innerHTML);

// console.log(h2.lastChild.nodeValue);


// DOM 3 main methods 

// 1. hasAttribute(name) --> check karta hai attribute exist karta hai ya nahi
// 2. getAttribute(name) --> attribute ki value nikalta hai.
// 3. setAttribute(name, value) --> attribute ko set ya phir update karta hai.


// var target = document.getElementById("p1");

// var hasClass = target.hasAttribute("class");

// console.log(hasClass);


// var target = document.getElementById("div1");

// var attValue = target.getAttribute("class");

// console.log(attValue);



// var target = document.getElementById("div2");

// target.setAttribute("class", "highlight");

// console.log(target.className);

// function showPassword(){
//     var inputPassword = document.getElementById("password");

//     if(inputPassword.type = "password"){
//         inputPassword.type = "text"
//     }
//     // if(inputPassword.type = "text"){
//     //     inputPassword.type = "password"
        
//     // }

// }



// var target = document.getElementById("div");
// target.setAttribute("class" , "blue");

// console.log(target.getAttribute("class"));


// var root = document.getElementById("root");


// var newElement = document.createElement("p");

// root.appendChild(newElement)

// newElement.setAttribute("id" , "test");

// console.log(newElement.getAttribute("id"));

// console.log(document.getElementById("test"));



function foo(){

}


var ele = document.getElementById("root");

console.log(ele.attributes);
