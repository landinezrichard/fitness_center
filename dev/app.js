(function () {
	/* Dependencias*/
	
	const showMenu = require('./components/MainMenu');
	const slides   = require('./components/Slider');

	const clase1 = 'icon-chevron-thin-left',
		  clase2 = 'icon-chevron-thin-right';

	/*Listeners*/
	document.addEventListener('DOMContentLoaded', onDOMload);

	function addPrevNextSlide () {
		var prev = document.querySelector('.prev');
		prev.classList.add(clase1);
		prev.innerText = '';

		var next = document.querySelector('.next');
		next.classList.add(clase2);
		next.innerText = '';
		
	}

	function onDOMload() {		
		showMenu.init();
		slides.init();
		addPrevNextSlide ()	
	}

}())