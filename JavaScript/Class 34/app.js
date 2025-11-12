console.log("JavaScript Connected!");

// var link = document.getElementById("link");

// console.log(link.hasAttribute("href"));
// console.log(link.hasAttribute("class"));

// console.log(link.getAttribute("href"));
// console.log(link.getAttribute("class"));

// link.setAttribute("class" , "links");

// console.log(link);

// var list = document.getElementById("p1")

// list.href = "";
// list.onclick = "check"

// console.log(list.length);
// console.log(list);

// console.log(list[0].nodeName);
// console.log(list[0].nodeValue);

// console.log(list[1].nodeName);
// console.log(list[1].nodeValue);

// console.log(list[2].nodeName);
// console.log(list[2].nodeValue);

// for (var i = 0; i < list.length; i++){
//     console.log("Name: " , list[i].nodeName, "Value: " , list[i].nodeValue);

// }

// var nodeToAdd = document.createElement("p");

// nodeToAdd.setAttribute("class","regular");

// var newText = document.createTextNode("Hello!");

// nodeToAdd.appendChild(newText);

// document.body.appendChild(nodeToAdd);

// console.log(nodeToAdd.removeChild());

// var plan1Name = "Basic";
// var plan1Price = 3.99;
// var plan1Space = 100;
// var plan1Data = 1000;
// var plan1Pages = 10;

// var plan2Name = "Professional";
// var plan2Price = 5.99;
// var plan2Space = 500;
// var plan2Data = 5000;
// var plan2Pages = 50;

// var plan1Name = "Ultimate";
// var plan1Price = 9.99;
// var plan1Space = 2000;
// var plan1Data = 20000;
// var plan1Pages = 500;

// var arr = [20,200,249,444];

// var obj = {
//     property:value,
// }

var plan1 = {
  name: "Basic",
  price: 3.99,
  space: 100,
  data: 1000,
  pages: 10,
};

var plan2 = {
  name: "Professional",
  price: 5.99,
  space: 500,
  data: 5000,
  pages: 50,
};

var plan3 = {
  name: "ultimate",
  price: 9.99,
  space: 2000,
  data: 20000,
  pages: 500,
};

console.log(plan1.space);
console.log(plan1["price"]);

plan1.newValue = "Test";

console.log(plan1);


plan1.name = "Simple";

console.log(plan1);


delete plan1.newValue;

console.log(plan1);


console.log("names" in plan1);

