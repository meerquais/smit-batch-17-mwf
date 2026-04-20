console.log("JavaScript Connected!");

// var students = [
//     ["Ali" , 18 , "Maths"],
//     ["Mehboob" , 21 , "Science"],
//     ["Saad" , 21 , "Urdu"]
// ];

// console.log(students[0][0]);


// var marks = [

//     ["Ali",[80,90,70]],
//     ["Omer",[75,85,100]],
//     ["Ahmed",[60,90,65]]
// ];



// var marks = [
//     ["Ali", [80,90,70]],
//     ["Omar", [85,95,100]],
//     ["Ahmed", [60,75,65]]
// ];

// console.log("Student " + marks[0][0] + " Marks " + marks[0][1][1]);
// console.log("Student " + marks[1][0] + " Marks " + marks[1][1][1]);


// console.log(marks[0][0]);


// var matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];


// for(var i = 0; i < matrix.length; i++){

//     console.log(matrix[i]);

// }


// for(var i =0 ; i < matrix.length; i++){

//     for(var j = 0; j < matrix[i].length; j++){


//         console.log("Row " + i + " Column " + j + " = " + matrix[i][j]);


//     }



// }


// var students = [
//     ["Ali" , "Math" , "History"],
//     ["Omar" , "Sci" , "English"],
//     ["Mehboob" , "Urdu" , "Math"]
// ];



// for(var i =0; i < students.length; i++){

//     console.log("Student: " + students[i][0]);

//     for(var j = 1; j < students[i].length; j++){

//         console.log("Subject: " + students[i][j]);
//     }
// }




// var marks = [
//     ["Ali", [80,90,70]],
//     ["Omar", [85,95,100]],
//     ["Ahmed", [60,75,65]]
// ];


// for(var i = 0; i < marks.length;i++){

//     var total = 0;

//     for(var j = 0 ; j < marks[i][1].length;j++){

//         total += marks[i][1][j];
//     }

//     console.log(marks[i][0] + " total marks = " + total);


// }


// var student = "Meer";

// student = 10;

// var student = undefined;

// console.log(student);


// var num = 2 + 2;
// var num1 = 2 * 2;
// var num2 = 2 - 2;
// var num3 = 2 / 2;
// var num4 = 2 % 2;

// console.log(num);
// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(num4);



// var num = (20 - 20) * 10 ;

// console.log(num);


// var num = 1;
// var num2 = "1";

// console.log(num + num2);


// var userName = prompt("Type your name");


// alert("Welcome to our website Mr " + userName);

// var age = 77;

// if(age > 18){
//     console.log("Allowed!");
// }else{
//     console.log("Not Allowed!");
// }

// if(age <= 18){
//     console.log("Minor");
// }else if(age >=50){
//     console.log("Old");
// }else{
//     console.log("Young Adult!");
// }


var age = 116;

// console.log(age !== "18");

if(age >=18 || age <= 100){
    console.log("allowed");
}else{
    console.log("Not Allowed!");
}