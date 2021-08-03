/* LOGIN - MAIN.JS - dp 2017 */

// LOGIN TABS
$(function() {
	var tab = $('.tabs h3 a');
	tab.on('click', function(event) {
		event.preventDefault();
		tab.removeClass('active');
		$(this).addClass('active');
		tab_content = $(this).attr('href');
		$('div[id$="tab-content"]').removeClass('active');
		$(tab_content).addClass('active');
	});
});

// SLIDESHOW
$(function() {
	$('#slideshow > div:gt(0)').hide();
	setInterval(function() {
		$('#slideshow > div:first')
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('#slideshow');
	}, 3850);
});

// CUSTOM JQUERY FUNCTION FOR SWAPPING CLASSES
(function($) {
	'use strict';
	$.fn.swapClass = function(remove, add) {
		this.removeClass(remove).addClass(add);
		return this;
	};
}(jQuery));

// SHOW/HIDE PANEL ROUTINE (needs better methods)
// I'll optimize when time permits.
$(function() {
	$('.agree,.forgot, #toggle-terms, .log-in, .sign-up').on('click', function(event) {
		event.preventDefault();
		var terms = $('.terms'),
        recovery = $('.recovery'),
        close = $('#toggle-terms'),
        arrow = $('.tabs-content .fa');
		if ($(this).hasClass('agree') || $(this).hasClass('log-in') || ($(this).is('#toggle-terms')) && terms.hasClass('open')) {
			if (terms.hasClass('open')) {
				terms.swapClass('open', 'closed');
				close.swapClass('open', 'closed');
				arrow.swapClass('active', 'inactive');
			} else {
				if ($(this).hasClass('log-in')) {
					return;
				}
				terms.swapClass('closed', 'open').scrollTop(0);
				close.swapClass('closed', 'open');
				arrow.swapClass('inactive', 'active');
			}
		}
		else if ($(this).hasClass('forgot') || $(this).hasClass('sign-up') || $(this).is('#toggle-terms')) {
			if (recovery.hasClass('open')) {
				recovery.swapClass('open', 'closed');
				close.swapClass('open', 'closed');
				arrow.swapClass('active', 'inactive');
			} else {
				if ($(this).hasClass('sign-up')) {
					return;
				}
				recovery.swapClass('closed', 'open');
				close.swapClass('closed', 'open');
				arrow.swapClass('inactive', 'active');
			}
		}
	});
});

// DISPLAY MSSG
$(function() {
	$('.recovery .button').on('click', function(event) {
		event.preventDefault();
		$('.recovery .mssg').addClass('animate');
		setTimeout(function() {
			$('.recovery').swapClass('open', 'closed');
			$('#toggle-terms').swapClass('open', 'closed');
			$('.tabs-content .fa').swapClass('active', 'inactive');
			$('.recovery .mssg').removeClass('animate');
		}, 2500);
	});
});

// DISABLE SUBMIT FOR DEMO
$(function() {
	$('.button').on('click', function(event) {
		$(this).stop();
		event.preventDefault();
		return false;
	});
});

// (function() {
//     var button, buttonStyles, materialIcons;
  
//     materialIcons = '<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">';
  
//     buttonStyles = '<link href="https://robsonnascimento.eti.br/codepen.css" rel="stylesheet">';
  
//     button = '<a href="http://robsonnascimento.eti.br" class="at-button"><i class="material-icons">link</i></a>';
  
//     document.body.innerHTML += materialIcons + buttonStyles + button;
  
//   }).call(this);
  
  //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLE1BQUEsRUFBQSxZQUFBLEVBQUE7O0VBQUEsYUFBQSxHQUFnQjs7RUFDaEIsWUFBQSxHQUFlOztFQUVmLE1BQUEsR0FBUzs7RUFFVCxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQWQsSUFBMkIsYUFBQSxHQUFnQixZQUFoQixHQUErQjtBQUwxRCIsInNvdXJjZXNDb250ZW50IjpbIm1hdGVyaWFsSWNvbnMgPSAnPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIiByZWw9XCJzdHlsZXNoZWV0XCI+J1xuYnV0dG9uU3R5bGVzID0gJzxsaW5rIGhyZWY9XCJodHRwczovL2NvZGVwZW4uaW8vYW5keXRyYW4vcGVuL3ZMbVJWcC5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCI+J1xuXG5idXR0b24gPSAnPGEgaHJlZj1cImh0dHA6Ly9hbmR5dHJhbi5tZVwiIGNsYXNzPVwiYXQtYnV0dG9uXCI+PGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmxpbms8L2k+PC9hPidcblxuZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgKz0gbWF0ZXJpYWxJY29ucyArIGJ1dHRvblN0eWxlcyArIGJ1dHRvbiJdfQ==
  //# sourceURL=coffeescript