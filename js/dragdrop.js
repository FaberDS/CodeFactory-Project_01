var pizza = Number(document.getElementById('basiccal').getAttribute('value'))
var cheese = Number(document.getElementById('cheese').getAttribute('value'))
var ham = Number(document.getElementById('ham').getAttribute('value'))
var corn = Number(document.getElementById('corn').getAttribute('value'))
var salami = Number(document.getElementById('salami').getAttribute('value'))
var sum = 0
var id;

function allowDrop(ev)
{
  ev.preventDefault();
}

function dragStart(ev)
{
  id=ev.target.id;
  //alert(id);
}

function drop(ev)
{
  //ev.target.append(document.getElementById(id))
}

function cheese2()
{
  var image = document.getElementById("changedat")
  sum = pizza + cheese
  document.getElementById("calculator").innerHTML = "The calories of a Pizza with cheese are " + sum
  image.src = "./img/cheesepizza.jpg"
}

function ham2()
{
  var image = document.getElementById("changedat")
  sum = pizza + ham
  document.getElementById("calculator").innerHTML = "The calories of a Pizza with ham are " + sum
  image.src = "./img/hampizza.png"
}

function salami2()
{
  var image = document.getElementById("changedat")
  sum = pizza + salami
  document.getElementById("calculator").innerHTML = "The calories of a Pizza with salami are " + sum
  image.src = "./img/salamipizza.png"
}

function corn2()
{
  var image = document.getElementById("changedat")
  sum = pizza + corn
  document.getElementById("calculator").innerHTML = "The calories of a Pizza with corn are " + sum
  image.src = "./img/cornpizza.png"
}
