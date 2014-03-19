$(document).ready(function () {
	$('#searchBtn').click(function () {
		swapMiddleView('search');
	});

	$('#browseBtn').click(function () {
		swapMiddleView('browse');
	});

	$('#searchBtn').click();
});

function swapMiddleView(type) {
	if(type === 'search') {
		$('#search').show();
		$('#browse').hide();
	}
	else if(type === 'browse') {
		$('#browse').show();
		$('#search').hide();
	}
}