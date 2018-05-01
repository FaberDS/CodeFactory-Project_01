

//Headline Effect-------------------------------
//Event-Listener wasn't able to catch a local mouseover it was global ???????????????????????
// topAni = document.addEventListener("mouseenter", magic);
var topAni = document.getElementById("cLettercLetter");
var right = document.getElementById("rLetter");
var back = document.getElementById("letters");

// media query event handler-----------------------------------------------------
const mq = window.matchMedia( "(min-width: 500px)" );
if (matchMedia) {
  const mq = window.matchMedia("(min-width: 600px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
    // window width is at least 600px---------------------------
    magic();
   
  } else {
    // window width is less than 600px----------------------------
    magicSmall();
  }

}
function magic(){
	x += 1;
	console.log(x);
	// left.style.transform= "translate(-170px,0)";
	right.style.transform= "translate(485px,0";
	back.style.opacity= "1";
	setTimeout(magicReturn, 4000);
}

function magicSmall(){
	x += 1;
	console.log(x);
	// left.style.transform= "translate(-170px,0)";
	right.style.transform= "translate(300px,0";
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

//Change Content Index----------------------------------------------------

var btnIndex1 = document.getElementById("indexBtn")
var contentIndex2 = document.getElementById("content-top-2");
var contentIndex1 = document.getElementById("content-top-1");

btnIndex1 = document.addEventListener("click", changeContent);

function changeContent(){
	contentIndex1.style.transform= "rotateY(30deg)";
	contentIndex1.style.transform= "rotateY(60deg)";
	contentIndex1.style.transform= "rotateY(90deg)";

	setTimeout(secondContent, 2000);
}
function secondContent(){
	contentIndex2.style.display = "inline";

}

//Rotate function for first content --------------------------------
// var boxOne = document.getElementsByClassName('content-elements')[0];


// document.getElementById('indexBtn').onclick = function() {
//     boxOne.
// }

//Timer-----------------------------------------------------------------
// Set the date we're counting down to
var countDownDate = new Date("Jul 26, 2018 16:00:00").getTime();

// Update the count down every 1 second

var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("timer").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);