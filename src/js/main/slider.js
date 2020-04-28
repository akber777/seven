$(document).ready(function () {


	$('.boat__slider .owl-carousel').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		dots: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	})



	// $('.agency__slider .owl-carousel').owlCarousel({
	// 	loop: true,
	// 	margin: 0,
	// 	nav: true,
	// 	dots: true,
	// 	responsive: {
	// 		0: {
	// 			items: 1
	// 		},
	// 		600: {
	// 			items: 1
	// 		},
	// 		1000: {
	// 			items: 1
	// 		}
	// 	}
	// })



	$('.Services .owl-carousel').owlCarousel({
		loop: true,
		margin: 20,
		nav: true,
		dots: false,
		autoplay: false,
		onInitialized: counter,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	})




	function counter(event) {
		var element = event.target;         // DOM element, in this example .owl-carousel
		var items = event.item.count;     // Number of items


		$('.Services__Count').text("1/" + items);
	}


	$('.Services .owl-carousel').on('initialized.owl.carousel changed.owl.carousel', function (e) {
		if (!e.namespace) {
			return;
		}
		var carousel = e.relatedTarget;
		var length_item = carousel.relative(carousel.current())

		var item_count = carousel.items().length




		if (length_item < 9) {
			$('.Services__Count').text(parseInt(carousel.relative(carousel.current()) + 1) + '/' + carousel.items().length);
		}
		else {
			$('.Services__Count').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
		}


		if (item_count < 10) {
			$('.Services__Count').text(parseInt(carousel.relative(carousel.current()) + 1) + '/' + carousel.items().length);
		}


	}).owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		nav: true
	});





	$('.blog__slider .owl-carousel').owlCarousel({
		loop: true,
		margin: 70,
		nav: true,
		responsive: {
			0: {
				items: 1
			},
			750: {
				items: 1
			},
			850: {
				items: 2
			},
			1217: {
				items: 3
			}
		}
	})



	$(window).scroll(function () {


		let scrolltop = $(this).scrollTop();



		if (scrolltop > 148) {
			$('.fixedHEader').addClass('fixedNoHEader');
		}
		else {
			$('.fixedHEader').removeClass('fixedNoHEader');

		}




	})


	//	SLIDER START


	const myLength = $('.mySlider .item').length;

	for (let i = 0; i < myLength; i++) {
		$('.mySlider .owl-dots').append('<button></button>')
	}

	let index = 0;

	$('.mySlider .item').stop().fadeOut(10);

	$('.mySlider .item').eq(0).stop().fadeIn();

	const mySliderLength = $('.mySlider .item').length;


	$('.nextButton').click(function () {

		index++

		if (index > (mySliderLength - 1)) {
			index = 0;
			$('.mySlider .item').stop().fadeOut(10);
			$('.mySlider .item').stop().eq(index).fadeIn();
			$('.mySlider .owl-dots button').removeClass('active');
			$('.mySlider .owl-dots button').eq(index).addClass('active');
			// console.log(index)


		}

		if (index <= mySliderLength) {

			$('.mySlider .item').stop().fadeOut(10);
			$('.mySlider .item').eq(index).stop().fadeIn();
			$('.mySlider .owl-dots button').removeClass('active');
			$('.mySlider .owl-dots button').eq(index).stop().addClass('active');
			console.log(index)
		}


	})






	// next slider



	$('.prevButton').click(function () {

		index--

		if (index > (mySliderLength - 1)) {
			index = 0;
			$('.mySlider .item').stop().fadeOut();
			$('.mySlider .item').eq(index).stop().fadeIn();
			$('.mySlider .owl-dots button').removeClass('active');
			$('.mySlider .owl-dots button').eq(index).stop().addClass('active');
		}

		if (index < (mySliderLength - 1)) {


			if (index < 0) {
				index = mySliderLength - 1;
			}

			$('.mySlider .item').stop().fadeOut();
			$('.mySlider .item').eq(index).stop().fadeIn();
			$('.mySlider .owl-dots button').removeClass('active');
			$('.mySlider .owl-dots button').eq(index).stop().addClass('active');
		}


	})

	// prev slider



	// play automic slider

	function playSlider() {

		index++

		if (index > (mySliderLength - 1)) {
			index = 0;
			$('.mySlider .item').stop().fadeOut(10);
			$('.mySlider .item').stop().eq(index).fadeIn();
			$('.mySlider .owl-dots button').removeClass('active');
			$('.mySlider .owl-dots button').eq(index).stop().addClass('active');

			// console.log(index)


		}

		if (index <= mySliderLength) {

			$('.mySlider .item').stop().fadeOut(10);
			$('.mySlider .item').eq(index).stop().fadeIn();
			$('.mySlider .owl-dots button').removeClass('active');
			$('.mySlider .owl-dots button').eq(index).stop().addClass('active');
		}

		$('.mySlider .owl-dots button').click(function () {

			let indexSet = $(this).index();

			index = indexSet

		})



	}


	setInterval(playSlider, 4000);




	// slider change with  button


	let sliderBtn = $('.mySlider .owl-dots button').length;

	$('.mySlider .owl-dots button').removeClass('active');

	$('.mySlider .owl-dots button').eq(0).stop().addClass('active');

	$('.mySlider .owl-dots button').click(function () {

		let index = $(this).index();

		$('.mySlider .owl-dots button').removeClass('active');
		$(this).addClass('active');

		$('.mySlider .item').stop().fadeOut();
		$('.mySlider .item').eq(index).stop().fadeIn();




	})


	//create Slider Btn




})

//	SLIDER END


// let myClosebtn = document.createElement('button');

// myClosebtn.setAttribute('class', 'closeFlag');

// myClosebtn.textContent = 'x'

// $('.iti__country-list').append(myClosebtn);


// console.log($('.form'));

// $(document).scroll(function () {

// 	$('.form').css('background-position', '0px ' + $(document).scrollTop() + 'px');

// });





// textare value clear

let count = 0;

$('textarea').keydown(function (event) {

	count++

	if (count <= 1) {
		$(this).text('');
		console.log('ok')
	}


})











