(function ($) {
	var $document = $(document);

	$document.ready(function () {
		$('.project').on('click', function() {
			var index = $(this).data('index');
			$('.overlay[data-index="' + index + '"]').addClass('fade-in');
			$('.overlay[data-index="' + index + '"] .section--middle').addClass('expand');
			$('.section--right').addClass('slide-right');
			$('.section--left').addClass('slide-left');
		});

		$('.overlay, .focus__close').on('click', function(e) {
			if(e.target != this) return;
			$('.section--right').removeClass('slide-right');
			$('.section--left').removeClass('slide-left');
			$('.section--middle').removeClass('expand');
			$('.overlay').removeClass('fade-in');
		});
    });

})(jQuery);