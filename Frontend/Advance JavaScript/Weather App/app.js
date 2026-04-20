console.log("JavaScript Connected!");


// let promise = new Promise((resolve , reject)=>{
//     // async kaam
// })


// let promise = new Promise((resolve, reject)=>{
//     resolve("Kaam Completed!");
// })

// promise.then((result)=>{
//     console.log(result);

// })


// let promise = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("2 second baad aya!");
//     }, 2000)
// });

// promise.then((result)=>{
//     console.log(result);

// })

// let promise = new Promise((resolve , reject)=>{
//     reject("Error aa gaya!");
// })


// promise.catch((error)=>{
//     console.log(error);
// })


// let age = 19;

// let checkAge = new Promise((resolve , reject)=>{

//     if(age >= 18){
//         resolve("Allowed!");
//     }else{
//         reject("Not Allowed!");
//     }
// });

// checkAge.then((msg)=>{console.log(msg);
// }).catch((err)=>{console.log(err);
// })


// fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) => res.json()).then((data)=>{
//     console.log(data.title);
//     console.log(data.body);
//     console.log(data.id);
//     console.log(data.userId);
    
// }).catch((err)=>{
//     console.log(err);
    
// })



// async function getRandomQuote() {
    
//     let response = await fetch("https://dummyjson.com/quotes/1");

//     let data = await response.json();

//     console.log(data.quote);
// }

// getRandomQuote()

// async function getJoke() {
//     let res = await fetch("https://official-joke-api.appspot.com/random_joke");

//     let data = await res.json();

//     console.log(data.setup);
//     console.log(data.punchline);
// }

// getJoke()


// async function getDogImage() {
//     let res = await fetch("https://dog.ceo/api/breeds/image/random");
//     let data = await res.json();

//     let img = document.getElementById("img");

//     img.src = data.message;
// }


// async function getMeme() {
//     let res = await fetch("https://meme-api.com/gimme");
//     let data = await res.json();

//     let img = document.createElement("img");

//     img.src = data.url;
//     img.style.width = "300px"

//     document.body.appendChild(img);
// };

// getMeme()


const apiKey = "a0cf5634089c42beb6f153243252810";

const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearBtn");
const cityNameInp = document.getElementById("cityNameInp");
const main = document.querySelector(".main");


searchBtn.addEventListener("click" , ()=>{
    const city = cityNameInp.value.trim();
    if(!city){
        alert("Please enter a city name");
        return
    }


    getWeather(city)
});


clearBtn.addEventListener("click", ()=>{
    cityNameInp.value = "";
    main.innerHTML = "";
});


async function getWeather(cityName) {
    

    main.innerHTML = `
    
        <div class="spinner-center>
        <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading..</span>
        </div>
        </div>`

    try {
        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`;


        if(!res.ok){
            if(res.status === 400 || res.status === 401){
                throw new Error("City not found.");
            }

            throw new Error("Network response was not ok.");
        }

        const data = await res.json();
        // console.log(data);

        const timestamp = data.location && data.location.localtime ? data.location.localtime : "-" ;
        const location = data.location && data.location.country ? data.location.country : "-" ;
        const icon = data.current && data.current.condition ? `https:${data.current.condition.icon}` : "-" ;
        const text = data.current && data.current.condition ? data.current.condition.text : "-";
        const temperature = data.current ? data.current.temp_c : "-" ;
        const humidity = data.current ? data.current.humidity : "-" ;
        const windSpeed = data.current ? data.current.wind_kph : "-";

        // console.log(timestamp);
        // console.log(icon);
        // console.log(text);
        // console.log(temperature);
        // console.log(humidity);
        // console.log(windSpeed);

        main.innerHTML = `
        
        
        <div class="result">
        <h4>${timestamp}</h4>
        <h4>${location}</h4>
        <div class="temp-row">
        ${icon ? `<img src="${icon}" alt="${text}" />` : ""}

        <h1>${temperature}°C</h1>
        </div>

        <p>${text}</p>
        <div class="small-info">
        <div>
        
        <div class="text-muted">Humidity</div>
        <div>${humidity}%</div>
        </div>



        </div>
        </div>
        </div>
        `
        
        



        
    } catch (error) {
        console.log("error: " , error);
        showError("Could not fetch weather. check city name or api key")
        
    }



}

function showError(message){
    main.innerHTML = `<div class="error">${message}</div>`
}