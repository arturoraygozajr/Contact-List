'use strict'

$(document).ready(init);

function init(){
	$('.add').click(addContact);

}

function addContact() {
	//console.log('yea');
	var name = $('#name').val();
	var phone = $('#phone').val();
	var email = $('email').val();
	var address = $('address').val();
}