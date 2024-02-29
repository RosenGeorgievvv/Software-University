const list = document.getElementById('repos')

function loadRepos() {
// 	const username = document.getElementById('username').value;

// 	const url = `https://api.github.com/users/${username}/repos`;

// 	fetch(url)
// 	.then(onHeaders)
// 	.then(onSuccess)
// 	.catch(onError);

// }
// function onHeaders(response){
// 	if(!response.ok){
// 		throw "Error"
// 	}
// 	return response.json();
// }

// function onSuccess(data){
// 	list.replaceChildren(...data.map(createListItem))
// }
// function onError(error){
// list.textContent = error;
// }

// function createListItem({html_url, full_name}){
// 	const item = document.createElement('li');
// 	const anchor = document.createElement('a');
// 	anchor.href = html_url;
// 	anchor.textContent = full_name;
// 	item.appendChild(anchor);
// 	return item;

const username = document.getElementById('username').value;

const url = `https://api.github.com/users/${username}/repos`;

fetch(url).then(res =>{
	if(res.status !== 200){
		throw new Error();

	}
	return res.json();
}).then(data =>{
	list.replaceChildren(...data.map(createItems));
}).catch(error => console.log(error));

function createItems({html_url, full_name}){
	const item = document.createElement('li');
	const anchor = document.createElement('a');
	anchor.href = html_url;
	anchor.textContent = full_name;
	item.appendChild(anchor);
	return item;
}
}         






