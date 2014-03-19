$(document).ready(function () {
	searchfilter="";
	console.log(model.songs);
	getSearchResults();
});

function getSearchResults() {
	$('#searchresults').html('');

	var roof = model.songs.length;
	for(var i=0; i<roof; i++) {
		if(model.songs[i].getTitle().toLowerCase().indexOf(searchfilter) != -1) {
			$('#searchresults').append('<div class="card"><h1>'+model.songs[i].getTitle()+'</h1></div>');
		}
	}
}