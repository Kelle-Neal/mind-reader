let directions = document.querySelector("directions");
let options = document.querySelector("options");
let answer = document.querySelector("answer");

let example = document.querySelector("example");
let info = document.querySelector("info");

let next = document.getElementById("next");
let reset = document.getElementById("reset");

let symbols = ["%", "$", "@", "&", "/", "(", "!", "#", "?"]

let state = {
  page: 0,
  pages: [
//page 0    
    {
      directions: "I can read your mind.",
      options: "",
      answer: "",
      example: "",
      info: "",
      next: "Start",
      reset: "",
    },
//page 1    
    {
      directions: "Pick a number from 1-99.",
      options: "",
      answer: "",
      example: "Pick your number",
      info: "Then click NEXT",
      next: "NEXT",
      reset: "Start Over",
    },
//page 2    
    {
      directions: "Add both digits together to get a new number.",
      options: "",
      answer: "",
      example: "Ex: 14 is now 1 + 4 = 5",
      info: "Click NEXT to continue.",
      next: "NEXT",
      reset: "Start Over",
    },
//page 3  
    {
      directions: "Subtract your new number from your original number.",
      options: "",
      answer: "",
      example: "Ex: 14 - 5 = 9",
      info: "Click NEXT to continue.",
      next: "NEXT",
      reset: "Start Over",
    },
//page 4    
    {
      directions: "",
      options: loadSymbols(symbols),
      answer: "",
      example: "Find your new number",
      info: "Remember the symbol<br>next to your number.",
      next: "REVEAL MY SYMBOL",
      reset: "Start Over",
    },
//page 5
    {
      directions: "Your Symbol is",
      options: "",
      answer: "%",
      example: "",
      info: "",
      next: "",
      reset: "Play Again",
    },                    
  ]
}



function loadSymbols(arr) {
  let x = []
  for (let i = 0; i < 100; i++) {
    x.push(symbols[i % 9])
  }
  for (let i = 0; i < 100; i++) {
    x[i] = i + " - " + x[i] + "<br>"
  }
  return x.toLocaleString().replaceAll(",", "");
}

function setPage(page) {
  directions.innerHTML = state.pages[page].directions;
    if(directions.innerHTML == "") {
      directions.style.visibility = "hidden"
    }
    else {
      directions.style.visibility = ""
    }
  options.innerHTML = state.pages[page].options;
    if(options.innerHTML == "") {
      options.style.visibility = "hidden"
    }
    else {
      options.style.visibility = ""
    }  

  answer.innerHTML = state.pages[page].answer;
    if(answer.innerHTML == "") {
      answer.style.visibility = "hidden"
    }
    else {
      answer.style.visibility = ""
    }
  example.innerHTML = state.pages[page].example;
    if(example.innerHTML == "") {
      example.style.visibility = "hidden"
    }
    else {
      example.style.visibility = ""
    }
  info.innerHTML = state.pages[page].info;
    if(info.innerHTML == "") {
      info.style.visibility = "hidden"
    }
    else {
      info.style.visibility = ""
    }
  next.innerHTML = state.pages[page].next;
    if(next.innerHTML == "") {
      next.style.visibility = "hidden"
    }
    else {
      next.style.visibility = ""
    }

  reset.innerHTML = state.pages[page].reset;
    if(reset.innerHTML == "") {
      reset.style.visibility = "hidden"
    }
    else {
      reset.style.visibility = ""
    }
  state.page = page;
  location.hash = page;



}



next.addEventListener("click", () => {
  setPage(state["page"] + 1)
})

reset.addEventListener("click", () => {
  setPage(0);
})

window.onhashchange = ()=> {
  setPage(Number(location.hash.replace("#","")))
}

setPage(Number(localStorage.getItem("page")));