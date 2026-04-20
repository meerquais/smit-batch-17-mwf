let quesArray = [
  {
    num: 1,
    question: "JavaScript mein variable declare karne ke liye kaunsa keyword use hota hai?",
    Option: {
      a: "var",
      b: "int",
      c: "string",
      d: "float"
    },
    answer: "var"
  },
  {
    num: 2,
    question: "JavaScript ka kaunsa data type nahi hai?",
    Option: {
      a: "Number",
      b: "Boolean",
      c: "Float",
      d: "String"
    },
    answer: "Float"
  },
  {
    num: 3,
    question: "JavaScript code ko HTML mein add karne ke liye kaunsa tag use hota hai?",
    Option: {
      a: "js",
      b: "javascript",
      c: "script",
      d: "code"
    },
    answer: "script"
  },
  {
    num: 4,
    question: "JavaScript mein array index kis se start hota hai?",
    Option: {
      a: "1",
      b: "0",
      c: "-1",
      d: "2"
    },
    answer: "0"
  },
  {
    num: 5,
    question: "JavaScript mein function ka correct syntax kaunsa hai?",
    Option: {
      a: "function myFunc() {}",
      b: "def myFunc() {}",
      c: "func myFunc() {}",
      d: "create myFunc() {}"
    },
    answer: "function myFunc() {}"
  },
  {
    num: 6,
    question: "JavaScript mein === operator ka kya kaam hai?",
    Option: {
      a: "Value compare karta hai",
      b: "Type compare karta hai",
      c: "Value aur type dono compare karta hai",
      d: "Assignment karta hai"
    },
    answer: "Value aur type dono compare karta hai"
  },
  {
    num: 7,
    question: "JavaScript mein object kaise banaya jata hai?",
    Option: {
      a: "var obj = {}",
      b: "var obj = []",
      c: "var obj = ()",
      d: "var obj = <>"
    },
    answer: "var obj = {}"
  },
  {
    num: 8,
    question: "JavaScript mein kaunsa loop nahi hota?",
    Option: {
      a: "for",
      b: "while",
      c: "foreach",
      d: "do-while"
    },
    answer: "foreach"
  },
  {
    num: 9,
    question: "JavaScript mein null ka matlab kya hota hai?",
    Option: {
      a: "Undefined value",
      b: "Empty string",
      c: "No value",
      d: "Zero"
    },
    answer: "No value"
  },
  {
    num: 10,
    question: "JavaScript mein console.log() ka use kya hai?",
    Option: {
      a: "Data store karna",
      b: "Output print karna",
      c: "HTML create karna",
      d: "Function call karna"
    },
    answer: "Output print karna"
  }
]



// dom selectors
let userForm = document.querySelector(".formwrapper");
let startScreen = document.querySelector(".start");
let quizBody = document.querySelector(".quizbody");
var resultBody = document.querySelector(".result");


console.log(userForm);
console.log(startScreen);
console.log(quizBody);
console.log(resultBody);


let inpName = document.getElementById("inp_name");
let inpEmail = document.getElementById("inp_email");
let inpRoll = document.getElementById("inp_roll");
let inpInst = document.getElementById("inp_inst");


let Ques = document.getElementById("ques");
let Opt = document.getElementById("opt").children;

let btn3 = document.querySelector(".btn3");

let ttlq = document.querySelector(".ttlq");
let ttl = document.querySelector("#ttl");
let ra = document.querySelector("#ra");
let wa = document.querySelector("#wa");
let perc = document.querySelector("#perc");
let define = document.querySelector(".define");


let resName = document.getElementById("res-name");
let resEmail = document.getElementById("res-email");
let resRoll = document.getElementById("res-roll");
let resInst = document.getElementById("res-inst");

let circularProgress = document.querySelector(".circular-progress");
let progressValue = document.querySelector(".prgress-value");



let totalQus = quesArray.length;
let corrAns = 0;
let wrngAns = 0;
var counter = 0;

function startQuiz(){

    if(!inpName.value || !inpEmail.value || !inpRoll.value || !inpInst.value){
        Swal.fire({
  title: "Wrong Number!",
  text: "Please fill all the value!",
  icon: "error"
});
  }

  userForm.style.display = "none";
  startScreen.style.display = "flex"


  document.getElementById("para-name").innerText = inpName.value
  document.getElementById("para-email").innerText = inpEmail.value
  document.getElementById("para-roll").innerText = inpRoll.value

  ttlq.innerHTML = totalQus;

}

function loadQuestion(){
  quizBody.style.display = "flex";
  startScreen.style.display = "none";


  let q = quesArray[counter];

  Ques.innerHTML = q.question;
  Opt[0].innerHTML = q.Option.a
  Opt[1].innerHTML = q.Option.b
  Opt[2].innerHTML = q.Option.c
  Opt[3].innerHTML = q.Option.d

  console.log(q);

  document.querySelector(".numb").innerHTML = counter + 1

  for(let li of Opt){
    li.classList.remove("correctAns" , "wrongAns" , "disableli");
    li.setAttribute("onclick" , "selectOpt(this)");
  }

  btn3.style.display = "none"
}

function selectOpt(ele){

  if(ele.innerHTML === quesArray[counter].answer){
    ele.className = "correctAns";
    corrAns++
  }else{
    ele.className = "wrongAns";
    wrngAns++
  
    for(let li of Opt){
    if(li.innerHTML === quesArray[counter].answer){
      li.classList.add("correctAns");
    }
  }
}

  for(let li of Opt){
    li.classList.add("disableli");
    btn3.style.display = "block";
  }

}


function nextQuestion(){

  counter++
  if(counter < quesArray.length){
    loadQuestion()
  }else{
    showResult()
  }
}


function showResult(){

  quizBody.style.display = "none";
  resultBody.style.display = "flex";

  resName.innerHTML = inpName.value
  resEmail.innerHTML = inpEmail.value
  resRoll.innerHTML = inpRoll.value
  resInst.innerHTML = inpInst.value;


  ttl.innerHTML = quesArray.length;
  ra.innerHTML = corrAns;
  wa.innerHTML = wrngAns;

  let percentage = Math.round((corrAns / totalQus) * 100);

  perc.innerHTML = percentage + "%";

  if(percentage < 60){
    define.innerHTML = "Sorry you failed! Try Again!"

    define.classList.add("fail-para")
  }else{
    define.innerHTML = "Congo, You Passed!";

    define.classList.add("pass-para");
  }


  let progressStart = 0;
  
  let progressEnd;


  if(percentage <0){
    progressEnd = 1
  }else{
    progressEnd = percentage
  }


  let speed = 100;
  let progress = setInterval(() => {
    progressStart = progressStart +1;
    progressValue.textContent = progressStart + "%"

    circularProgress.style.background = "conic-gradient(#4caf50 " + (progressStart * 3.6) + "deg, #ededed"

    if(progressStart >= progressEnd){
      clearInterval(progress)
    }



  }, speed);





}

