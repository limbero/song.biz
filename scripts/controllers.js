$(document).ready(function () {
	$('#searchBtn').click(function () {
		swapMiddleView('search');
	});

	$('#browseBtn').click(function () {
		swapMiddleView('browse');
		fillBrowse();
	});

	$('#searchBtn').click();

	$('#searchField').keyup(function () {
		searchfilter = $('#searchField').val().toLowerCase();
		getSearchResults();
	});
	$('#searchtype').change(function () {
		getSearchResults();
	});

	$('#addBtn').click(function () {
		addCollection();
	});
});

function swapMiddleView(type) {
	if(type === 'search') {
		$('.search').show();
		$('.browse').hide();

		$('#a2').css('background', '#FFB3AE');
		$('#b2').css('background', '#FFB3AE');
		$('#c2').css('background', '#FFB3AE');
	}
	else if(type === 'browse') {
		$('.browse').show();
		$('.search').hide();

		$('#a2').css('background', '#68B287');
		$('#b2').css('background', '#68B287');
		$('#c2').css('background', '#68B287');
	}
}