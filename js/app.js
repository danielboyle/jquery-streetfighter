$(document).ready(function() {
	gameIntro();
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show().finish().animate(
			{'left':'1020px'}, 
			500, 
			function() {
				$(this).hide();
				$(this).css('left', '600px');
			}
		);
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
});

$(document).keydown(function(e) {
	if (e.keyCode === 88) {
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-cool').show();
	};
});

$(document).keyup(function(e) {
	if (e.keyCode === 88) {
		$('.ryu-cool').hide();
		$('.ryu-still').show();
	}
});

function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play(); 
}

function gameIntro() {
	$('.intro-text').fadeIn(3000, function() {
		$(this).fadeOut(3000, function() {
			$('.instruction1-text').fadeIn(3000, function() {
				$('.instruction2-text').fadeIn(3000, function() {
					$('.instruction1-text').fadeOut(3000);
					$('.instruction2-text').fadeOut(3000);
				});
			})
		})
	})
}