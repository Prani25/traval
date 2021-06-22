/* Author: 

*/


$(document).ready(function () {

	// Slider
	$('.resort-slider').slick({
		autoplay: true
	});

	// Counter 
	$('.count').counterUp({
		delay: 10,
		time: 1000
	});

	// toggle menu 
	$('.hamburger').click(function(){
		$('.hamburger').toggleClass('active');
		$('.menu').toggleClass('active');
	});

	// Search menu 

	$('.search a').click(function(){
		$('.search-form').toggleClass('active');
	})
});


// form validation

function formValidation() {
	let intouch = document.querySelector('.intouch');
	let name = document.querySelector('.name');
	let mobno = document.querySelector('.phone');
	let email = document.querySelector('.email');
	let message = document.querySelector('.message');
	let newsname = document.querySelector('.newsname');
	let newsemail = document.querySelector('.newsemail');
	let news_form = document.querySelector('.news-form') 

	let userCheck = /^[A-Za-z. ]{3,30}$/;
	let number = /^[0-9]{10}$/;
	let emailexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	let span = document.createElement('span');

	intouch.addEventListener('submit', function (e) {
		e.preventDefault();
		inputvalid();
		emptyinput();
	})

	news_form.addEventListener('submit',function(e){
		e.preventDefault();
		newsformvalidate();
		emptyinput();
	})

	function inputvalid() {
		if (!name.value || !userCheck.test(name.value)) {
			span.innerHTML = "* Please enter min 3 and max 30 character";
			name.parentElement.appendChild(span);
			return false;
		} else if (!mobno.value || !number.test(mobno.value)) {
			span.innerHTML = "* Enter valid 10 Digit Mob No.";
			mobno.parentElement.appendChild(span);
			return false;
		} else if (!email.value || !emailexp.test(email.value)) {
			span.innerHTML = "* Enter valid Email ID";
			email.parentElement.appendChild(span);
			return false;
		} else if (!message.value || !userCheck.test(mobno.value)) {
			span.innerHTML = "* Enter valid 10 Digit Mob No.";
			message.parentElement.appendChild(span);
			return false;
		} 
		else {
			removeSpan(name);
			removeSpan(mobno);
			removeSpan(email);
			return true;
		}
	}
	function removeSpan(elem) {
		let span = elem.parentElement.querySelectorAll('span');
		for (let i = 0; i < span.length; i++) {
			span[i].remove();
		}
	}
	function emptyinput() {
		name.value = "";
		mobno.value = "";
		email.value = "";
	}

	function newsformvalidate(){
		if (!newsname.value || !userCheck.test(newsname.value)) {
			span.innerHTML = "* Please enter min 3 and max 30 character";
			newsname.parentElement.appendChild(span);
			return false;
		} else if (!newsemail.value || !emailexp.test(newsemail.value)) {
			span.innerHTML = "* Enter valid Email ID";
			newsemail.parentElement.appendChild(span);
			return false;
		} 
		else {
			removeSpan(newsname);
			removeSpan(newsemail);
			return true;
		}
	}
}
formValidation();





















