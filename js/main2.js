let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

let p1 = document.querySelector("p1");
let p2 = document.querySelector("p2");

let next = document.getElementById("next");
let reset = document.getElementById("reset");

let symbols = ["%", "$", "@", "&", "/", "(", "!", "#", "?"]

let state = {
  page: 0,
  pages: [
//page 0    
    {
      header: "I can read your mind.",
      options: "",
      answer: "",
      example: "",
      info: "",
      button: "Start",
      return: "",
    },
//page 1    
    {
      header: "Pick a number from 1-99.",
      options: "",
      answer: "",
      example: "",
      info: "When you have picked your number click NEXT",
      button: "NEXT",
      return: "Restart",
    },
//page 2    
    {
      header: "Add both digits together to get a new number.",
      options: "",
      answer: "",
      example: "Ex: 14 is now 1 + 4 = 5",
      info: "Click NEXT to continue.",
      button: "NEXT",
      return: "Restart",
    },
//page 3  
    {
      header: "Subtract your new number from your original number.",
      options: "",
      answer: "",
      example: "Ex: 14 - 5 = 9",
      info: "Click NEXT to continue.",
      button: "NEXT",
      return: "Restart",
    },
//page 4    
    {
      header: "",
      options: loadSymbols(symbols),
      answer: "",
      example: "Find your new number",
      info: "Remember the symbol next to your number.",
      button: "REVEAL MY SYMBOL",
      return: "Restart",
    },
//page 5
    {
      header: "Your Symbol is",
      options: "",
      answer: "%",
      example: "",
      info: "",
      button: "",
      return: "/uF130",
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
  h1.innerHTML = state.pages[page].header;
  h2.innerHTML = state.pages[page].options;
  h3.innerHTML = state.pages[page].answer;
  p1.innerHTML = state.pages[page].example;
  p2.innerHTML = state.pages[page].info;
  next.innerHTML = state.pages[page].button;
  reset.innerHTML = state.pages[page].return;
  state.page = page;
  location.hash = page;

    if(next.innerHTML == "") {
      next.style.display = "none";
    }
    else {
      next.style.display = ""
    }
    (page == 0 ? go.innerHTML = "Reset" : go.innerHTML = "\uF130")
    localStorage.setItem("page", state.page) 
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