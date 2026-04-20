console.log("JavaScript Connected!");


// var cities = ["Karachi" , "Lahore" , "Islamabad" , "Quetta"];

// var cityToCheck = prompt("Type your City");

// var isFound = false;


// for(var i = 0; i < cities.length;i++){

//     if(cityToCheck === cities[i]){
//         isFound = true;
//         console.log("City Found");        
//         break;
//     }
// }

// if(isFound === false){
//     console.log("City not found!");
// }



// var arr = [["Apple" , "Mango" , "Banana"]];

// console.log(arr);

// console.log(arr[0][1]);


// var arr = [ ["Apple"] , ["Mango"] ,["Banana"]];

// console.log(arr[2][0] + " " + arr[0][0]);


// for(init;condition;incre/decre){

//     for(init ; condition ; incre/decre){
//     }
// }



// for(var i = 1; i <= 10; i++){
//     console.log("2 x " + i + " = " + (2*i) );
    
// }


// for(var i = 2; i <= 5;i++){

//     console.log("Table of " + i);

//     for(var j = 1; j <= 10;j++){

//         console.log(i + " x " + j + " = " + (i * j));
        
//     }
    
//     console.log("---------------------");
// }



// for(var i = 1; i <=10; i++){
//     console.log("1 x " + i + " = " + (1 * i));
// }
// for(var i = 1; i <=10; i++){
//     console.log("2 x " + i + " = " + (2 * i));
// }


// for(var i = 1; i <= 10;i++){

//     console.log("Table of " + i);
//     console.log("--------------------------------");
//     for(var j = 1; j <= 10;j++){

//         console.log(i + " x " + j + " = " + (i * j));
//     }

//     console.log("--------------------------------");
// }



// for(var i = 1; i <=5;i++){

//     var star = ""

//     for(var j = 1; j <= i; j++){
//         star += "* ";
//     }

//     console.log(star);

// }


var students = [
    ["Ali" , "Math" , "English"],
    ["Saad" , "Sci" , "Urdu"],
    ["Mehboob" , "History" , "JavaScript"]
]


for(var i = 0; i < students.length; i++){

    console.log("Student: " + students[i][0]);

    for(var j=1 ; j < students[i].length; j++){
        console.log("Subjects: " + students[i][j]);
        
    }
    



}