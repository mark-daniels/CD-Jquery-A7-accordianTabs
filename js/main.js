$(document).ready(function(){
	$('#wrapper').tabs();
	$('#accordion').accordion({ collapsible: true });

	/*This is not meant to be practical as it is here*/

	/*Upon clicking the tab link, do the following*/
	$('#wrapper ul li a').click(function(){

		/*store current div id, retrieved using the
			.attr function and href attribute of
			the anchor element*/
		var tabId = $(this).attr('href');

		/*hide only sibling divs*/
		$(tabId).siblings('div').hide(0);

		/*remove "ui-state-active" styles from all h3 elements*/
		$(tabId).siblings('h3').removeClass('ui-state-active');

		/*add back "ui-state-active" styles to current
			section's h3 sibling (its title)*/
		$($(tabId).prev()).addClass('ui-state-active');
	});
});
