(function($){
	var menu   = $('#menu'),
		header = $('#header');
		
	
	function init(){
		loadHTML();
	}

	function loadHTML(){
		menu.load('/app/views/menu.html', menuloaded);
		//header.load('/app/views/header.html');
	}

	function menuloaded(){
		var hamburger    = $('.hamburger'),
			hamburgerAnc = hamburger.find('a'),
			navLinks     = menu.find('ul').find('a');

		function menuInit(){
			navclick();
			internalLinks();
		}
		function navclick(){
			hamburgerAnc.on('touch click', function(e){
				e.preventDefault();
				menu.toggleClass('expand');
			})		
		}

		function internalLinks(){
			if(navLinks.length){
				navLinks.on('click touch', function(e){
					//e.preventDefault();
					var linkto = this.getAttribute('data-href');
					console.log('linkto', linkto);

				})
			}
		}


		menuInit();
	}



	init();
})(jQuery)