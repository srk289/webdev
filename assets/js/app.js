$(function() {
	var $menu         = $('.menu'),
		$menuLi       = $menu.find('li'),
		$right        = $('.right'),
		$rightRatio   = $right.find('.ratio'),
		$middle       = $('.middle'),
		$middleTop    = $middle.find('.middleTop'),
		$middleBottom = $middle.find('.middleBottom');


    function init(){
    	loadResizables();
    	nav();
    	loadRatio();
    }

    //load resizables
    function loadResizables(){
	    $( ".resizableH" ).resizable({
	    	      containment: "#content",
	    	      handles: 'e, w'
	    });
	    $( ".resizableV" ).resizable({
	    	      containment: ".middleContainer",
	    	      handles: 'n, s',
	      	      resize: function(event, ui) { 
	      	            // want to perform some action here
						console.log('top ', $('.middleTop').height());
						console.log('bottom ', $('.middleBottom').height());
						loadRatio();
	  	          }
	    });

	    $(window).resize(function(){
	    	loadRatio();
	    })
	}
	//loadRatio by default
	function loadRatio(){
		var topHeight = $('.middleTop').height();
		var bottomHeight = $('.middleBottom').height();

		var ratio = getRatio(topHeight, bottomHeight);
		$rightRatio.text(ratio);
	}

	//Load nav triggers
	function nav(){
		$menuLi.find('a').on('click touch', function(e){
			e.preventDefault();
			console.log(this.text);
			$menuLi.removeClass('active');
			$(this).parent().addClass('active');
			$middleTop.find('h1').text(this.text);
		})
		

	}

	//get Ratio for given numbers
	function getRatio(x,y){
		
		var gcd=calc(x,y),
			r1=x/gcd,
			r2=y/gcd;

		if( x == 0 ){
			r1 = 0;
			r2 = y;
		}

		return r1+":"+r2;
	}

	//calc denominator
	function calc(n1, n2){
		var num1,num2;
		if(n1 < n2){ 
			num1=n1;num2=n2;
		}
		else{
			num1=n2;num2=n1;
		}
		var remain=num2%num1;
		while(remain>0){
			num2=num1;
			num1=remain;
			remain=num2%num1;
		}
		return num1;
	}


    init()

  });

