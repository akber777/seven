const btn = $('.mySearch__close button');


const mysearch = $('.mySearch');

const openSearch = $('.agency__middle--search button');





openSearch.click(function () {



	mysearch.fadeIn();




})

btn.click(function () {

	mysearch.fadeOut();



})




$('.boat__container').parents('body').css({

	backgroundColor: '#000'

})


// open contact form





$('.formOpens button').click(function () {


	$('.myForms').fadeIn();




})



$('.button__close').click(function () {


	$(this).parents('.myForms').fadeOut();


})



$("#phone").intlTelInput({
	utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.0.3/js/utils.js"
});


$("#phoneRegister").intlTelInput({
	utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.0.3/js/utils.js"
});


$('.agency__mouse').remove();

$('#mySelect').niceSelect();

$('#mySelectregister').niceSelect();

$('.yearSelect').niceSelect();




//open submenu






function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}