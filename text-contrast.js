function setColor() {
  rgbValue[0] = Math.round(Math.random() * 255);
  rgbValue[1] = Math.round(Math.random() * 255);
  rgbValue[2] = Math.round(Math.random() * 255);
  var color = Math.round(
    (parseInt(rgbValue[0]) * 299 +
      parseInt(rgbValue[1]) * 587 +
      parseInt(rgbValue[2]) * 114) /
      1000
  );
  var textColor = color > 125 ? 'black' : 'white';

  document.getElementById('time').style.color = textColor;
}

setColor();
