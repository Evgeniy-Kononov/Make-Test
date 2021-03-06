import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	svg4everybody();
});
$(document).ready(function (){
	console.log('вошли в валидацию почты');
	$('.form').submit(function () {
		const patternNumber1 = /[0-9]{4}$/gim;
		const patternNumber2 = /[0-9]{4}$/gim;
		const patternNumber3 = /[0-9]{4}$/gim;
		const patternNumber4 = /[0-9]{4}$/gim;
		const patternNumberCode = /[0-9]{3}$/gim;
		const patternText = /^(([a-zA-Z]{3,})(\s([a-zA-Z]{3,}))){1}$/gim;
		const number1 = $('#number1').val().trim();
		const number2 = $('#number2').val().trim();
		const number3 = $('#number3').val().trim();
		const number4 = $('#number4').val().trim();
		const code = $('#code').val().trim();
		const login = $('#login').val().trim();

		if (!patternNumber1.test(number1)){
			$('#number1').addClass('card-first_number-invalid');
			$('#number1').removeClass('card-first_number-valid');
			event.preventDefault();
		}else {
			$('#number1').removeClass('card-first_number-invalid');
			$('#number1').addClass('card-first_number-valid');
		}
		if (!patternNumber2.test(number2)){
			$('#number2').addClass('card-first_number-invalid');
			$('#number2').removeClass('card-first_number-valid');
			event.preventDefault();
		}else {
			$('#number2').removeClass('card-first_number-invalid');
			$('#number2').addClass('card-first_number-valid');
		}
		if (!patternNumber3.test(number3)){
			$('#number3').addClass('card-first_number-invalid');
			$('#number3').removeClass('card-first_number-valid');
			event.preventDefault();
		}else {
			$('#number3').removeClass('card-first_number-invalid');
			$('#number3').addClass('card-first_number-valid');
		}
		if (!patternNumber4.test(number4)){
			$('#number4').addClass('card-first_number-invalid');
			$('#number4').removeClass('card-first_number-valid');
			event.preventDefault();
		}else {
			$('#number4').removeClass('card-first_number-invalid');
			$('#number4').addClass('card-first_number-valid');
		}
		if (!patternNumberCode.test(code)){
			$('#code').addClass('card-first_number-invalid');
			$('#code').removeClass('card-first_number-valid');
			event.preventDefault();
		}else {
			$('#code').removeClass('card-first_number-invalid');
			$('#code').addClass('card-first_number-valid');
		}
		if (!patternText.test(login)){
			$('#login').addClass('card-first_number-invalid');
			$('#login').removeClass('card-first_number-valid');
			event.preventDefault();
		}else {
			$('#login').removeClass('card-first_number-invalid');
			$('#login').addClass('card-first_number-valid');
		}
	});
});
