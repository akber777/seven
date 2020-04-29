$(document).ready(function () {

	$(".js-range-slider").ionRangeSlider({
		type: "double",
		min: 0,
		max: 100,
		from: 0,
		to: 100,

		onStart: function (data) {
			$('.class_val').eq(0).text(data.from);
			$('.length_val').eq(0).text(data.to);
		},
		onChange: function (data) {
			$('.class_val').eq(0).text(data.from);

			$('.length_val').eq(0).text(data.to);

		}
	});

	// <------------------------> //

	// $('.js-range-slider-mile').hide();

	// $('.mileSpan').click(function () {

	// 	$(".js-irs-0").hide();

	// 	$('.js-irs-3').show();

	// 	$('.kmI').text('f');

	// 	$(".js-range-slider-mile").ionRangeSlider({
	// 		type: "double",
	// 		min: 0,
	// 		max: 330,
	// 		from: 0,
	// 		to: 330,

	// 		onStart: function (data) {
	// 			$('.class_val').eq(0).text(data.from);
	// 			$('.length_val').eq(0).text(data.to);
	// 		},
	// 		onChange: function (data) {
	// 			$('.class_val').eq(0).text(data.from);

	// 			$('.length_val').eq(0).text(data.to);

	// 		}
	// 	});

	// })

	// // return length

	// $('.lengthSpan').click(function () {

	// 	$(".js-irs-0").show();

	// 	$('.js-irs-3').hide();

	// 	$('.kmI').text('m');

	// 	$(".js-range-slider").ionRangeSlider({
	// 		type: "double",
	// 		min: 0,
	// 		max: 100,
	// 		from: 0,
	// 		to: 100,
	// 		onStart: function (data) {
	// 			$('.class_val').eq(0).text(data.from);
	// 			$('.length_val').eq(0).text(data.to);

	// 		},
	// 		onChange: function (data) {
	// 			$('.class_val').eq(0).text(data.from);

	// 			$('.length_val').eq(0).text(data.to);

	// 		}
	// 	});



	// })




	// end


	$(".js-range-money").ionRangeSlider({
		type: "double",
		min: 0,
		max: 1000,
		from: 0,
		to: 1000,
		step: 50,
		onStart: function (data) {
			$('.class_val').eq(1).text(data.from)
			$('.length_val').eq(1).text(data.to);
			$('.length_val').eq(1).text(1);
			$('.milion_i').text('m€')
		},
		onChange: function (data) {
			$('.class_val').eq(1).text(data.from);
			$('.length_val').eq(1).text(data.to);

			if (data.to == 1000) {
				$('.length_val').eq(1).text(1);
				$('.milion_i').text('m€')


			} else {
				$('.length_val').eq(1).text(data.to);
				$('.milion_i').text('k€')
			}
		}
	});




	$(".js-range-person").ionRangeSlider({
		type: "double",
		min: 0,
		max: 40,
		from: 0,
		to: 40,
		onStart: function (data) {
			$('.class_val').eq(2).text(data.from)
			$('.length_val').eq(2).text(data.to);
		},
		onChange: function (data) {
			$('.class_val').eq(2).text(data.from);
			$('.length_val').eq(2).text(data.to);
		}
	});





	// range js





	// control international flag input

	$("*").click(function (event) {

		var target = $(event.target);
		if (target.is(".iti__flag,.iti__selected-flag,iti__arrow")) {
			$('body').addClass('activeOverflow');
		}else{
			$('body').removeClass('activeOverflow');

		}
	});




	
	



})