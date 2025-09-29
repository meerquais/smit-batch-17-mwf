console.log("JavaScript Connected!");


// var num = "43.93 ";

// console.log(parseInt(num));

// console.log(parseFloat(num));

// console.log(Number(num));

// console.log(+num);


// var number = 55.99;

// console.log(typeof number.toString()); 



// var num = 99.9999999; 

// console.log(num.toFixed(2));



// var rightNow = new Date();

// var dateString= rightNow.toString();



// console.log(typeof dateString);


// console.log(rightNow);

// var rightNow = new Date();

// var theDay = rightNow.getDay();


// console.log(theDay);


// var dayNames = ["Sun" , "Mon" , "Tue" , "wed" , "Thu" , "Fri" , "Sat"];


// var now = new Date();
// var theDay = now.getDay();

// var nameOfTheDay = dayNames[theDay];

// console.log(nameOfTheDay);

// var dayNames = ["Sun" , "Mon" , "Tue" , "wed" , "Thu" , "Fri" , "Sat"];

// var now = new Date();

// console.log(now);


// var day = now.getDay();

// console.log(day);

// var nameOfTheDay = dayNames[day];

// console.log(nameOfTheDay);


// getDay() ===> get day of the Week. 0 = sun , 6 = sat


// var now = new Date();

// var day = now.getDay();

// console.log(day);


// getMonth() ===> get current Month of the year.  0 = jan , 11 = dec



// var monthNames = ["jan" , "feb" , "mar" , "apr" , "may" , "jun" , "jul" , "aug" , "sep" , "oct" , "nov" , "dec"];

// var now = new Date();

// var month = now.getMonth();

// var nameOfTheMonth = monthNames[month]

// console.log(month);
// console.log(nameOfTheMonth);

// getDate() ===> get current date of the month. 1st , 31st 

// var now = new Date();

// var date = now.getDate();

// console.log(date);


// getFullYear() ===> get current year.

// var now = new Date();

// var year = now.getFullYear();

// console.log(year);


// getHours() ===> get hour = 0 - 23

// var now = new Date();

// var hour = now.getHours();

// console.log(hour);


// getMinutes() ===> gets minutes = 0 - 59

// var now = new Date();

// var minute = now.getMinutes();

// console.log(minute);



// getSeconds() ===> gets seconds = 0 - 59 

// var now = new Date();

// var second = now.getSeconds();

// console.log(second);


// getMilliSeconds() ====> gets miliseconds = 0 - 999 

// var now = new Date();

// var milisecond = now.getMilliseconds();

// console.log(milisecond);


// getTime() ===> milliseconds since epoch (midnight , jan 1st , 1970); 


// var now = new Date();

// var time = now.getTime();

// console.log(time);

// Specifying a date and time



var today = new Date();

var doomsday = new Date("June 30, 2035");

var time = today.getTime();

var doomsdayTime = doomsday.getTime();

var msDiff  = doomsdayTime - time;

var dDiff = msDiff / (1000 * 60 * 60 * 24);

var dDiff = Math.floor(dDiff);

console.log(dDiff);


console.log(today);
console.log(doomsday);
console.log(time);
console.log(doomsdayTime);
console.log(msDiff);























