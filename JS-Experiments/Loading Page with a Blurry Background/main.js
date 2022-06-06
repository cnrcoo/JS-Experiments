const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;
let interval = setInterval(blurring, 30);

function blurring() {
	load <= 99 ? load++ : clearInterval(interval);
	loadText.innerText = `${load}%`;

	if (load == 100) {
		document.getElementById("text").style.display = "none";
		bg.style.filter = `blur(0px)`;
	}
}
