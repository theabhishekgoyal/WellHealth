
// (function ($) {
// 	'use strict';

// 	navbarDropdown
// 	if ($(window).width() < 992) {
// 		$('.navigation .dropdown-toggle').on('click', function () {
// 			$(this).siblings('.dropdown-menu').animate({
// 				height: 'toggle'
// 			}, 300);
// 		});
//   }

// 	// scroll to top button
// 	$(window).on('scroll', function () {
// 		if ($(window).scrollTop() > 70) {
// 			$('.backtop').addClass('reveal');
// 		} else {
// 			$('.backtop').removeClass('reveal');
// 		}
// 	});
// 	// scroll-to-top
//   $('.scroll-top-to').on('click', function () {
//     $('body,html').animate({
//       scrollTop: 0
//     }, 500);
//     return false;
//   });

	
	


// })(jQuery);

// counter 

function counter() {
	var oTop;
	var counterElements = document.querySelectorAll('.counter');
	if (counterElements.length !== 0) {
	  oTop = counterElements[0].getBoundingClientRect().top - window.innerHeight;
	}
	if (window.pageYOffset > oTop) {
	  counterElements.forEach(function (counterElement) {
		var countTo = counterElement.getAttribute('data-count');
		var countNum = parseFloat(counterElement.textContent);
		var duration = 500;
		var easing = 'swing';
		var start = null;
		var step = function (timestamp) {
		  if (!start) {
			start = timestamp;
		  }
		  var progress = timestamp - start;
		  var percentage = Math.min(progress / duration, 1);
		  var currentValue = countNum + percentage * (countTo - countNum);
		  counterElement.textContent = Math.floor(currentValue);
		  if (progress < duration) {
			window.requestAnimationFrame(step);
		  } else {
			counterElement.textContent = countTo;
		  }
		};
		window.requestAnimationFrame(step);
	  });
	}
  }
  
  window.addEventListener('scroll', function () {
	counter();
  });
  

  // shuffle doctors 

if (document.querySelectorAll('.shuffle-wrapper').length !== 0) {
	var Shuffle = window.Shuffle;
	var jQuery = window.jQuery;
	var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
	  itemSelector: '.shuffle-item',
	  buffer: 1
	});
	document.querySelectorAll('input[name="shuffle-filter"]').forEach(function(input) {
	  input.addEventListener('change', function(evt) {
		var input = evt.currentTarget;
		if (input.checked) {
		  myShuffle.filter(input.value);
		}
	  });
	});
  }
  