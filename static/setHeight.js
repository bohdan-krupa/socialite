const setHeight = () => {
	document.querySelector('.container').style.height = window.innerHeight + 'px'
}

window.onload = () => {
	setHeight()

	window.onresize = () => {
		setHeight()
	}
}