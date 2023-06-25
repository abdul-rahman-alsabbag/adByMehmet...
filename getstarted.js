var x = document.getElementById("btnOptions");
var nav = document.getElementById("nav");
var clickCount = 0;

x.addEventListener('click', function() {
  clickCount++;
  if (clickCount === 1) {
    nav.style.display = "block";
  } else if (clickCount === 2) {
    nav.style.display = "none";
    clickCount = 0;
  }
});







