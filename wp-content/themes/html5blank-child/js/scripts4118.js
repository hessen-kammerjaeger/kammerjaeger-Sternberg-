(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';

		/////////////////////BEGIN SCRIPTS
		
		//stickynav on scroll
		window.onscroll = function() {stickyNav()};

		var navbar = document.getElementById("navBar");
		var sticky = navbar.offsetTop;

		function stickyNav() {
		  if (window.pageYOffset >= sticky) {
		    navbar.classList.add("sticky")
		  } else {
		    navbar.classList.remove("sticky");
		  }
		}

		//responsive nav
		function initiateNav(x) {
		    x.classList.toggle("change");
		}



		$(document).ready(function(){

			//Add Capability Statement to the contact page Footer

			var page = window.location.pathname;
			if(page =='/about/') {
				$(".copyright").append( "&nbsp;|&nbsp;&nbsp;<a href='/wp-content/uploads/2023/11/capability-statement.pdf' target='_blank'>Capability Statement</a>");
			}	

			$(".socialLinks .fa-search").click(function(){
				$(".search-input").css("display", "inline-block");
				$(".search-input").css("width", "200px");
				$(".search-input").css("opacity", "1");
			});


			$("<div style='clear:both; height: 80px;'></div>").insertAfter(".lastBlock");


			function offsetAnchor() {
			   if (location.hash.length !== 0) {
			      window.scrollTo(window.scrollX, window.scrollY - 100);
			   }
			}
			window.setTimeout(offsetAnchor, 10);



		});


			
		$(document).ready(function(){
			// Add smooth scrolling to all links
			$(".topList li a").on('click', function(event) {

				// Make sure this.hash has a value before overriding default behavior
				if (this.hash !== "") {
				  // Prevent default anchor click behavior
				  event.preventDefault();

				  // Store hash
				  var hash = this.hash;

				  // Using jQuery's animate() method to add smooth page scroll
				  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
				  $('html, body').animate({
				    scrollTop: $(hash).offset().top -100 //- $(hash).attr('data-section-offset')
				  }, 800, function(){

				    // Add hash (#) to URL when done scrolling (default click behavior)
				    window.location.hash = hash -100;
				  });
				} // End if
			});


			//begin back-top scroll button
			//if page is scrolled down 500px show button
			if ($('#back-to-top').length) {
				var scrollTrigger = 500, // px
				    backToTop = function () {
				        var scrollTop = $(window).scrollTop();
				        if (scrollTop > scrollTrigger) {
				            $('#back-to-top').addClass('button-show');
				        } else {
				            $('#back-to-top').removeClass('button-show');
				        }
				    };
				backToTop();
				$(window).on('scroll', function () {
				    backToTop();
				});
				    //when button is clicked return to top
				$('#back-to-top').on('click', function (e) {
				    e.preventDefault();
				    $('html,body').animate({
				        scrollTop: 0
				    }, 700);
				});
			}	

		});






		$(document).ready(function(){

		    //on click of responsive navbar show nav ul
			$("#responsive-navbar").click(function() {
			    //$(".navContainer ul").slideToggle();
			    $(".navContainer ul").toggleClass("show");
			//    if ($(".navContainer ul").is(':visible')) {
			//    	$('.navContainer').css('height', 'auto');
			//    } else {
			//    	$('.navContainer').css('height', '80px');
			//    }
			});

			$('#responsive-navbar').click(function() {
			     initiateNav(this);
			});
		/*
		  $(".loginLink").click(function() {
		    $('#loginModal').addClass('show');
		  });

		  $(".close").click(function() {
		    $('#loginModal').removeClass('show');
		  });
		*/
		/*
		  function myFunction(d) {
		    if (d.matches) { // If media query matches
		      $('.navContainer').css('height', 'auto');
		    } 
		  }
		// */
		//   var d = window.matchMedia("(min-width: 768px)")
		//   myFunction(d) // Call listener function at run time
		//   d.addListener(myFunction) // Attach listener function on state changes


		});



		// media query event handler
		if (matchMedia) {
		const mq = window.matchMedia("(min-width: 769px)");
		mq.addListener(WidthChange);
		WidthChange(mq);
		}

		/*
		// media query change
		function WidthChange(mq) {
		if (mq.matches) {
		$("nav ul:not(.sub-menu)").css("display" , "block");
		} else {
		$("nav ul:not(.sub-menu)").css("display" , "none");
		}

		}
		*/

		// media query change
		function WidthChange(mq) {
		if (mq.matches) {
		$("nav ul:not(.sub-menu)").addClass("show");
		} else {
		$("nav ul:not(.sub-menu)").removeClass("show");
		}

		}

		$(document).ready(function(){
			$(".soft-scroll").on('click', function(event) {
			    if (this.hash !== "") {
			      event.preventDefault();
			      var hash = this.hash;
			      $('html, body').animate({
			        scrollTop: $(hash).offset().top -80
			      }, 800, function(){
			        window.location.hash = hash -80;
			      });
			    } 
			});
		});

		
	});

	//////////////END SCRIPTS 

	
})(jQuery, this);
