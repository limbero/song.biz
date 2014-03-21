$(document).ready(function () {

	searchfilter="";
	activecollection = -1;

	setTimeout(trylogin, 200);
	setTimeout(getSearchResults, 200);
	setTimeout(populateUserCollections, 400);
	setTimeout(updateActiveCollection, 500);
});

function update() {
	trylogin();
	getSearchResults();
	populateUserCollections();
	updateActiveCollection();
}

function trylogin() {
	var users = model.users;
	var roof = users.length;

	var flag = false;

	for(var i=0; i<roof; i++) {
		if(users[i].getUsername() === current_user) {
			$('#user').html(users[i].getFirstname()+" "+users[i].getSurname());
			userid = users[i].getId();
			flag = true;
			break;
		}
	}

	if(!flag) {
		$('#user').html("");
		$('#user_thing').html("LOGIN");
		$('#user_thing').attr("href", "?login=1");
	}
}

function populateUserCollections() {
	$('#usercollections').html('');

	var roof = model.collections.length;
	var flag;
	if(activecollection === -1) { flag = true; }
	for(var i=0; i<roof; i++) {
		if(model.collections[i].getCreator() === userid) {
			var mystring = '<div data-collectionid="'+model.collections[i].getId()+'" class="usercollection';
			if(flag) {
				mystring += ' selected';
				activecollection = model.collections[i].getId();
				flag = false;
			}
			else if (activecollection === model.collections[i].getId()) {
				mystring += ' selected';
			}
			mystring += '"><h1 class="lightred">'+model.collections[i].getTitle().toUpperCase()+'</h1><h2 class="darkred">'+model.collections[i].getSubtitle()+'</h2></div>'
			$('#usercollections').append(mystring);
		}
	}


	$('.usercollection').click(function () {
		$('.usercollection').removeClass('selected');
		$(this).addClass('selected');
		activecollection = parseInt($(this).attr('data-collectionid'));
		update();
	});
}

function updateActiveCollection() {
	var roof = model.collections.length;
	var flag = true;
	for(var i=0; i<roof; i++) {
		if(model.collections[i].getId() === activecollection) {
			$('#current_collection').html(model.collections[i].getTitle());
		}
	}
}

function getSearchResults() {
	$('#searchresults').html('');

	var searchtype = $('input[name=type]:checked', '#searchtype').val();

	if(searchtype==='songs'){
		var roof = model.songs.length;
		for(var i=0; i<roof; i++) {
			if(model.songs[i].getComposer().toLowerCase().indexOf(searchfilter) != -1 || model.songs[i].getLyrics().toLowerCase().indexOf(searchfilter) != -1 || model.songs[i].getMelody().toLowerCase().indexOf(searchfilter) != -1 || model.songs[i].getTitle().toLowerCase().indexOf(searchfilter) != -1 || model.songs[i].getType().toLowerCase().indexOf(searchfilter) != -1) {
				$('#searchresults').append('<div data-songid="'+i+'" class="card song"><h1>'+model.songs[i].getTitle()+'</h1><div class="more"><h2>Kompositör: '+model.songs[i].getComposer()+'<br> Melodi: '+model.songs[i].getMelody()+'</h2><p>'+model.songs[i].getLyrics()+'</p></div></div>');
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
			if(model.collections[i].getTitle().toLowerCase().indexOf(searchfilter) != -1) {
				$('#searchresults').append('<div data-collectionid="'+model.collections[i].getId()+'" class="card collection ui-widget-content"><h1>'+model.collections[i].getTitle()+'</h1></div>');
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

//Function for putting stuff in the browse view

function fillBrowse() {
	$('#browseStudent').html('');
	var students = $('#browseStudent');
	var count = 0;
	var roof = model.songs.length;
	for(var i=0; i<roof; i++) {
		if(count < 3) {
			if(model.songs[i].getType().toLowerCase()==='student') {
				students.append('<div id="song'+i+'" class="card song"><h1>'+model.songs[i].getTitle()+'</h1><div class="more"><h2>Kompositör: '+model.songs[i].getComposer()+'<br> Melodi: '+model.songs[i].getMelody()+'</h2><p>'+model.songs[i].getLyrics()+'</p></div></div>');
				count++;
			}
		}
		
	}

	$('#browseParty').html('');
	var partys = $('#browseParty');
	count = 0;
	for(var i=0; i<roof; i++) {
		if(count < 3) {
			if(model.songs[i].getType().toLowerCase()==='party') {
				partys.append('<div id="song'+i+'" class="card song"><h1>'+model.songs[i].getTitle()+'</h1><div class="more"><h2>Kompositör: '+model.songs[i].getComposer()+'<br> Melodi: '+model.songs[i].getMelody()+'</h2><p>'+model.songs[i].getLyrics()+'</p></div></div>');
				count++;
			}
		}
		
	}

	$('#browseNa').html('');
	var nas = $('#browseNa');
	count = 0;
	for(var i=0; i<roof; i++) {
		if(count < 3) {
			if(model.songs[i].getType().toLowerCase()==='national anthem') {
				nas.append('<div id="song'+i+'" class="card song"><h1>'+model.songs[i].getTitle()+'</h1><div class="more"><h2>Kompositör: '+model.songs[i].getComposer()+'<br> Melodi: '+model.songs[i].getMelody()+'</h2><p>'+model.songs[i].getLyrics()+'</p></div></div>');
				count++;
			}
		}
		
	}

	$('.card.song').draggable({ revert: true, helper: "clone", start: function(e, ui) { $(ui.helper).addClass("ui-draggable-helper"); } });
	$('.card.song').draggable("option", "cursorAt", { left: 5 });

	$('.card').click(function () {
		$('.more', this).slideToggle(100);
	});

}

function addNewCollection() {
	var name = $('#collectionName');
	var description = $('#collectionDescription');

	// create a new collection object
	model.workingCollection.setName(name);
	console.log(name);
	model.workingCollection.setDescription(description);
	console.log(description);
	model.workingCollection.setCreator(user.getTitle());
	model.workingCollection.setIsPublic(true);
	//model.workingCollection = new Collection(name, description, [], user.getTitle(), true); 
	console.log(model.workingCollection);
	model.addCollection();
}




