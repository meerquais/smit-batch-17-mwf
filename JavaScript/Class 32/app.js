console.log("JavaScript Connected!");


// var para1 = document.getElementById("para1");

// console.log(para1);

// var paraParent = para1.parentNode.parentNode.parentNode.parentNode;

// console.log(paraParent);

// var element = document.children[0].children[1].children[1].children[0].children[0];

// console.log(element);


// var paras = document.getElementsByTagName("p");

// console.log(paras[4]);

// var container = document.getElementById("ny");

// console.log(container);

// var paras = container.getElementsByTagName("p");

// console.log(paras[1]);




// var i = 0;

// while(condition){
//     // block of code 
//     // i++ 
// }

// var count = 1;
// var i = 1;

// while(i <= 5){
//     console.log("Count: " + i);
//     // i++
// }


// var i = 1;

// do{
//     console.log("i: " + i);
//     i++  
// }while(i >=5)

// var a = 10;

// while(a < 5){
//     console.log("ye nahi chalega!");
    
// }


// var a = 10;

// do{
//     console.log("Ye ek baar chalega!");
// }while(a < 5);


// var div = document.getElementById("sample");

// console.log(div.children);



// var NewPara = document.createElement("p");

// NewPara.textContent = "This is a paragraph created dynamically!";

// var root = document.getElementById("root");

// root.appendChild(NewPara);


// root.innerHTML = "<p>This is also an paragraph crated dynamically!</p>";


console.log(document.children[0].children[1]);

var body = document.children[0].children[1]

var newHeading = document.createElement("h1");

newHeading.textContent = "This is a heading created Dynamically using js!";

body.appendChild(newHeading)