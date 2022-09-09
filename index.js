let clicked = ""

const clickedbutton = document.querySelectorAll(".item")

for(item in clickedbutton) {
	clickedbutton[item].onclick = function(){
        var changeDaColor = document.querySelectorAll(".whenclicked")[0];
    	if(this.className == "item") {
            if( changeDaColor ) changeDaColor.className = "item";
            this.className = "whenclicked";
        }
    }
  
}

document.querySelector("#firstvalue").addEventListener("click", buttonClicked)
document.querySelector("#secondvalue").addEventListener("click", buttonClicked2)
document.querySelector("#thirdvalue").addEventListener("click", buttonClicked3)
document.querySelector("#fourthvalue").addEventListener("click", buttonClicked4)
document.querySelector("#fifthvalue").addEventListener("click", buttonClicked5)


  function buttonClicked(event) {
  document.querySelector("#firstvalue")
  clicked = 1

}

function buttonClicked2(event) {
  document.querySelector("#secondvalue")
  clicked = 2
  
}

function buttonClicked3(event) {
  document.querySelector("#thirdvalue")
  clicked = 3
}

function buttonClicked4(event) {
  document.querySelector("#fourthvalue")
  clicked = 4
}

function buttonClicked5(event) {
  document.querySelector("#fifthvalue")
  clicked = 5
}


function nextPage() {
  document.querySelector(".button")
  location.href = "greeting.html";
  save()
}

function save() {
  var getInput = clicked;
  localStorage.setItem("drive", getInput);
}


function thankyou() {
  let collect = localStorage.getItem("drive")
  document.querySelector(".numberSelected").innerHTML = collect
}