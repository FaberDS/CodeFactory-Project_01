

//Headline Effect-------------------------------

var topAni = document.getElementById("cLettercLetter");
var right = document.getElementById("rLetter");
var back = document.getElementById("letters");



// media query change---------------------------------------------------------------
var width = window.innerWidth
console.log(width);
function WidthChange() {

  if (width >= 800) {
    // window width is at least 800px---------------------------
    magic();
    
   console.log("if");
  } else if (width >= 680) {
    //window width is less than 600px--------------------------
    magicSmall();
     console.log("else");
  } else{
  	right.style.transform= "translate(-40px,0)";
  	visible();
  }

}
function magic(){
	// left.style.transform= "translate(-170px,0)";
	right.style.transform= "translate(475px,0)";
	visible();
	setTimeout(magicReturn, 4000);
}

function magicSmall(){

	// left.style.transform= "translate(-170px,0)";
	right.style.transform= "translate(460px,0)";
	visible();
	setTimeout(magicReturn, 4000);
}

function magicReturn(){
	inVisible();
	setTimeout(leftMove, 3000);
}
function visible(){
	back.style.opacity= "1";
}
function inVisible(){
	back.style.opacity= "0";
}




//Contact us function---------------------------------------------------------
var contactBtn = document.getElementById("contactLink");
contactBtn.addEventListener("click", infoPrompt, false);

function infoPrompt(){
    alert ('This Function is at the moment under construction, please hold on!');
}



