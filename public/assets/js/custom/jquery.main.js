jQuery(document).ready(function($){
	initCollapse();
	initRetinaCover();
	initAutocomplete();
	initTab();
	initHideSeek();
	initFormValidation();
});


// Form validation plugin jQuery
function initFormValidation() {
	jQuery('.com-reg-form').formValidation({
		errorClass: 'error',
		addClassToParent: '.com-reg-form__field'
	});
}

// autocomplete init
function initAutocomplete() {
	jQuery('input.autocomplete-1').uiAutocomplete({
		source: 'assets/inc/autocomplete-source-1.json',
		highlight: true,
		appendTo: '#autocomplete-1'
	});

	jQuery('input.autocomplete-2').uiAutocomplete({
		source: 'assets/inc/autocomplete-source-2.json',
		highlight: true,
		appendTo: '#autocomplete-2'
	});
}

// retina cover init
function initRetinaCover() {
	jQuery('.bg-stretch').retinaCover();
}

// open-close init
function initCollapse() {
	jQuery('#nav').collapse({
		activeClass: 'is-active',
		opener: '.nav__toggle',
		slider: '.nav__drop',
		animSpeed: 400,
		hideOnClickOutside: true
	});

	jQuery('.search-form').collapse({
		activeClass: 'is-active',
		opener: '.search-form__toggle',
		slider: '.search-form__container',
		animSpeed: 400,
		hideOnClickOutside: true
	});

	jQuery('.header .app-stores').collapse({
		activeClass: 'is-active',
		opener: '.app-stores__toggle',
		slider: '.app-stores__holder',
		animSpeed: 400,
		hideOnClickOutside: true
	});

	jQuery('.collapse').collapse({
		activeClass: 'is-active',
		opener: '.collapse__toggle',
		slider: '.collapse__content',
		animSpeed: 400,
		effect: 'slide'
	});
}

// tab init ( aria-tabs by DavideTriso )
function initTab() {
	jQuery('.tab-group').ariaTabs();
}

// Text live search & filter (hideseek)
function initHideSeek() {
	jQuery('#browse-city__field').hideseek();
}