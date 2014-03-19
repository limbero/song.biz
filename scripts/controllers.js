$(document).ready(function () {
	$('#searchBtn').click(function () {
		createMiddleView('search');
	});

	$('#browseBtn').click(function () {
		createMiddleView('browse');
	});
});

function createMiddleView(type) {
	if(type === 'search') {
		$('#midpane').html('<div class="row"><div id="searchfield"><input type="text"></div></div><div class="row"><div id="searchresults"></div></div>');
	}
	else if(type === 'browse') {
		$('#midpane').html('browse lol');
	}
}