
var week = document.querySelector("#digital-date");
var timings = document.querySelector("p span");
var secondHand = document.querySelector(".second-hand");
var minuteHand = document.querySelector(".min-hand");
var hourHand = document.querySelector(".hour-hand");
var hourDigital = document.querySelector(".hour");
var minuteDigital = document.querySelector(".minute");
var secondDigital = document.querySelector(".second");



//Setting the week

function setWeek(){
	var today = moment();
	var todayDate = today.format("dddd, "+ "D " + "MMMM " + "Of " + "YYYY");
	week.textContent = todayDate;
}
setWeek();

function timeZone(){
var teste = moment.tz.guess();
console.log(teste);
timings.textContent = teste;
}

timeZone();


function analogClock(){
	var now= new Date();
	var seconds = now.getSeconds();
	var secondsDegree = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${secondsDegree}deg)`;
	

	var minutes = now.getMinutes();
	var minutesDegree = ((minutes / 60 * 360) + 90);
	minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

	var hour = now.getHours();
	var hourDegree = ((hour / 12 * 360) + 90);
	hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

function digitalClock(){
	var timezone = moment.tz.guess();
	var now = moment();
	var hour = now.format("HH");
	var minute = now.format("mm");
	var second = now.format("ss");
	hourDigital.textContent = hour;
	minuteDigital.textContent = minute;
	secondDigital.textContent = second;
}





setInterval(analogClock, 1000);
setInterval(setWeek, 1000);
setInterval(digitalClock, 1000);
analogClock();
digitalClock();





 

 
//https://www.youtube.com/watch?v=KRnkXgbbpzY