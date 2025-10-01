console.log("JavaScript Connected!");



// var now = new Date();

// console.log(now);
// console.log(typeof now);
// console.log(typeof now.toString());

// document.write(now)

// Date Methods

// getDay() ===> gets days always returns number = Sun = 0 , Sat = 6


// var now = new Date();

// var day = now.getDay();

// console.log(day);


// var dayNames = ["Sun" , "Mon" , "Tue" , "Wed" , "Thu" , "Fri" , "Sat"];

// var now = new Date();

// var day = now.getDay();

// var currentDay = dayNames[day];

// console.log(currentDay);

// getMonth() ===> gets month , always returns number, Jan = 0 , Dec = 11

// var now = new Date();

// var month = now.getMonth();

// console.log(month);

// var monthNames = ["Jan" , "Feb" , "Mar" , "Apr" , "May" , "Jun" , "Jul" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"];

// var now = new Date();

// var month = now.getMonth();

// var currentMonth = monthNames[month];

// console.log(currentMonth);

// getDate() ===> gets current date. 1st to 31st.

// var now = new Date();

// var date = now.getDate();

// console.log(date);

// getFullYear() ===> gets current Year. xxxx 4 digits!


// var now = new Date();

// var year = now.getFullYear();

// console.log(year);

// getHours ===> gets current hour = 2 digits 00 , 24 hours format 00 to 23

// var now = new Date();

// var hour = now.getHours();

// console.log(hour);

// getMinutes() ===> get current minutes , 0 to 59 

// var now = new Date();

// var minutes = now.getMinutes();

// console.log(minutes);

// getSeconds() ===> gets current second, 0 to 59


// var now = new Date();

// var seconds = now.getSeconds();

// console.log(seconds);

// getMillieseconds() ===> gets current millieseconds , 0 to 999

// var now = new Date();

// var millieSeconds = now.getMilliseconds();


// console.log(millieSeconds);



// getTime() ===> gets millieseconds from epoch , 1970 jan 1st midnight.

// var now = new Date();

// var time = now.getTime();


// console.log(time);

// Specifying a date and time


// var now = new Date();


// var doomsday = new Date("Jan 1,2026");

// var msNow = now.getTime();
// var msDoomsday = doomsday.getTime();

// var msDiff = msDoomsday - msNow ;

// var days = msDiff / (1000 * 60 * 60 * 24 * 31);

// console.log(Math.floor(days));


// Age Calculator 

var userInput = prompt("Type your Birthdate. Ex:June 15, 2015");

var today = new Date();

var birthDate = new Date(userInput);

var msToday = today.getTime();
var msBirthDate = birthDate.getTime();

var diff = msToday - msBirthDate;

var days = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12)); 

console.log(days);















