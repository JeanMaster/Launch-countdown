let daysBox = document.getElementById("days")
let hoursBox = document.getElementById("hours")
let minutesBox = document.getElementById("minutes")
let secondsBox = document.getElementById("seconds")

console.log({days , hours , minutes, seconds})

let countDownDate = new Date("Dec 31, 2021, 23:59:59").getTime();



let clock = setInterval(() => {

let now = new Date().getTime()
let distance = countDownDate - now
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

daysBox.dataset.content = days
hoursBox.dataset.content = hours
minutesBox.dataset.content = minutes
secondsBox.dataset.content = seconds



if (distance < 0) {
    clearInterval(clock);
  }


}, 1000);