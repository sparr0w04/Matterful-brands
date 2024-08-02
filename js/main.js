//SIDER BEFORE/AFTER  ===============================================
;(function ($) {
	var $dragMe = $('.dragme'),
		$container = $('.sl-container'),
		$viewAfter = $('.view-after')
	$dragMe.draggable({
		containment: 'parent',
		drag: function () {
			$viewAfter.css({
				width: parseFloat($(this).css('left')) + 5,
			})
		},
	})
	$container.on('click', function (event) {
		var eventLeft = event.pageX - $container.offset().left - 15
		animateTo(eventLeft)
	})
	animateTo('50%')
	function animateTo(_left) {
		$dragMe.animate(
			{
				left: _left,
			},
			'slow',
			'linear'
		)
		$viewAfter.animate(
			{
				width: _left,
			},
			'slow',
			'linear'
		)
	}
})(jQuery)

// ===============================================
;(function ($) {
	var $dragMe = $('.dragme-second'),
		$container = $('.sl-container-second'),
		$viewAfter = $('.view-after-second')
	$dragMe.draggable({
		containment: 'parent',
		drag: function () {
			$viewAfter.css({
				width: parseFloat($(this).css('left')) + 5,
			})
		},
	})
	$container.on('click', function (event) {
		var eventLeft = event.pageX - $container.offset().left - 15
		animateTo(eventLeft)
	})
	animateTo('50%')
	function animateTo(_left) {
		$dragMe.animate(
			{
				left: _left,
			},
			'slow',
			'linear'
		)
		$viewAfter.animate(
			{
				width: _left,
			},
			'slow',
			'linear'
		)
	}
})(jQuery)

//SIMPLE-SLIDER  ======================================================
$('[data-slider]').slick({
	infinite: true,
	fade: false,
	slidesToShow: 1,
	slidesToScroll: 1,
})

// ACCORDION ======================================================
$('[data-collapse]').on('click', function (event) {
	event.preventDefault()

	var $this = $(this)
	blockid = $this.data('collapse')

	$(blockid).slideToggle()
})
