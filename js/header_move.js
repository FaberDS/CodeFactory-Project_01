

//Headline Effect-------------------------------
//Event-Listener wasn't able to catch a local mouseover it was global ???????????????????????
// topAni = document.addEventListener("mouseenter", magic);
var topAni = document.getElementById("cLettercLetter");
var right = document.getElementById("rLetter");
var back = document.getElementById("letters");



// media query change-----------------------------------------
var width = window.innerWidth
console.log(width);
function WidthChange() {

  if (width >= 800) {
    // window width is at least 600px---------------------------
    magic();
    
   console.log("if2");
  } else if (width >= 600) {
    //window width is less than 600px--------------------------
    magicSmall();
     console.log("else");
  }

}
function magic(){
	// left.style.transform= "translate(-170px,0)";
	right.style.transform= "translate(465px,0)";
	back.style.opacity= "1";
	setTimeout(magicReturn, 4000);
}

function magicSmall(){
	x += 1;
	console.log(x);
	// left.style.transform= "translate(-170px,0)";
	right.style.transform= "translate(280px,0)";
	back.style.opacity= "1";
	setTimeout(magicReturn, 4000);
}

function magicReturn(){
	inVisible();
	setTimeout(leftMove, 3000);
}
function leftMove(){
	// left.style.transform= "translate(0,0)";
	right.style.transform= "translate(0,0)";

}
function inVisible(){
	back.style.opacity= "0";
}