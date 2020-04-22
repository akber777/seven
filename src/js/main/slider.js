$(document).ready(function () {


	$('.boat__slider .owl-carousel').owlCarousel({
		loop: true,
		margin: 0,
		nav: false,
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



	$('.agency__slider .owl-carousel').owlCarousel({
		loop: true,
		margin: 0,
		nav: false,
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




})