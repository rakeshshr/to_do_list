$(function() {

	var $todoUL = $('#todo_list');

	var $newtodoForm = $('#new_to_do_list');

	var $itemNameBlank = $('#toDo_name');

	$newtodoForm.on('submit', function(event) {
		event.preventDefault();
		var listItem = $('#toDo_name').val();
		console.log(listItem);

		todoList.push(listItem);

		$itemNameBlank.val("");

		$todoUL.append('<li class ="item">' + listItem + '</li>');
	});

	$todoUL.on('click', '.item', function() {
		//$(this).addclass('purchased');
		$(this).animate({opacity: '0.100'}, 1000);
		$(this).wrap("<strike>");

	});





});

var todoList = ["code", "code", "more code"];





























