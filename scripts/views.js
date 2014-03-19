$(document).ready(function () {
	searchfilter="";
	setTimeout(getSearchResults, 200);
});

function getSearchResults() {
	$('#searchresults').html('');

	var searchtype = $('input[name=type]:checked', '#searchtype').val();

	if(searchtype==='songs'){
		var roof = model.songs.length;
		for(var i=0; i<roof; i++) {
			if(model.songs[i].getComposer().toLowerCase().indexOf(searchfilter) != -1 || model.songs[i].getLyrics().toLowerCase().indexOf(searchfilter) != -1 || model.songs[i].getMelody().toLowerCase().indexOf(searchfilter) != -1 || model.songs[i].getTitle().toLowerCase().indexOf(searchfilter) != -1 || model.songs[i].getType().toLowerCase().indexOf(searchfilter) != -1) {
				$('#searchresults').append('<div id="song'+i+'" class="card song"><h1>'+model.songs[i].getTitle()+'</h1><div class="more"><h2>Kompositör: '+model.songs[i].getComposer()+'<br> Melodi: '+model.songs[i].getMelody()+'</h2><p>'+model.songs[i].getLyrics()+'</p></div></div>');
			}
		}
	}
	else if(searchtype==='users'){
		var roof = model.users.length;
		for(var i=0; i<roof; i++) {
			if(model.users[i].getFirstname().toLowerCase().indexOf(searchfilter) != -1 || model.users[i].getSurname().toLowerCase().indexOf(searchfilter) != -1 || model.users[i].getUsername().toLowerCase().indexOf(searchfilter) != -1) {
				$('#searchresults').append('<div class="card user ui-widget-content"><h1>'+model.users[i].getFirstname()+' '+model.users[i].getSurname()+' <span>('+model.users[i].getUsername()+')</span></h1></div>');
			}
		}
	}
	else if(searchtype==='collections'){
		var roof = model.collections.length;
		for(var i=0; i<roof; i++) {
			if(model.collections[i].getName().toLowerCase().indexOf(searchfilter) != -1) {
				$('#searchresults').append('<div class="card collection ui-widget-content"><h1>'+model.collections[i].getName()+'</h1></div>');
			}
		}
	}
	$('.card.song').draggable({ revert: true, helper: "clone", start: function(e, ui) { $(ui.helper).addClass("ui-draggable-helper"); } });
	$('.card.song').draggable("option", "cursorAt", { left: 5 });

	$('.card.collection').draggable({ revert: true, helper: "clone", start: function(e, ui) { $(ui.helper).addClass("ui-draggable-helper"); } });
	$('.card.collection').draggable("option", "cursorAt", { left: 5 });

	$('.card').click(function () {
		$('.more', this).slideToggle(100);
	});
}