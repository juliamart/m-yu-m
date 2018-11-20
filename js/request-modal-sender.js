$(document).ready(function () {
	$('.request-modal-btn').click(function (e) {
		e.preventDefault();
		$('#request-modal').addClass('show-modal');
		$('body').addClass('fixed-body');
	});
	$('.request-modal__close').click(function () {
		$('#request-modal').removeClass('show-modal');
		$('body').removeClass('fixed-body');
	});
	$('#request-modal .sender-phone').mask('+38 (999) 99-99-999');
	$('#request-modal .sender-btn').on('click', senderValidator);
	$('#request-modal .sender-phone').keypress(function () {
		$('#request-modal .err-val-phone').hide();
	});
	$('#request-modal .sender-name').keypress(function () {
		if ($('#request-modal .sender-name').val().length >= 40) return false;
	});
	
	function phoneErr() {
		$('#request-modal .err-val-phone').show();
	}
	
	function senderValidator() {
		$("#request-modal .sender-phone").val() != '' ? senderStart() : phoneErr();
	}
	
	function senderStart() {
		if ($('#request-modal .sender-name').val() == '') $('#request-modal .sender-name').val('Имя не заполнено');
		ifSuccess();
	}
	
	function ifSuccess() {
		$('#request-modal .sender-name, #request-modal .sender-email, #request-modal .sender-phone, #request-modal .sender-message').val('');
		$('#request-modal .sender-done').show();
	}
});
