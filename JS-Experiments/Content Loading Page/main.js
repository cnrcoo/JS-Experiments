const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

function getData() {
	header.innerHTML = `
        <img
            src="https://images.pexels.com/photos/916335/pexels-photo-916335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
        />
    `;

	title.innerHTML = `
        Lorem ipsum dolor sit amet.
    `;

	excerpt.innerHTML = `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
        deleniti aspernatur impedit!
    `;

	profile_img.innerHTML = `
        <img
            src="https://images.pexels.com/photos/4075524/pexels-photo-4075524.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
        />
    `;

	name.innerHTML = `Kira X.`;

	date.innerHTML = `June 30, 2020`;

	animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
	animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}

setTimeout(getData, 2000);
