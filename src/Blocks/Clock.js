const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

const getTime = () => {
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();
	clockTitle.innerText = `${hours > 10 ? hours : "0"+hours}:${minutes > 10 ? minutes : "0"+minutes}:${seconds > 10 ? seconds : "0"+seconds}`;
}

export const init = () => {
	getTime()
	setInterval(getTime, 1000);
}