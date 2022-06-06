const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
	counter.innerText = "0";

	const updateCounter = () => {
		// plus sign is basically for changing the type of the variable i.e string to number
		const target = +counter.getAttribute("data-target");
		const c = +counter.innerText;

		const increment = target / 280;

		// c < target
		// 	? (counter.innerText =
		// 			`${Math.ceil(c + increment)}` && setTimeout(updateCounter, 0.1))
		// 	: (counter.innerText = target);

		if (c < target) {
			counter.innerText = `+${Math.ceil(c + increment)}`;
			setTimeout(updateCounter, 0.1);
		} else {
			counter.innerText = `+${target}`;
		}
	};

	updateCounter();
});
