$(document).ready(function() {
	var count = 0;
	$('.cat-image').click(function() {
		count++;
		$('.count').text(count);
	});

});