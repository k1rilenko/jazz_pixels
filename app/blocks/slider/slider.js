app.sliderServices = {
	name: 'slider',
	description: 'slick slider',
	init(selector, options) {
		app.common.initScript('slick.min', 'slick', () => {
			this.runSlider(selector, options || this.options);
		});
		app.common.initStyle('slick');
	},
	runSlider(selector, options) {
		const $slider = $(selector || '.slider__slide');
		$slider.slick(options);
	},
	options: {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		infinite: false,
		cssEase: 'easeInOutCubic',
		speed: 500,
		responsive: [{
			breakpoint: 1600,
			settings: {
				slidesToShow: 1,
				infinite: true
			}
		}, {
			breakpoint: 1300,
			settings: {
				slidesToShow: 1
			}
		}, {
			breakpoint: 991,
			settings: {
				slidesToShow: 1
			}
		}, {
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: true
			}
		}]
	}
};
