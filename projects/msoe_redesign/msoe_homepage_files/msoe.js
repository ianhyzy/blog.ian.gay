
var HeroRotator = function () {
	var _public = {};

	var rotatorSetup = function () {
		sevenSummits.rotator.init(_public.options);  
	};

	_public.init = function (options) {
		_public.options = jQuery.extend({	  
		     rotator : {
		       containerHandle: "#mainRotator",
		       rotateItemHandle: ".item", 
		       containerWidth: "960px",
		       containerHeight: "367px",
		       rotateSlideItemHandle: ".slideItem",
		       rotateSpeed: "60000",
		       animateOutSpeed: "500",
		       rotatorEase: "linear",
		       slideActiveClass: "slideActive"
		     },
		     nav : {
		       navContainerHandle: "#rotatorNav",
		       navActiveClass: "navActive"
		     }        					      
		}, options);

		rotatorSetup();
	};

	return _public;
} ();
