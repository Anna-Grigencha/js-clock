const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minute = now.getMinutes();
  const minuteDegrees = (minute / 60) * 360 + (seconds / 60) * 6 + 90;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + (minute / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();

const exactTime = document.querySelector(".date");

function dateTime() {
  let currentDateTime = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let hours = currentDateTime.getHours();
  let minutes = currentDateTime.getMinutes();
  let seconds = currentDateTime.getSeconds();
  let dayOfWeek = days[currentDateTime.getDay()];
  let month = months[currentDateTime.getMonth()];
  let day = currentDateTime.getDate();
  let year = currentDateTime.getFullYear();
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  exactTime.innerHTML =
    hours +
    ":" +
    minutes +
    ":" +
    seconds +
    " " +
    dayOfWeek +
    ", " +
    month +
    " " +
    day +
    ", " +
    year;
}

setInterval(dateTime, 1000);
dateTime();

/* выводим текущую дату и время на сайт в блок с id "current_date_time_block" */
//exactTime.innerHTML = dateTime();
