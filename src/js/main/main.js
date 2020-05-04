$(document).ready(function () {


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

	});


	$("#phoneRegister").intlTelInput({

	});



	$('#phoneFooter').intlTelInput({

	});

	$('.agency__mouse').remove();

	$('#mySelect').niceSelect();

	$('#mySelectregister').niceSelect();

	$('.yearSelect').niceSelect();




	//open submenu



	// data-img change


	$('.boat__infoss').mouseover(function () {


		let DataImg = $(this).find('.boat__infoss--img').attr('data-img');

		let selfData = $(this).find('img').attr('src');

		$(this).find('img').attr('src', DataImg);

		let changeData = $(this).find('.boat__infoss--img').attr('data-img', selfData);

		

	})




	
		$('.boat__infoss').mouseout(function () {



			let DataImg = $(this).find('.boat__infoss--img').attr('data-img');

			let selfData = $(this).find('img').attr('src');
	
			$(this).find('img').attr('src', DataImg);
	
			let changeData = $(this).find('.boat__infoss--img').attr('data-img', selfData);


		})






		




})




function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("mySidenav").style.transform = "translateX(0%)";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("mySidenav").style.transform = "translateX(150%)";
}




