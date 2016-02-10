var slides = (function () {
	/* Dependencias*/
	let $ = require('jquery');
	const rs = require('../slides/responsiveslides.js');

	function initialize () {
		$(".rslides").responsiveSlides({
			maxwidth: 1100,
			pager: true,
			nav: true  
		});
	}

	return {
        init : function () {
            initialize();   
        }
    };

})();

module.exports = slides;