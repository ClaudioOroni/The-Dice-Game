// Start of Merging images within the Math.random function
function myFunction() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var images1 = "images/dice" + randomNumber1 + ".png";
  var images2 = "images/dice" + randomNumber2 + ".png";

  document.querySelector(".dice .img1").setAttribute("src", images1);
  document.querySelector(".dice .img2").setAttribute("src", images2);

  // End of Merging images within the Math.random function

  if (randomNumber1 < randomNumber2) {
    console.log(document.querySelector(".container h1").innerHTML =  "Player 2 wins 🏁 ");

  } else if (randomNumber2 < randomNumber1) {
    console.log(document.querySelector(".container h1").innerHTML =  "🏁  Player 1 wins");

  } else if (images1 === images2) {
    console.log(document.querySelector(".container h1").innerHTML = "DRAW");
  }


}
