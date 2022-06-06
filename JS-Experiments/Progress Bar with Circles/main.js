const progress = document.getElementById("progress");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

function update() {
	circles.forEach((circle, idx) => {
		if (idx < currentActive) {
			circle.classList.add("active");
		} else {
			circle.classList.remove("active");
		}
	});

	const actives = document.querySelectorAll(".active");

	progress.style.width = ((actives.length - 1) / 3) * 100 + "%";

	if (currentActive === 1) {
		previous.disabled = true;
	} else if (currentActive === circles.length) {
		next.disabled = true;
	} else {
		previous.disabled = false;
		next.disabled = false;
	}
}

let currentActive = 1;

next.addEventListener("click", () => {
	currentActive >= 4 ? (currentActive = 4) : currentActive++;
	update();
});

previous.addEventListener("click", () => {
	currentActive <= 1 ? (currentActive = 1) : currentActive--;
	update();
});
