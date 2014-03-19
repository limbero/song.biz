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
		$('#midpane').html('<div class="row"><div id="searchFieldArea"><input id="searchField" type="text"></div></div><div class="row"><div id="searchresults"></div></div>');
		$('#searchField').keyup(function () {
			console.log('le search');
			//REMEMBER TOLOWERCASE AMAZING SEARCH ALGORITHM
		});
	}
	else if(type === 'browse') {
		$('#midpane').html('browse lol');
	}
}