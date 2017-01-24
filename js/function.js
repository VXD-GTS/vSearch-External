// JavaScript Document
$(document).ready(function () {
	"use strict";
	$('[data-toggle="offcanvas"]').click(function () {
		$('.row-offcanvas').toggleClass('active');
	});
	
	
	$('.people-details-favourite').click(function () {		
		if($(this).find($(".mdi")).hasClass('mdi-star')){
			 $(this).find($(".mdi")).removeClass('mdi-star').addClass('mdi-star-outline');
			 $(this).attr({
				"href" : "",
				"data-original-title" : "Add to Favourite"
        	});
		 }
		else if($(this).find($(".mdi")).hasClass('mdi-star-outline')){
			 $(this).find($(".mdi")).removeClass('mdi-star-outline').addClass('mdi-star');
			 $(this).attr({
				"href" : "",
				"data-original-title" : "Remove Favourite"
        	});
		}
	});

});


$(function () {
	"use strict";
	$('[data-toggle="tooltip"]').tooltip();
});
$(function () {
	"use strict";
	$(".wheel-button").wheelmenu();

});


var getFullYear = new Date().getFullYear();
document.getElementById('getFullYear').innerHTML = getFullYear;
