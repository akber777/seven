$(document).ready(function(){

	$(".js-range-slider").ionRangeSlider({
		type: "double",
		min: 0,
		max: 1000,
		from: 0,
		to: 1000,
		onStart:function(data)
		{
			$('.class_val').eq(0).text(data.from)
		},
		onChange: function (data) {
			$('.class_val').eq(0).text(data.from);
			
		}
	});



	$(".js-range-money").ionRangeSlider({
		type: "double",
		min: 0,
		max: 10000000,
		from: 0,
		to: 10000000,
		onStart:function(data)
		{
			$('.class_val').eq(1	).text(data.from)
		},
		onChange: function (data) {
			$('.class_val').eq(1).text(data.from);
		}
	});




	$(".js-range-person").ionRangeSlider({
		type: "double",
		min: 0,
		max: 40,
		from: 0,
		to: 40,
		onStart:function(data)
		{
			$('.class_val').eq(2).text(data.from)
		},
		onChange: function (data) {
			$('.class_val').eq(2).text(data.from);
		}
	});





	// range js



	$('.boat__slider .owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		dots:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})



	$('.agency__slider .owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		dots:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})



	$('.Services .owl-carousel').owlCarousel({
		loop:true,
		margin:20,
		nav:true,
		dots:false,
		autoplay:true,
		onInitialized  : counter,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})




	function counter(event) {
   var element   = event.target;         // DOM element, in this example .owl-carousel
    var items     = event.item.count;     // Number of items


    $('.Services__Count').text("1/"+items);
}


$('.Services .owl-carousel').on('initialized.owl.carousel changed.owl.carousel', function(e) {
	if (!e.namespace)  {
		return;
	}
	var carousel = e.relatedTarget;
	var length_item=carousel.relative(carousel.current())

	var item_count=carousel.items().length




	if(length_item < 9)
	{
		$('.Services__Count').text(parseInt(carousel.relative(carousel.current()) + 1) + '/' + carousel.items().length);
	}
	else{
		$('.Services__Count').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
	}


	if(item_count < 10)
	{
		$('.Services__Count').text(parseInt(carousel.relative(carousel.current()) + 1) + '/' + carousel.items().length);
	}


}).owlCarousel({
	items: 1,
	loop:true,
	margin:0,
	nav:true
});





$('.blog__slider .owl-carousel').owlCarousel({
	loop:true,
	margin:70,
	nav:true,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		1000:{
			items:3
		}
	}
})





})