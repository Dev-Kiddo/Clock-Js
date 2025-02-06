"use strict";

const hoursHand = document.querySelector(".hours-hand");
const minutesHand = document.querySelector(".mins-hand");
const secondsHand = document.querySelector(".seconds-hand");

/*
1 minute the seconds hand will move 60 times. the whole circle is 360 deg. in that 360 deg 60 times the hand should rotate right? so we need to divide 360/60 we will get the 1sec rotation.

*/

let setClock = function () {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hoursInDeg = (hours % 12) * 30 + (minutes / 60) * 30 + 90;
  const minutesInDeg = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  const secondsInDeg = (seconds / 60) * 360 + 90; //30
  console.log(now);

  secondsHand.style.transform = `rotate(${secondsInDeg}deg)`;
  minutesHand.style.transform = `rotate(${minutesInDeg}deg)`;
  hoursHand.style.transform = `rotate(${hoursInDeg}deg)`;

  // seconds / min * deg
  // 5 * 60 * 360

  // console.log(hours, minutes, seconds);

  // console.log(hoursInDeg, minutesInDeg, secondsInDeg);
};

// getDate();

setInterval(setClock, 1000);
setClock();
