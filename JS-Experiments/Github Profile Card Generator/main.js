const APIURL = 'https://api.github.com/users/';
const form = document.getElementById('form');
const search = document.getElementById('search');

async function getUser(username) {
	try {
		const { data } = await axios(APIURL + username);

		createUserCard(data);
		getRepos(username);
	} catch (err) {
		createErrorCard("Couldn't find any user with this username.");
	}
}

async function getRepos(username) {
	try {
		const { data } = await axios(APIURL + username + '/repos?sort=created');

		addReposToCard(data);
	} catch (err) {
		createErrorCard("Couldn't fetch the repos.");
	}
}

function createUserCard(user) {
	const cardHTML = `
    <div class="card">
				<div>
					<img
						src="${user.avatar_url}"
						alt="${user.login}"
						class="avatar"
					/>
				</div>

				<div class="user-info">
					<h2>${user.name}</h2>

					<p>${user.bio}</p>

					<ul>
						<li>${user.followers} <strong>Followers</strong></li>
						<li>${user.following} <strong>Following</strong></li>
						<li>${user.public_repos} <strong>Repos</strong></li>
					</ul>

                    <hr />

					<div id="repos"></div>
				</div>
			</div>
    `;

	main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
	const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `;

	main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
	const reposElement = document.getElementById('repos');

	repos.slice(0, 6).forEach((repo) => {
		const repoElement = document.createElement('a');

		repoElement.classList.add('repo');
		repoElement.href = repo.html_url;
		repoElement.target = '_blank';
		repoElement.innerText = repo.name;

		reposElement.appendChild(repoElement);
	});
}

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const user = search.value;

	if (user) {
		getUser(user);

		search.value = '';
	}
});
