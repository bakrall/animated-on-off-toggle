$('input').click(() => {
	$('body').toggleClass('on');
	$('.on').length ? $('.visually-hidden').text('on') : $('.visually-hidden').text('off');
});

/*event.which and event.keyCode are depracated
event.key should be used instead
https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent
*/

// make toggle switch on/off when pressing Enter or Space
$('.container').keydown((event) => {
	if (event.key === "Enter" || event.key === " ") {
		$('input').trigger('click');
	}
});