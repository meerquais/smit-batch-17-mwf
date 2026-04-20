console.log("JavaScript Connected!");

// var element = document.getElementById("para1");


// console.log(element.innerText);

// var paras = document.getElementsByTagName("p");

// console.log(paras[0].innerText);
// console.log(paras[1].innerText);


// Element node = 1
// Text node = 3 
// comment node = 8
// document node = 9

// var p1 = document.getElementById("p1");

// console.log(p1.parentNode);
// console.log(p1.nextSibling);
// console.log(p1.nextElementSibling);


// var list = document.getElementById("list");

// console.log(list.childNodes.length);
// console.log(list.children.length);
// console.log(list.children[0]);


// var element = document

// console.log(element.children[0].children[1].children[0].children[1]);



// var wrap = document.getElementById("wrap");

// console.log(wrap.firstChild);
// console.log(wrap.firstElementChild);
// console.log(wrap.lastChild);
// console.log(wrap.lastElementChild.previousElementSibling);

// var p = document.getElementById("p");

// console.log(p.childNodes);

// var  em = p.querySelector("em");

// console.log(em.firstChild.nodeValue);
// console.log(em.firstChild.textContent);


// var root = document.getElementById("root");

// var newPara = document.createElement("p");

// newPara.textContent = "Added Dynamically!";

// console.log(newPara);

// root.appendChild(newPara);

// console.log(newPara.parentNode === root);




// var root = document.getElementById("root");


// var newHeading = document.createElement("h1");

// newHeading.textContent = "Hello World!";

// root.appendChild(newHeading);


// var u = document.getElementById("u");

// var a = document.getElementById("a");

// // u.removeChild(a); // remove via parent

// a.remove(); // simple modern method 


// var newLi = document.createElement("li");

// newLi.textContent = "New";

// var b = document.getElementById("b");

// u.replaceChild(newLi, b);


// var eField = document.getElementById("email");

// console.log(eField);

// var paras = document.getElementsByTagName("p");

// console.log(paras[2].textContent);


// var p = document.getElementsByTagName("p");

// var contents = p[4].innerHTML

// console.log(contents);

var div = document.getElementById("cal");

var p = div.getElementsByTagName("p");

var contents = p[1].innerHTML;

console.log(contents);
