 //problems:
//the center of the clock is not center


var week = document.querySelector("#digital");


var secondHand = document.querySelector(".second-hand");
var minuteHand = document.querySelector(".min-hand");
var hourHand = document.querySelector(".hour-hand");

function setWeek(){
	var today = moment();
	var todayDate = today.format("dddd, "+ "D " + "MMMM " + "Of " + "YYYY");
	week.textContent = todayDate;
}




function setDate(){
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

setInterval(setDate, 1000);
setInterval(setWeek, 1000);

setWeek();


 

 
//https://www.youtube.com/watch?v=KRnkXgbbpzY