console.log("JavaScript Connected!");



// function checkAddress(){

//     var value = document.getElementById("email").value.trim();

//     if(value === ""){
//         alert("Email Address is required!");
//         return false;
//     }

//     return true;

// }

// function checkEmail(){
    
//     var value = document.getElementById("email").value.trim();

//     var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//     if(!regex.test(value)){
//         alert("Enter a valid email for example : name@gmail.com");
//         return false;
//     }else{
//         alert("You have logged In!");
//         return true;
//     }
// }




// function checkAgree(){
//     var checked = document.getElementById("agree").checked; // true ya false.

//     if(!checked){
//         alert("You must Agree first.!")
//         return false
//     }

//     return true;

// }


// const text = "Hello world!";
// const pattern1 = /Hello/; // Matches "Hello"
// const pattern2 = /W3Schools/; // Does not match "W3Schools"

// let result1 = pattern1.test(text); // result1 will be true
// let result2 = pattern2.test(text); // result2 will be false

// console.log(result1); // Output: true
// console.log(result2); // Output: false


// function fillCity(){

//     var cityName;

//     var zipEntered = document.getElementById("zip").value;

//     switch(zipEntered){
//         case "60608":
//         cityName = "Chicago";
//         break;
//         case "68114":
//         cityName = "Omaha";
//         break;
//         case "53212":
//         cityName = "Milwaukee";
//         break;
//         case "75200":
//         cityName = "Karachi";
//     }

//     document.getElementById("city").value = cityName;  
// }


// function expandPara(){
//     var expandedPara = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum tempora eum natus reiciendis dolor. Accusantium tempore illo consequatur velit fugiat! Deleniti soluta totam facilis omnis, quis doloremque magni quam nihil!";
    
//     document.getElementById("para1").innerHTML = expandedPara

// }

function expandList(){

    var lists = "<li>HTML</li><li>CSS</li><li>JavaScript</li>";

    document.getElementById("list").innerHTML = lists

}