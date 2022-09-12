// Farbe ändert
// jeder slider braucht eine variable
// variable für Farbe
// Farbe in Hexadezimalsytem

function changeColor() {
  let red = document.querySelector("#red").value;
  let green = document.querySelector("#green").value;
  let blue = document.querySelector("#blue").value;
  let color = rgbToHex (parseInt(red), parseInt(green), parseInt(blue));
  document.body.style.backgroundColor = color;
  document.querySelector("#color-value").innerText = " " + color;
}
changeColor();
document.querySelector("#red").addEventListener("input", changeColor);
document.querySelector("#green").addEventListener("input", changeColor);
document.querySelector("#blue").addEventListener("input", changeColor);

function rgbToHex(red, green, blue) {
  let hexRed = red.toString(16);
  let hexGreen = green.toString(16);
  let hexBlue = blue.toString(16);

  return "#" + prefixHex(hexRed) + prefixHex(hexGreen) + prefixHex(hexBlue)
}
function prefixHex(hex) {

  if (hex.length < 2) {
    return "0" + hex;
  } else {
    return hex
  }
}


