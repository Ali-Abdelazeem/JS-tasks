const startEl = document.getElementById("start");
console.log(startEl);
const stopEl = document.querySelector(".stop");
const resetEl = document.querySelector(".reset");
const inputEl = document.getElementById("input");
const setEl = document.getElementById("set");
const outputEl = document.querySelector(".output");



let counter
if (localStorage.getItem("counter") && localStorage.getItem("minutes") && localStorage.getItem("seconds")) {
  counter = localStorage.getItem("counter")
  let minuteslocal = localStorage.getItem("minutes")
  let secondslocal = localStorage.getItem("seconds")
  inputEl.value = counter
  outputEl.innerHTML = `${minuteslocal.toString().padStart(2, "0")}: ${secondslocal
    .toString()
    .padStart(2, "0")}`;
}

let starting = localStorage.getItem("starting");
function filloutput() {
  clearInterval(interval);
  starting =  inputEl.value * 60;
  localStorage.setItem("counter", inputEl.value)
  updateTimer();
}

function updateTimer() {
  
  let minutes = Math.floor(starting / 60);
  let seconds = Math.floor(starting % 60);
  localStorage.setItem("minutes", minutes)
  localStorage.setItem("seconds", seconds)
  outputEl.innerHTML = `${minutes.toString().padStart(2, "0")}: ${seconds
    .toString()
    .padStart(2, "0")}`;
    
}


let interval = null;
function starttimer() {
  console.log("ali start")

  interval = setInterval(() => {
    if (starting <= 0) {
      
      clearInterval(interval);
      starting = 0;
    } else {
      starting--;
      updateTimer();
      console.log(starting)
     
    }
    localStorage.setItem("starting" , starting)
  }, 1000);
  
}



function stoptimer() {
  clearInterval(interval);
  

  console.log("aaaaaaaaaaaaaaaaaaaaa");
}

function resettimer() {
  clearInterval(interval);
  interval = null
  starting = 0;
  inputEl.value = "";
  updateTimer();
}

setEl.addEventListener("click", filloutput);
startEl.addEventListener("click", starttimer);
stopEl.addEventListener("click", stoptimer);
resetEl.addEventListener("click", resettimer);


















// outputEl.innerHTML='00: 00'

// let starting = 0;
// function filloutput() {
//   starting = inputEl.value * 60;
//   updateTimer();
// }

// function updateTimer() {
//   let minutes = Math.floor(starting / 60);
//   let seconds = Math.floor(starting % 60);
//   outputEl.innerHTML = `${minutes.toString().padStart(2, "0")}: ${seconds
//     .toString()
//     .padStart(2, "0")}`;
// }

// let interval = null;
// function starttimer() {
//     starting = inputEl.value * 60;
//     if (interval === null) {
//         console.log("ali")
//         interval = setInterval(() => {
//             if (starting <= 0) {
//               clearInterval(interval);
//               starting = 0;
//             } else {

//               starting--;
//               updateTimer();
//             }
//           }, 1000);
//     }

// }

// function stoptimer() {
//   clearInterval(interval);
//   console.log("aaaaaaaaaaaaaaaaaaaaa");
// }

// function resettimer() {
//   clearInterval(interval);
//   interval = null
//   starting = 0;
//   inputEl.value = "";
//   updateTimer();
// }

// setEl.addEventListener("click", filloutput);
// startEl.addEventListener("click", starttimer);
// stopEl.addEventListener("click", stoptimer);
// resetEl.addEventListener("click", resettimer);


