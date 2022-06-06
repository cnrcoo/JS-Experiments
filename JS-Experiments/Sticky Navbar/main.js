const navbar = document.querySelector(".nav");

window.addEventListener("scroll", () => {
	scrollY > 0
		? navbar.classList.add("active")
		: navbar.classList.remove("active");
});
