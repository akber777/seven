const btn=$('.mySearch__close button');


const mysearch=$('.mySearch');

const openSearch=$('.agency__middle--search button');





openSearch.click(function(){



	mysearch.fadeIn();




})

btn.click(function(){

	mysearch.fadeOut();



})




$('.boat__container').parents('body').css({

	backgroundColor:'#000'

})


// open contact form





$('.formOpens button').click(function(){


	$('.myForms').fadeIn();




})



$('.button__close').click(function(){


	$(this).parents('.myForms').fadeOut();


})