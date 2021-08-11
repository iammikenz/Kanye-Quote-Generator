const kanyeQuote = async () => {
	const res = await fetch('https://api.kanye.rest');
	const data = await res.json();

	const html = data.quote;

	document.getElementById('quote').innerHTML = html;
};
