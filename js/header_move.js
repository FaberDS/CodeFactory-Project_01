

//Headline Effect-------------------------------
//Event-Listener wasn't able to catch a local mouseover it was global ???????????????????????
// topAni = document.addEventListener("mouseenter", magic);
var topAni = document.getElementById("cLettercLetter");
var right = document.getElementById("rLetter");
var back = document.getElementById("letters");

// media query event handler-----------------------------------------------------
// const mq = window.matchMedia( "(min-width: 500px)" );
// if (matchMedia) {
//   const mq = window.matchMedia("(min-width: 600px)");
//   mq.addListener(WidthChange);
//   WidthChange(mq);
// }

//media query change-----------------------------------------
// function WidthChange(mq) {
//   if (mq.matches) {
//     // window width is at least 600px---------------------------
//     magic();
   
//   } else {
//     //window width is less than 600px--------------------------
//     magicSmall();
//   }

// }
function magic(){
	// left.style.transform= "translate(-170px,0)";
	right.style.transform= "translate(485px,0)";
	back.style.opacity= "1";
	setTimeout(magicReturn, 4000);
}

// function magicSmall(){
// 	x += 1;
// 	console.log(x);
// 	// left.style.transform= "translate(-170px,0)";
// 	right.style.transform= "translate(300px,0)";
// 	back.style.opacity= "1";
// 	setTimeout(magicReturn, 4000);
// }

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