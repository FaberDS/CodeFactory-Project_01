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
  ev.target.append(document.getElementById(id))
}

function cheese2()
{
  sum = pizza + cheese
  document.getElementById("calculator").innerHTML = "The calories of a Pizza with cheese are" + sum
}

function ham2()
{
  sum = pizza + ham
  document.getElementById("calculator").innerHTML = "The calories of a Pizza with ham are" + sum
}

function salami2()
{
  sum = pizza + salami
  document.getElementById("calculator").innerHTML = "The calories of a Pizza with salami are" + sum
}

function corn2()
{
  sum = pizza + corn
  document.getElementById("calculator").innerHTML = "The calories of a Pizza with corn are" + sum
}
