let links = document.querySelectorAll('a');
let body = document.querySelectorAll('body');
let highLight = document.createElement('span');
highLight.classList.add('highlight');
document.body.appendChild(highLight);


function highLighted(){
	const elCoordinates = this.getBoundingClientRect();
	let coord = {
		width : elCoordinates.width,
		height : elCoordinates.height,
		top : elCoordinates.top + window.scrollY,
		left : elCoordinates.left + window.scrollX
	}

	highLight.style.width = `${coord.width}px`;
	highLight.style.height = `${coord.height}px`;

	highLight.style.transform = `translate(${coord.left}px, ${coord.top}px)`;
}
links.forEach(a => a.addEventListener('mouseenter', highLighted));