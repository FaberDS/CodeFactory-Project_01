

	var teamMember0 = teamMember[0];
    var teamMember1 = teamMember[1];
    var teamMember2 = teamMember[2];
    var teamMember3 = teamMember[3]; 
    var print0 = document.getElementById("card0");
    var print1 = document.getElementById("card1"); 
    var print2 = document.getElementById("card2");
    var print3 = document.getElementById("card3"); 
console.log(teamMember0);   
	print0.innerHTML = "</br>" + "<b>" + teamMember0.name + "</b>" +"</br>" + "<i>" + teamMember0.position + "</i>" + "</br>" + "Location: " + teamMember0.region + "</br>" + teamMember0.mail;
    print1.innerHTML = "</br>" + "<b>" + teamMember1.name + "</b>" + "</br>" + "<i>" + teamMember1.position + "</i>" + "</br>" + "Location: " + teamMember1.region + "</br>" + teamMember1.mail;
    print2.innerHTML = "</br>" + "<b>" + teamMember2.name + "</b>" + "</br>" + "<i>" + teamMember2.position + "</i>" + "</br>" + "Location: " + teamMember2.region + "</br>" + teamMember2.mail;
    print3.innerHTML = "</br>" + "<b>" + teamMember3.name + "</b>" + "</br>" + "<i>" + teamMember3.position + "</i>" + "</br>" + "Location: " + teamMember3.region + "</br>" + teamMember3.mail;



