particlesJS.load("wrapperId", "./resource/particlesjs-config.json", function () {});

const monthsId = document.querySelector("#months");
const daysId = document.querySelector("#days");
const hoursId = document.querySelector("#hours");
const minutesId = document.querySelector("#minutes");
const secondsId = document.querySelector("#seconds");
let launchDate = "02/24/2022 10:00:00 AM";
const Ldate = new Date(launchDate);

const inveral = setInterval(() => {
  const date = new Date();
  let t1 = Ldate.getTime();
  let t2 = date.getTime();

  const diff = t1 - t2;

  let seconds = 1000;
  let minutes = seconds * 60;
  let hours = minutes * 60;
  let days = hours * 24;
  let months = days * 30;

  monthsId.textContent = Math.floor(diff / months);
  // after getting days we need to work on the remaining items
  daysId.textContent = Math.floor((diff % months) / days);
  hoursId.textContent = Math.floor((diff % days) / hours);
  minutesId.textContent = Math.floor((diff % hours) / minutes);
  secondsId.textContent = Math.floor((diff % minutes) / seconds);
}, 1000);
