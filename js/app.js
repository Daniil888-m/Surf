$(function () {

	$('.main-header__slider').slick({
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		waitForAnimate: false,
		asNavFor: '.dotts-slider',
		infinite: true,
	});
	window.addEventListener('resize', function () {

		$('.dotts-slider').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			focusOnSelect: true,

			asNavFor: '.main-header__slider',
			responsive: [
				{
					breakpoint: 960,
					settings: "unslick"
				},],


		});
		$('.main-header__slider').slick({
			fade: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			waitForAnimate: false,
			asNavFor: '.dotts-slider',
			infinite: true,
		});
	})


	$('.main-header .slick-arrow').addClass('icon_arrow-right');



	$('.dotts-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		focusOnSelect: true,

		asNavFor: '.main-header__slider',
		responsive: [
			{
				breakpoint: 960,
				settings: "unslick"
			},],


	});




	$('.slider-map').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		focusOnSelect: true,
		arrows: false,
		asNavFor: '.slider-serf',



	});

	$('.slider-serf').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		asNavFor: '.slider-map',
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 870,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
				}
			},

		],

		infinite: true,
		autoplaySpeed: 5000,
		focusOnSelect: true,
		prevArrow: '<div class=" slider-serf__arrow-prev  slider-serf__arrow slider-arrow-grey"><svg width="25" height="21" viewBox="0 0 25 21"  xmlns="http://www.w3.org/2000/svg"><path d="M8.77789 0.562669L0.564298 8.71345C-0.188099 9.46459 -0.188099 10.6838 0.564298 11.4324L8.77789 19.5881C9.5366 20.3392 10.7646 20.3354 11.5233 19.5881C12.2744 18.8357 12.2744 17.6215 11.5233 16.8691L6.71818 12.1016H22.1324C23.2459 12.1016 24.1467 11.202 24.1467 10.0885C24.1467 8.97625 23.2459 8.07537 22.1324 8.07537H6.68919L11.5233 3.28282C12.2744 2.53168 12.2744 1.31623 11.5233 0.565085C10.7658 -0.187313 9.53783 -0.188569 8.77789 0.562568V0.562669Z" fill="white"/></svg></div>',
		nextArrow: '<div class=" slider-serf__arrow_right slider-arrow-grey slider-arrow-grey_right"><svg width="25" height="21" viewBox="0 0 25 21"  xmlns="http://www.w3.org/2000/svg"><path d="M8.77789 0.562669L0.564298 8.71345C-0.188099 9.46459 -0.188099 10.6838 0.564298 11.4324L8.77789 19.5881C9.5366 20.3392 10.7646 20.3354 11.5233 19.5881C12.2744 18.8357 12.2744 17.6215 11.5233 16.8691L6.71818 12.1016H22.1324C23.2459 12.1016 24.1467 11.202 24.1467 10.0885C24.1467 8.97625 23.2459 8.07537 22.1324 8.07537H6.68919L11.5233 3.28282C12.2744 2.53168 12.2744 1.31623 11.5233 0.565085C10.7658 -0.187313 9.53783 -0.188569 8.77789 0.562568V0.562669Z" fill="white"/></svg></div>',
	})
});

$('.holder-slider').slick({
	fade: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	waitForAnimate: false,
	asNavFor: '.dotts-slider',
	infinite: true,
	prevArrow: '<div class="slider-serf__arrow-prev slider-serf__arrow slider-arrow-grey"><svg width="25" height="21" viewBox="0 0 25 21"  xmlns="http://www.w3.org/2000/svg"><path d="M8.77789 0.562669L0.564298 8.71345C-0.188099 9.46459 -0.188099 10.6838 0.564298 11.4324L8.77789 19.5881C9.5366 20.3392 10.7646 20.3354 11.5233 19.5881C12.2744 18.8357 12.2744 17.6215 11.5233 16.8691L6.71818 12.1016H22.1324C23.2459 12.1016 24.1467 11.202 24.1467 10.0885C24.1467 8.97625 23.2459 8.07537 22.1324 8.07537H6.68919L11.5233 3.28282C12.2744 2.53168 12.2744 1.31623 11.5233 0.565085C10.7658 -0.187313 9.53783 -0.188569 8.77789 0.562568V0.562669Z" fill="white"/></svg></div>',
	nextArrow: '<div class=" slider-serf__arrow_right slider-arrow-grey slider-arrow-grey_right"><svg width="25" height="21" viewBox="0 0 25 21"  xmlns="http://www.w3.org/2000/svg"><path d="M8.77789 0.562669L0.564298 8.71345C-0.188099 9.46459 -0.188099 10.6838 0.564298 11.4324L8.77789 19.5881C9.5366 20.3392 10.7646 20.3354 11.5233 19.5881C12.2744 18.8357 12.2744 17.6215 11.5233 16.8691L6.71818 12.1016H22.1324C23.2459 12.1016 24.1467 11.202 24.1467 10.0885C24.1467 8.97625 23.2459 8.07537 22.1324 8.07537H6.68919L11.5233 3.28282C12.2744 2.53168 12.2744 1.31623 11.5233 0.565085C10.7658 -0.187313 9.53783 -0.188569 8.77789 0.562568V0.562669Z" fill="white"/></svg></div>',
});;
function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});

/* Проверка на пользователя с мобильным */
var isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android()
			|| isMobile.BlackBerry()
			|| isMobile.iOS()
			|| isMobile.Opera()
			|| isMobile.Windows()
		);
	}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');
	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0) {
		for (let i = 0; i < menuArrows.length; i++) {
			const menuArrow = menuArrows[i];
			menuArrow.addEventListener('click', function (e) {
				menuArrow.parentElement.classList.toggle('_active')
			})
		}
	}

} else {
	document.body.classList.add('_pc')
}

function detectIEEdge() {
	var ua = window.navigator.userAgent;

	var msie = ua.indexOf('MSIE ');
	if (msie > 0) {
		// IE 10 or older => return version number
		return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	}

	var trident = ua.indexOf('Trident/');
	if (trident > 0) {
		// IE 11 => return version number
		var rv = ua.indexOf('rv:');
		return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	}

	var edge = ua.indexOf('Edge/');
	if (edge > 0) {
		// Edge => return version number
		return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	}

	// other browser
	return false;
}

const isIeEdge = detectIEEdge();

if (isIeEdge) {
	function ibg() {
		let ibgmages = document.querySelectorAll('._ibg');
		for (let i = 0; i < ibgmages.length; i++) {
			console.log('ggg');

			ibgmages[i].classList.add('ibg');
		}

		let ibg = document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img')) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}


	}
	ibg();
};
//

const menuNav = document.querySelector('.main-nav');

const iconMenu = document.querySelector('.icon-menu');
if (iconMenu) {

	iconMenu.addEventListener('click', function () {
		iconMenu.classList.toggle('_active');
		menuNav.classList.toggle('_active');
	})
};
// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
// e.x. data-da=".item,992,2"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";

function DynamicAdapt(type) {
	this.type = type;
}

DynamicAdapt.prototype.init = function () {
	const _this = this;
	// массив объектов
	this.оbjects = [];
	this.daClassname = "_dynamic_adapt_";
	// массив DOM-элементов
	this.nodes = document.querySelectorAll("[data-da]");

	// наполнение оbjects объктами
	for (let i = 0; i < this.nodes.length; i++) {
		const node = this.nodes[i];
		const data = node.dataset.da.trim();
		const dataArray = data.split(",");
		const оbject = {};
		оbject.element = node;
		оbject.parent = node.parentNode;
		оbject.destination = document.querySelector(dataArray[0].trim());
		оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
		оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
		оbject.index = this.indexInParent(оbject.parent, оbject.element);
		this.оbjects.push(оbject);
	}

	this.arraySort(this.оbjects);

	// массив уникальных медиа-запросов
	this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
		return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
	}, this);
	this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
		return Array.prototype.indexOf.call(self, item) === index;
	});

	// навешивание слушателя на медиа-запрос
	// и вызов обработчика при первом запуске
	for (let i = 0; i < this.mediaQueries.length; i++) {
		const media = this.mediaQueries[i];
		const mediaSplit = String.prototype.split.call(media, ',');
		const matchMedia = window.matchMedia(mediaSplit[0]);
		const mediaBreakpoint = mediaSplit[1];

		// массив объектов с подходящим брейкпоинтом
		const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
			return item.breakpoint === mediaBreakpoint;
		});
		matchMedia.addListener(function () {
			_this.mediaHandler(matchMedia, оbjectsFilter);
		});
		this.mediaHandler(matchMedia, оbjectsFilter);
	}
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
	if (matchMedia.matches) {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.moveTo(оbject.place, оbject.element, оbject.destination);
		}
	} else {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			if (оbject.element.classList.contains(this.daClassname)) {
				this.moveBack(оbject.parent, оbject.element, оbject.index);
			}
		}
	}
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
	element.classList.add(this.daClassname);
	if (place === 'last' || place >= destination.children.length) {
		destination.insertAdjacentElement('beforeend', element);
		return;
	}
	if (place === 'first') {
		destination.insertAdjacentElement('afterbegin', element);
		return;
	}
	destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
	element.classList.remove(this.daClassname);
	if (parent.children[index] !== undefined) {
		parent.children[index].insertAdjacentElement('beforebegin', element);
	} else {
		parent.insertAdjacentElement('beforeend', element);
	}
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
	if (this.type === "min") {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return -1;
				}

				if (a.place === "last" || b.place === "first") {
					return 1;
				}

				return a.place - b.place;
			}

			return a.breakpoint - b.breakpoint;
		});
	} else {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return 1;
				}

				if (a.place === "last" || b.place === "first") {
					return -1;
				}

				return b.place - a.place;
			}

			return b.breakpoint - a.breakpoint;
		});
		return;
	}
};

const da = new DynamicAdapt("max");
da.init();;
// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
	const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
	const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
	const dropDownListItems = dropDownList.querySelectorAll('.dropdown__item');
	const dropDownInput = dropDownWrapper.querySelector('.dropdown__input_hidden');
	let itemSelected = dropDownList?.querySelector('.dropdown__item[selected]');

	if (itemSelected) {
		dropDownBtn.innerText = itemSelected.innerText;
		dropDownInput.value = itemSelected.dataset.value;

	}



	// Клик по кнопке. Открыть/Закрыть select
	dropDownBtn.addEventListener('click', function (e) {
		dropDownList.classList.toggle('dropdown__list_visible');
		this.classList.add('dropdown__button_active');
	});

	// Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
	dropDownListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			dropDownBtn.innerText = this.innerText;
			dropDownBtn.focus();
			dropDownInput.value = this.dataset.value;
			dropDownList.classList.remove('dropdown__list_visible');
		});
	});

	// Клик снаружи дропдауна. Закрыть дропдаун
	document.addEventListener('click', function (e) {
		if (e.target !== dropDownBtn) {
			dropDownBtn.classList.remove('dropdown__button_active');
			dropDownList.classList.remove('dropdown__list_visible');
		}
	});

	// Нажатие на Tab или Escape. Закрыть дропдаун
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			dropDownBtn.classList.remove('dropdown__button_active');
			dropDownList.classList.remove('dropdown__list_visible');
		}
	});
});

//============================================================================
//tabs

document.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelector('.tabs');
	const tabsBtn = document.querySelectorAll('.tabs__btn');
	const tabsContent = document.querySelectorAll('.tabs__content');

	if (tabs) {
		tabs.addEventListener('click', (e) => {
			if (e.target.classList.contains('tabs__btn')) {
				const tabsPath = e.target.dataset.tabsPath;
				tabsBtn.forEach(el => { el.classList.remove('tabs__btn_active') });
				document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__btn_active');
				tabsHandler(tabsPath);
			}

			if (e.target.classList.contains('tabs__arrow_prev')) {
				let activeBtn = document.querySelector('.tabs__btn_active');
				let activeParent = activeBtn.closest('.tabs__item');
				let previousParent = activeParent.previousElementSibling;

				if (previousParent) {
					let prevActive = previousParent.querySelector('.tabs__btn')
					tabsBtn.forEach(el => { el.classList.remove('tabs__btn_active') });
					prevActive.classList.add('tabs__btn_active');

					let path = prevActive.dataset.tabsPath;
					tabsHandler(path);
				}
			}

			if (e.target.classList.contains('tabs__arrow_next')) {
				let activeBtn = document.querySelector('.tabs__btn_active');
				let activeParent = activeBtn.closest('.tabs__item');
				let nextParent = activeParent.nextElementSibling;

				if (nextParent) {
					let nextActive = nextParent.querySelector('.tabs__btn');
					tabsBtn.forEach(el => { el.classList.remove('tabs__btn_active') });
					nextActive.classList.add('tabs__btn_active');

					let path = nextActive.dataset.tabsPath;
					tabsHandler(path);
				}
			}
		});
	}

	const tabsHandler = (path) => {
		tabsContent.forEach(el => { el.classList.remove('tabs__content_active') });
		document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content_active');
	};
});

//============================================================================
//stepper

const steppers = document.querySelectorAll('.stepper');

steppers.forEach(function (stepper) {
	const stepperInput = stepper.querySelector('.stepper__input');
	const stepperBtnUp = stepper.querySelector('.stepper__btn_up');
	const stepperBtnDown = stepper.querySelector('.stepper__btn_down');

	let count = stepperInput.value;

	const isNotApple = () => {
		if (!/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
			return false;
		}
		return true;
	};

	function allowNumbersOnly(e) {
		var code = (e.which) ? e.which : e.keyCode;
		if (code > 31 && (code < 48 || code > 57)) {
			e.preventDefault();
		}
	}

	stepperInput.addEventListener('keyup', (e) => {
		let self = e.currentTarget;

		if (self.value == '0') {
			self.value = 1;
		}
		count = stepperInput.value;

		//============================================================================
		if (count > parseInt(stepperInput.dataset.max)) {

			self.value = self.dataset.max;
		}
		//============================================================================

		if (isNotApple) {
			self.style.width = `${self.value.length + 1}ex`;
		} else {
			self.style.width = `${self.value.length + 2}ex`;
		}



		if (count == 1) {
			stepperBtnDown.classList.add('stepper__btn_disabled');
		} else {
			stepperBtnDown.classList.remove('stepper__btn_disabled');
		}
	});

	stepperInput.addEventListener('keypress', (e) => {
		allowNumbersOnly(e);
	});

	stepperInput.addEventListener('change', (e) => {
		let self = e.currentTarget;

		if (!self.value) {
			self.value = 1;
		}

		count = stepperInput.value;

		if (count == 1) {
			stepperBtnDown.classList.add('stepper__btn_disabled');
		} else {
			stepperBtnDown.classList.remove('stepper__btn_disabled');
		}
	});

	stepperBtnUp.addEventListener('click', (e) => {
		e.preventDefault();

		count++;
		if (count > parseInt(stepperInput.dataset.max)) {

			count = parseInt(stepperInput.dataset.max);
		}

		if (count == 1) {
			stepperBtnDown.classList.add('stepper__btn_disabled');
		} else {
			stepperBtnDown.classList.remove('stepper__btn_disabled');
		}

		stepperInput.value = count;

		if (isNotApple) {
			stepperInput.style.width = `${stepperInput.value.length + 1}ex`;
		} else {
			stepperInput.style.width = `${stepperInput.value.length + 2}ex`;
		}
	});

	stepperBtnDown.addEventListener('click', (e) => {
		e.preventDefault();

		count--;

		if (count == 1) {
			stepperBtnDown.classList.add('stepper__btn_disabled');
		} else {
			stepperBtnDown.classList.remove('stepper__btn_disabled');
		}

		stepperInput.value = count;

		if (isNotApple) {
			stepperInput.style.width = `${stepperInput.value.length + 1}ex`;
		} else {
			stepperInput.style.width = `${stepperInput.value.length + 2}ex`;
		}
	});

})

//============================================================================
//quantities
const quantities = document.querySelectorAll('.quantity');

quantities.forEach(function (quantity) {
	const quantityInput = quantity.querySelector('.quantity__input');
	const quantityBtnUp = quantity.querySelector('.quantity__btn_up');
	const quantityBtnDown = quantity.querySelector('.quantity__btn_down');
	const dataMax = quantityBtnUp.dataset.max;
	const dataMin = quantityBtnDown.dataset.min;

	let count = quantityInput.value;

	const isNotApple = () => {
		if (!/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
			return false;
		}
		return true;
	};

	function allowNumbersOnly(e) {
		var code = (e.which) ? e.which : e.keyCode;
		if (code > 31 && (code < 48 || code > 57)) {
			e.preventDefault();
		}
	}

	quantityInput.addEventListener('keyup', (e) => {
		let self = e.currentTarget;

		if (self.value == '0') {
			self.value = 1;
		}
		count = self.value;


		//============================================================================
		if (count > parseInt(quantityInput.dataset.max)) {


			self.value = self.dataset.max;
		}
		//============================================================================

		if (isNotApple) {
			self.style.width = `${self.value.length + 1}ex`;
		} else {
			self.style.width = `${self.value.length + 2}ex`;
		}


		if (count == 1) {
			quantityBtnDown.classList.add('quantity__btn_disabled');
		} else {
			quantityBtnDown.classList.remove('quantity__btn_disabled');
		}


	});

	quantityInput.addEventListener('keypress', (e) => {
		allowNumbersOnly(e);

	});

	quantityInput.addEventListener('change', (e) => {
		let self = e.currentTarget;

		if (!self.value) {
			self.value = 1;
		}
		count = quantityInput.value;

		if (count > dataMax) {
			quantityInput.value = dataMax;
			count = dataMax;
		}


		if (count == 1) {
			quantityBtnDown.classList.add('quantity__btn_disabled');
		} else {
			quantityBtnDown.classList.remove('quantity__btn_disabled');
		}
	});

	quantityBtnUp.addEventListener('click', (e) => {
		e.preventDefault();

		count++;
		if (count > dataMax) {

			count = dataMax;
		}

		if (count == 1) {
			quantityBtnDown.classList.add('quantity__btn_disabled');
		} else {
			quantityBtnDown.classList.remove('quantity__btn_disabled');
		}

		quantityInput.value = count;

		if (isNotApple) {
			quantityInput.style.width = `${quantityInput.value.length + 1}ex`;
		} else {
			quantityInput.style.width = `${quantityInput.value.length + 2}ex`;
		}
	});

	quantityBtnDown.addEventListener('click', (e) => {
		e.preventDefault();

		count--;

		if ((count == dataMin)) {
			quantityBtnDown.classList.add('quantity__btn_disabled');
		} else if (count < dataMin) {
			count++;
			quantityBtnDown.classList.add('quantity__btn_disabled');
		} else {
			quantityBtnDown.classList.remove('quantity__btn_disabled');
		}

		quantityInput.value = count;

		if (isNotApple) {
			quantityInput.style.width = `${quantityInput.value.length + 1}ex`;
		} else {
			quantityInput.style.width = `${quantityInput.value.length + 2}ex`;
		}
	});

})


quantities.forEach(function (item) {
	let quantityInput = item.querySelector('.quantity__input');
	let quantityUp = item.querySelector('.up');
	let quantityDown = item.querySelector('.down');
	let countItem = item.previousElementSibling.querySelector('.count');
	let parent = item.parentElement.parentElement;
	let parentInputs = parent.querySelectorAll('.quantity__input');
	countItem.innerText = quantityInput.value;

	let price = item.dataset.price;
	let finalPrice = item.parentElement.parentElement.querySelector('.final-price');

	finalPrice.textContent = getFinalPrice(parentInputs[0], parentInputs[1], price);

	quantityInput.addEventListener('change', function () {


		countItem.innerText = quantityInput.value;
		finalPrice.textContent = getFinalPrice(parentInputs[0], parentInputs[1], price);

	})
	quantityUp.addEventListener('click', function () {
		countItem.innerText = quantityInput.value;
		finalPrice.textContent = getFinalPrice(parentInputs[0], parentInputs[1], price);




	})
	quantityDown.addEventListener('click', function () {
		countItem.innerText = quantityInput.value;
		finalPrice.textContent = getFinalPrice(parentInputs[0], parentInputs[1], price);


	})

})


function getFinalPrice(input, input2, price) {
	return Math.round(input.value * input2.value * price);
}






;
/* SLIDE UP */
let slideUp = (target, duration = 500) => {

	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.boxSizing = 'border-box';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		//alert("!");
	}, duration);
}

/* SLIDE DOWN */
let slideDown = (target, duration = 500) => {

	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none') display = 'block';
	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.boxSizing = 'border-box';
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
	}, duration);
}

/* TOOGLE */
var slideToggle = (target, duration = 500) => {
	if (window.getComputedStyle(target).display === 'none') {
		return slideDown(target, duration);
	} else {
		return slideUp(target, duration);
	}
}

//=====================================
/* Плавная прокрутка*/


function smoothScroll(targets, duration, effect) {
	var target = document.querySelector(targets);
	var targetPosition = target.getBoundingClientRect().top; // distance wwith respect to element
	var startPosition = window.pageYOffset; // distance with respect to browser
	var distance = targetPosition - startPosition;
	var startTime = null;

	function animation(currentTime) {
		if (startTime === null) startTime = currentTime;
		var timeElapsed = currentTime - startTime;
		var scroll = ease(timeElapsed, startPosition, distance, duration);
		window.scrollTo(0, scroll);
		if (timeElapsed < duration) requestAnimationFrame(animation);
	}

	function ease(t, b, c, d) {
		switch (effect) {
			case "easeInOutCirc":
				t /= d / 2;
				if (t < 1) return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b;
				t -= 2;
				return (c / 2) * (Math.sqrt(1 - t * t) + 1) + b;
				break;
			case "linearTween":
				return (c * t) / d + b;
				break;
			case "easeInQuad":
				t /= d;
				return c * t * t + b;
				break;
			case "easeOutQuad":
				t /= d;
				return -c * t * (t - 2) + b;
				break;
			case "easeInCubic":
				t /= d;
				return c * t * t * t + b;
				break;
			// easeInOutQuad
			default:
				t /= d / 2;
				if (t < 1) return (c / 2) * t * t + b;
				t--;
				return (-c / 2) * (t * (t - 2) - 1) + b;
				break;
		}
	}

	requestAnimationFrame(animation);
}


let anchors = document.querySelectorAll('a[href^="#"]');
if (anchors) {
	anchors.forEach(function (item) {
		item.addEventListener('click', function (e) {
			e.preventDefault();
			const targetName = item.getAttribute('href');
			smoothScroll(targetName, 1000, 'easeInOutCirc');

		})
	});
}



//==================================

;
function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});

let mainGoodLabels = document.querySelectorAll('.main-good__label');

mainGoodLabels.forEach(function (item) {
	item.querySelector('.main-good__label-icon').addEventListener('click', function () {
		item.classList.toggle('_active');
	});

})


	;