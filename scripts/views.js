$(document).ready(function () {
	searchfilter="";
	console.log(model.songs);
	setTimeout(getSearchResults, 200);
});

function getSearchResults() {
	$('#searchresults').html('');

	var searchtype = $('input[name=type]:checked', '#searchtype').val();
	console.log(model.users);

	if(searchtype==='songs'){
		var roof = model.songs.length;
		for(var i=0; i<roof; i++) {
			if(model.songs[i].getComposer().toLowerCase().indexOf(searchfilter) != -1 || model.songs[i].getLyrics().toLowerCase().indexOf(searchfilter) != -1 || model.songs[i].getMelody().toLowerCase().indexOf(searchfilter) != -1 || model.songs[i].getTitle().toLowerCase().indexOf(searchfilter) != -1 || model.songs[i].getType().toLowerCase().indexOf(searchfilter) != -1) {
				$('#searchresults').append('<div class="card"><h1>'+model.songs[i].getTitle()+'</h1><div class="more"><h2>Kompositör: '+model.songs[i].getComposer()+'<br> Melodi: '+model.songs[i].getMelody()+'</h2><p>'+model.songs[i].getLyrics()+'</p></div></div>');
			}
		}
		$('.card').click(function () {
			$('.more', this).slideToggle(200);
		});
	}
	else if(searchtype==='users'){
		$('#searchresults').append('User search isn\'t implemented yet :(');
	}
	else if(searchtype==='collections'){
		$('#searchresults').append('Collection search isn\'t implemented yet :(');
	}
}