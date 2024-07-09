"use strict";

/* iphone scroll bug */
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty("--vh", `${vh}px`);
});

const kvSwiper = new Swiper(".kv__swiper", {
	loop: true,
	slidesPerView: "auto",
	centeredSlides: true,
	freeMode: true,
	speed: 6000,
	allowTouchMove: false,
	autoplay: {
		delay: 0
	}
});

const coverflowSwiper = new Swiper(".coverflow", {
	speed: 1000,
	direction: "vertical",
	slidesPerView: "auto",
	effect: "coverflow",
	mousewheel: {
		releaseOnEdges: true
	},
	coverflowEffect: {
		rotate: 0,
		// stretch: 514,
		depth: 50,
		modifier: 1,
		slideShadows: false
	},
	touchReleaseOnEdges: true,
	threshold: 0,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	},
	breakpoints: {
		720: {
			coverflowEffect: {
				depth: 20
			}
		}
	},
	on: {
		init: function (swiper) {
			if (swiper.activeIndex === 0) {
				swiper.el.classList.add("white");
			}

			if (window.innerWidth > 720) {
				swiper.params.coverflowEffect.stretch = swiper.height - 60;
			} else {
				swiper.params.coverflowEffect.stretch = swiper.height - 75;
			}
			swiper.update();

			window.addEventListener("resize", function (event) {
				if (window.innerWidth > 720) {
					swiper.params.coverflowEffect.stretch = swiper.height - 60;
				} else {
					swiper.params.coverflowEffect.stretch = swiper.height - 75;
				}
				swiper.update();
			});
		},
		slideChange: function (swiper) {
			if (this.activeIndex === 0) {
				swiper.el.classList.add("white");
			} else {
				swiper.el.classList.remove("white");
			}
		}
	}
});

const kv = () => {
	const intro = document.querySelector(".intro");
	const introGroup = document.querySelector(".intro__group");
	const introFruits = document.querySelector(".intro__fruits");
	let calc;
	let opacity;

	if (window.scrollY < intro.offsetHeight / 2) {
		intro.classList.add("intro--hidden");
	} else {
		intro.classList.remove("intro--hidden");
	}

	window.addEventListener("scroll", (event) => {
		calc = (window.scrollY - intro.offsetHeight / 2) * 0.1;
		opacity = (window.scrollY - intro.offsetHeight / 2) * 0.002;

		if (window.scrollY < intro.offsetHeight / 2) {
			intro.classList.add("intro--hidden");
		} else {
			intro.classList.remove("intro--hidden");
		}

		if (calc < 0) {
			calc = 0;
		} else if (calc > 100) {
			calc = 100;
		}

		opacity = opacity - 1;

		if (opacity > 1) {
			opacity = 1;
		} else if (opacity < 0) {
			opacity = 0;
		}

		intro.style.setProperty("--intro-circle", calc + "%");
		intro.style.setProperty("--intro-group", "-" + calc + "vh");
		introGroup.style.opacity = opacity;
		introFruits.style.setProperty("--intro-fruits", opacity);
	});
};
kv();

const prologue = () => {
	const prologue = document.querySelector(".prologue");
	const prologueGroup = document.querySelector(".prologue__group");
	let anniversaryScale, anniversaryMargin, circleScale;

	window.addEventListener("scroll", (event) => {
		anniversaryScale = (window.scrollY - prologue.offsetHeight * 2) * 0.03;
		anniversaryMargin = (window.scrollY - prologue.offsetHeight * 2) * 0.04;
		circleScale = (window.scrollY - prologue.offsetHeight * 2) * 0.3;

		if (anniversaryScale < -29.6825) {
			anniversaryScale = -29.6825;
		} else if (anniversaryScale > -1) {
			anniversaryScale = -1;
			prologueGroup.classList.add("prologue__group--active");
		} else if (anniversaryScale < -1) {
			prologueGroup.classList.remove("prologue__group--active");
		}

		if (anniversaryMargin > 0) {
			anniversaryMargin = 0;
		} else if (anniversaryMargin < -48.33) {
			anniversaryMargin = -48.33;
		}

		if (circleScale < -331.63) {
			circleScale = -331.63;
		} else if (circleScale > -100) {
			circleScale = -100;
		}

		prologue.style.setProperty("--prologue-anniversary-scale", Math.abs(anniversaryScale));
		prologue.style.setProperty("--prologue-anniversary-margin", anniversaryMargin + "%");
		prologue.style.setProperty("--prologue-circle-scale", circleScale + "%");
	});
};
prologue();
