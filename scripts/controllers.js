$(document).ready(function () {
	$('#searchBtn').click(function () {
		swapMiddleView('search');
	});

	$('#browseBtn').click(function () {
		swapMiddleView('browse');
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
		var title = $('#collectionName');
		var subtitle = $('#collectionDescription');
		var collectionId = model.getHighestCollectionId() + 1;

		model.addCollection(collectionId, title, subtitle, current_user, true);
		model.addCollectionToUser(current_user, collectionId);
	});
});

function swapMiddleView(type) {
	if(type === 'search') {
		$('.search').show();
		$('.browse').hide();

		$('#searchBtn').removeClass('inactive');
		$('#browseBtn').addClass('inactive');

		$('#a2').css('background', '#FFB3AE');
		$('#b2').css('background', '#FFB3AE');
		$('#c2').css('background', '#FFB3AE');
	}
	else if(type === 'browse') {
		$('.browse').show();
		$('.search').hide();

		$('#searchBtn').addClass('inactive');
		$('#browseBtn').removeClass('inactive');

		$('#a2').css('background', '#68B287');
		$('#b2').css('background', '#68B287');
		$('#c2').css('background', '#68B287');
	}
}