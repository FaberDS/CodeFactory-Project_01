// var teamMember1DisplayDetail = document.getElementById("teamMember1Detail");
// var teamMember1DisplayImg = document.getElementById("teamMember1Img");
// var teamMember1Detail = teamMember[0];

// teamMember1DisplayImg.innerHTML = '<img class="team-img"  Image" src="' + teamMember1Detail.image + '" alt="image Teammember 1">';

// teamMember1DisplayDetail.innerHTML = 	'<span class="nameEmployee">' + teamMember1Detail.name + '</span>' +
//        									'<br><span>' + teamMember1Detail.email + '</span>'+
//        									'<br><span>' + teamMember1Detail.quote + '</span>';

// teamMember2DisplayImg.innerHTML = 		'<img class="team-img"  Image" src="' + teamMember2Detail.image + '" alt="image Teammember 1">';

// teamMember2DisplayDetail.innerHTML = 	'<span class="nameEmployee">' + teamMember2Detail.name + '</span>' +
//        									'<br><span>' + teamMember2Detail.email + '</span>'+
//        									'<br><span>' + teamMember2Detail.quote + '</span>';

// teamMember2DisplayImg.innerHTML = 		'<img class="team-img"  Image" src="' + teamMember1Detail.image + '" alt="image Teammember 1">';

// teamMember2DisplayDetail.innerHTML = 	'<span class="nameEmployee">' + teamMember1Detail.name + '</span>' +
//        									'<br><span>' + teamMember1Detail.email + '</span>'+
//        									'<br><span>' + teamMember1Detail.quote + '</span>';


// teamMember2DisplayImg.innerHTML = 		'<img class="team-img"  Image" src="' + teamMember1Detail.image + '" alt="image Teammember 1">';

// teamMember2DisplayDetail.innerHTML = 	'<span class="nameEmployee">' + teamMember1Detail.name + '</span>' +
//        									'<br><span>' + teamMember1Detail.email + '</span>'+
//        									'<br><span>' + teamMember1Detail.quote + '</span>';

//-----------------------Timer
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