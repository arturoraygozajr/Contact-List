'use strict'

$(document).ready(init);

function init(){
	$('.add').click(addContact);
	$('tbody').on('click', '.fa-trash', removeContact);
	if(localStorage.getItem('contacts'))
	updateContacts();
}

function removeContact() {
	var deleteIndex = $(this).closest('tr').index();
	console.log(deleteIndex);
	$(this).closest('tr').remove();
	var contacts = JSON.parse(localStorage.getItem('contacts'));
	contacts.splice((deleteIndex-1), 1);
	contacts = JSON.stringify(contacts);
	localStorage.setItem('contacts', contacts);

}

function addContact() {
	//console.log('yea');
	if(!localStorage.getItem('contacts')){
		var contacts = [];
	} else {
		var contacts = JSON.parse(localStorage.getItem('contacts'));
	}
	var contact = {};
	contact.name = $('#name').val();
	contact.phone = $('#phone').val();
	contact.email = $('#email').val();
	contact.address = $('#address').val();
	contact = JSON.stringify(contact);
	contacts.push(contact);
	contacts = JSON.stringify(contacts);
	localStorage.setItem("contacts", contacts);
	createContact(contact);
}

function updateContacts(){
	
	var contacts = localStorage.getItem('contacts');
	contacts = JSON.parse(contacts);
	console.log(contacts);
	contacts.forEach(function(contact){
		createContact(contact);
	});
}

function createContact(contact){
	var temp = $('#template').clone();
		console.log(contact);
		var info = JSON.parse(contact);
		console.log(info);
		temp.find('.name').text(info.name);
		temp.find('.phone').text(info.phone);
		temp.find('.email').text(info.email);
		temp.find('.address').text(info.address);
		temp.attr('id','');
		$('tbody').append(temp);
}