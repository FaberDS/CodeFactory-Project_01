

//Change Content Index----------------------------------------------------

var btnIndex1 = document.getElementById("indexBtn")
var contentIndex2 = document.getElementById("content-top-2");
var contentIndex1 = document.getElementById("content-top-1");

btnIndex1 = document.addEventListener("click", changeContent);

function changeContent(){
	contentIndex1.style.transform= "rotateY(30deg)";
	contentIndex1.style.transform= "rotateY(60deg)";
	contentIndex1.style.transform= "rotateY(90deg)";
 
	setTimeout(secondContent, 10);
}
function secondContent(){
	contentIndex2.style.display = "inline";
  contentIndex1.style.display = "none";
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
});
var contactBtn = document.getElementById("contactLink");
contactBtn.addEventListener("click", infoPrompt, false);

function infoPrompt(){
    alert ('This Function is at the moment under construction, please hold on!');
}


















