function execute() {
  picalc()
  document.getElementById('test').innerHtml = basiccal
}

function picalc() {
  switch (Ingredients[].name) {
    case "cheese":
      basiccal += Ingredients[0].calories;
      break;
    case "Ham":
      basiccal += Ingredients[1].calories;
      break;
    case "Salami":
      basiccal += Ingredients[2].calories;
      break;
    case "Corn":
      basiccal += Ingredients[3].calories;
      break;
  }
}
