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
      a: "<js>",
      b: "<javascript>",
      c: "<script>",
      d: "<code>"
    },
    answer: "<script>"
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






}

