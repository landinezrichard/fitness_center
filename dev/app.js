(function () {
	/* Dependencias*/
	
	const showMenu = require('./components/MainMenu');
	const slides   = require('./components/Slider');

	/*Listeners*/
	document.addEventListener('DOMContentLoaded', onDOMload);

	function onDOMload() {		
		showMenu.init();
		slides.init();		
	}

}())