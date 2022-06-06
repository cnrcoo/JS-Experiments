const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
	const trigger = (window.innerHeight / 5) * 4;

	boxes.forEach((box) => {
		const boxTop = box.getBoundingClientRect().top;

		boxTop < trigger
			? box.classList.add("show")
			: box.classList.remove("show");
	});
}
