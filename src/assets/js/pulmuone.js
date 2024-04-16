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
	spaceBetween: 20,
	freeMode: true,
	speed: 6000,
	allowTouchMove: false,
	autoplay: {
		delay: 100,
		waitForTransition: false
	}
	// breakpoints: {
	// 	1280: {
	// 		slidesPerView:
	// 	}
	// }
});

const coverflowSwiper = new Swiper(".coverflow", {
	speed: 1000,
	direction: "vertical",
	slidesPerView: "auto",
	// effect: "creative",
	// creativeEffect: {
	// 	prev: {
	// 		translate: [0, -50, 0],
	// 		opacity: 0,
	// 		rotate: [0, 0, 0],
	// 		shadow: true,
	// 		limitProgress: 3,
	// 		shadowPerProgress: true
	// 	},
	// 	next: {
	// 		translate: [0, 30, 0],
	// 		scale: 0.97,
	// 		rotate: [0, 0, 0],
	// 		opacity: 1
	// 	}
	// }
	effect: "coverflow",
	coverflowEffect: {
		rotate: 0,
		stretch: 654,
		depth: 20,
		modifier: 1,
		slideShadows: false
	}
	// on: {
	// 	update: function (swiper) {
	// 		swiper.slides[3].style.transform = ``;
	// 		// swiper.slides[3].style.border = `1px solid red`;
	// 	},
	// 	sliderMove: function (swiper, event) {
	// 		console.log(swiper.activeIndex);
	// 		if (swiper.activeIndex === 0) {
	// 			swiper.on("update", () => {
	// 				swiper.slides[3].style.transform = `translate3d(calc(0px), calc(-1980px), calc(0px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(0.94)`;
	// 			});
	// 		}
	// 	}
	// }
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

const prologue = () => {
	const prologue = document.querySelector(".prologue");
	const prologueGroup = document.querySelector(".prologue__group");
	let anniversaryScale, anniversaryMargin, circleScale;

	window.addEventListener("scroll", (event) => {
		anniversaryScale = (window.scrollY - prologue.offsetHeight * 2) * 1.5;
		anniversaryMargin = (window.scrollY - prologue.offsetHeight * 1.8) * 0.04;
		circleScale = ((window.scrollY - prologue.offsetHeight * 1.8) * 2) / 2;

		if (anniversaryScale < -2968.25) {
			anniversaryScale = -2968.25;
		} else if (anniversaryScale > -100) {
			anniversaryScale = -100;
			prologueGroup.classList.add("prologue__group--active");
		} else if (anniversaryScale < -100) {
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

		prologue.style.setProperty("--prologue-anniversary-scale", anniversaryScale + "%");
		prologue.style.setProperty("--prologue-anniversary-margin", anniversaryMargin + "%");
		prologue.style.setProperty("--prologue-circle-scale", circleScale + "%");
	});
};

window.addEventListener("DOMContentLoaded", () => {
	kv();
	prologue();
});
