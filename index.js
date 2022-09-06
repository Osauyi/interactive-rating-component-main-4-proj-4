
let clicked = ""

function buttonClicked(){
document.querySelector(".item")
  clicked = 1
}

function buttonClicked2(){
document.querySelector(".item")
  clicked = 2
}

function buttonClicked3(){
document.querySelector(".item")
  clicked = 3
}

function buttonClicked4(){
document.querySelector(".item")
  clicked = 4

}

function buttonClicked5(){
document.querySelector(".item")
  clicked = 5
}


function nextPage(){
  document.querySelector(".button")
  location.href = "greeting.html";
  save()
}

function save() {
  var getInput = clicked;
  localStorage.setItem("drive",getInput);
}


function thankyou(){
let collect = localStorage.getItem("drive")
document.querySelector(".numberSelected").innerHTML = collect
}
