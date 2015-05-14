$(document).ready(function(){
	'use strict';
	/*
	* Here is an example of how to use Backstretch as a slideshow.
	* Just pass in an array of images, and optionally a duration and fade value.
	*/

	// Duration is the amount of time in between slides,
	// and fade is value that determines how quickly the next image will fade in
	$.backstretch(['images/home_bg.jpg'], {
		duration : 1000,
		fade : 750
	});
	/*$('body').find('ul.collections-menu li').addClass('hide').filter(':lt(1)').removeClass('hide');
	$('body').find('ul.collections-menu li:first').on('click',function(){
		if($('body').find('ul.collections-menu li').hasClass('hide'))
		$('body').find('ul.collections-menu li').removeClass('hide').filter(':gt(1)').addClass('animated fadeInLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      		$(this).removeClass();
    	});
		else
		$('body').find('ul.collections-menu li').addClass('hide').filter(':lt(1)').removeClass('hide');
	});*/
	$('body').find('ul.collections-menu').addClass('hide');
	$('.collections-menu-wrap').hover(function(){
		console.log('\'Allo \'Allo!');
		if($('body').find('ul.collections-menu').hasClass('hide')){
		$('body').find('ul.collections-menu').removeClass('hide');
		/*.addClass('wow slideInLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass('wow slideInLeft');
    	});*/
    	}
    	else{
    		$('body').find('ul.collections-menu').addClass('hide');
    	} 
	});	
	$('.collections-menu').on('click','a',function(e){
		e.preventDefault();
		$.backstretch(['images/products/ArabWear/arab_wear.jpg'], {speed: 5000});
		if($('body').find('ul.collections-sub-menu').hasClass('hide')){
			$('body').find('ul.collections-sub-menu').removeClass('hide');
		}
		else{
    		$('body').find('ul.collections-sub-menu').addClass('hide'); 
    	}
	});	
}); 