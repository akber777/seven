$(document).ready(function(){

	let width=$(document).width();
	
	let vidoess = document.getElementById("vid");
	
	let vidoess2 = document.getElementById("vid2");
	
	
	
	
	
	let coop=vid.onloadedmetadata = function() {


		if(vid.currentTime >= 18)
		{

			function animation3(){

				$('.right_absolute').addClass('animation_start')


			}
			
			

			setTimeout(animation3,10);

            				//end



            				function animation4(){

            					$('.left_absolute').addClass('animation_start')


            				}



            				setTimeout(animation4,10);

			            	// end
			            	
			            	
			            	clearInterval(stopVideoTime,10)



			            }

                // if end
                
                
                document.querySelectorAll('.skip_intro')[0].onclick=()=>{
                    
					
                   
                   return vid.currentTime=vid.duration
                }


            };


        // coop end
        
        
        let stopVideoTime= setInterval(coop,1000)
        
        



        if(width > 1000)
        {


        	document.getElementById('vid').play();
        	


// seven ship animation




let ship_index=$('.ship_animate img').index();

$('.ship_animate img').hide();

ship1=()=>{




	$('.ship_animate img').hide();


	$('.ship_animate img').eq(ship_index).fadeIn();

	ship_index++

	if(ship_index==6)
	{		

		$('.ship_animate img').hide();


		$('.seven_middle').addClass('middle_seven');

		$('.seven_logo').addClass('no_margin')

		$('.seven_logo').addClass('opacity_new')

		clearInterval(ship_animated);

	}   



}

let ship_animated=setInterval(ship1,20);



// seven ship animation end

function animation(){


	$('.seven_logo').removeClass('no_margin');

	$('.seven_logo').addClass('margin_top')

	$('.seven_lang').addClass('margin_top')

	$('.seven_middle').addClass('remove_middle');
	
	

}



setTimeout(animation,20);

// // seven_logo animation


function animation2(){

	$('.seven_lang').addClass('animation_start')


}



setTimeout(animation2,20);

// seven_lang animation







// function animation3(){

// 	$('.right_absolute').addClass('animation_start')


// }



// setTimeout(animation3,2000);

// // right_absolute animation



// function animation4(){

// 	$('.left_absolute').addClass('animation_start')


// }



// setTimeout(animation4,2000);

// right_absolute animation



// $('.right_absolute .right_in').mouseover(function(){

// 	$('.left_absolute img').removeClass('opacity_all');

// 	$('.left_absolute img').fadeIn();

// 	$('.left_absolute .right_in').stop().fadeOut();

// 	$('.left_absolute img').addClass('animation_start');

// 	$('.left_absolute img').fadeIn();

// })

// true
// on mouse right

// $('.right_absolute .right_in').mouseout(function(){

// 	// img mouseover

// 	// $('.left_absolute img').mouseover(function(){

// 	// 	$('.left_absolute img').fadeIn();

// 	// 	$('.left_absolute img').addClass('animation_start');

// 	// $('.left_absolute .right_in').stop().fadeOut('fast');


// 	// })

// 	// image mouseout



// 	// $('.left_absolute img').mouseout(function(){

// 	// $('.left_absolute img').addClass('opacity_all');

// 	// $('.left_absolute img').fadeOut()

// 	// 	$('.left_absolute img').removeClass('animation_start');

// 	// $('.left_absolute .right_in').stop().fadeIn('fast');


// 	// })


// 	// img mouseout



// 	$('.left_absolute img').removeClass('animation_start');

// 	$('.left_absolute .right_in').stop().fadeIn();

// 	$('.left_absolute img').removeClass('width_animate')

// })

// out mouse right



// -------------------------------------------------------------------------------

// on mouse left




// $('.left_absolute .right_in').mouseover(function(){

// 	$('.right_absolute img').removeClass('opacity_all');

// 	$('.right_absolute img').fadeIn();

// 	$('.right_absolute .right_in').stop().fadeOut();

// 	$('.right_absolute img').addClass('animation_start');

// 	$('.right_absolute img').fadeIn();

// })

// on mouse right

// $('.left_absolute .right_in').mouseout(function(){

// 	// // img mouseover

// 	// $('.right_absolute img').mouseover(function(){

// 	// 	$('.right_absolute img').fadeIn();

// 	// 	$('.right_absolute img').addClass('animation_start');

// 	// $('.right_absolute .right_in').stop().fadeOut('fast');


// 	// })

// 	// // image mouseout



// 	// $('.right_absolute img').mouseout(function(){

// 	// $('.right_absolute img').addClass('opacity_all');

// 	// $('.right_absolute img').fadeOut()

// 	// 	$('.right_absolute img').removeClass('animation_start');

// 	// $('.right_absolute .right_in').stop().fadeIn('fast');


// 	// })


// 	// img mouseout



// 	$('.right_absolute img').removeClass('animation_start');

// 	$('.right_absolute .right_in').stop().fadeIn();

// 	$('.right_absolute img').removeClass('width_animate')

// })

// out mouse left
}
else{   
    
    
        
         function getWIdth(){
            window.innerWidth;
            
            
            if(window.innerWidth!=window.screen.availWidth)
        {   
            let video2 = document.getElementById('vid2')
            
            video2.play()
        }
            
        }
        
        
        
        setInterval(getWIdth,10)

    
       
        
        
        
        
    
    	let ua = navigator.userAgent.toLowerCase();
        let is_safari = (ua.indexOf("safari/") > -1 && ua.indexOf("chrome") < 0);
            if(is_safari) {
                let video2 = document.getElementById('vid2');
                setTimeout(function() {
                   video2.play();
                }, 50);
}  

	// zoom effect start

	let myImg=$('.backSeven');

	let myZoomIndex=1.0;

	let autoPlus=()=>{

		if(myZoomIndex > 1.5)
		{
			myZoomIndex=1.0
		}
		else{
			myZoomIndex+=0.001;

			myImg.css({

				transform:'scale('+myZoomIndex+')',
				transition:'all 0.5s'

			})
		}

	}

	let stopInterval=setInterval(autoPlus,50)


	// zoom effect end



	let ship_index=$('.ship_animate img').index();

	$('.ship_animate img').hide();

	ship1=()=>{




		$('.ship_animate img').hide();


		$('.ship_animate img').eq(ship_index).fadeIn();

		ship_index++

		if(ship_index==6)
		{		

			$('.ship_animate img').hide();


			$('.seven_middle').addClass('middle_seven');

			$('.seven_logo').addClass('no_margin')

			$('.seven_logo').addClass('opacity_new')

			clearInterval(ship_animated);

		}   



	}

	let ship_animated=setInterval(ship1,20);



// seven ship animation end

function animation(){


	$('.seven_logo').removeClass('no_margin');

	$('.seven_logo').addClass('margin_top')

	$('.seven_lang').addClass('margin_top')

	$('.seven_middle').addClass('remove_middle');
	
	

}



setTimeout(animation,20);

// // seven_logo animation


function animation2(){

	$('.seven_lang').addClass('animation_start')


}



setTimeout(animation2,20);

// seven_lang animation



function animation3(){

	$('.right_absolute').addClass('animation_start')


}



setTimeout(animation3,2000);

// right_absolute animation



function animation4(){

	$('.left_absolute').addClass('animation_start')


}



setTimeout(animation4,2000);
}


console.log('ok')


})

// jquery end