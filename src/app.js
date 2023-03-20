/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  setInterval(generateCard, 5000);
  generateCard();
};

function generateCard() {
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const suits = ["♥", "♠", "♣", "♦"];
  const randomValue = values[Math.floor(Math.random() * values.length)];
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];

  document.getElementById("value").innerHTML = randomValue;
  document.getElementById("top-left").innerHTML = randomSuit;
  document.getElementById("top-left").setAttribute("data-suit", randomSuit);
  document.getElementById("bottom-right").innerHTML = randomSuit;
  document.getElementById("bottom-right").setAttribute("data-suit", randomSuit);
}
