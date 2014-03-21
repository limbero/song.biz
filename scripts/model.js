//JavaScript Document

/***************************************
Songs
***************************************/

// This is the song constructor
// If you want to create a new song call
// var song = new Song(1, "song title", "det här är en fin sång", "valfri", "some dude", "snapsvisa")
// The type is allowed to be null
function Song(id, title, lyrics, melody, composer, type){

	var _id = id; // int
	var _title = title; // String
	var _lyrics = lyrics; // String
	var _melody = melody; // String
	var _composer = composer; // String
	var _type = type; // String or enum (?)

	this.setId = function(id){
		_id = id;
		model.notifyObservers();
	}

	this.getId = function(){
		return _id;
	}

	this.setTitle = function(title){
		_title = title;
		model.notifyObservers();
	}

	this.getTitle = function(){
		return _title;
	}

	this.setLyrics = function(lyrics){
		_lyrics = lyrics;
		model.notifyObservers();
	}

	this.getLyrics = function(){
		return _lyrics;
	}

	this.setMelody = function(melody){
		_melody = melody;
		model.notifyObservers();
	}

	this.getMelody = function(){
		return _melody;
	}

	this.setComposer = function(composer){
		_composer = composer;
		model.notifyObservers();
	}

	this.getComposer = function(){
		return _composer;
	}

	this.setType = function(type){
		_type = type;
		model.notifyObservers();
	}

	this.getType = function(){
		return _type;
	}
}


/***************************************
Collections
***************************************/

// This is the Collection constructor
// If you want to create a new collection call
// var collection = new Collection(1, My Collection", "this is awesum", user.getId(), true)
function Collection(id, title, subtitle, creator, isPublic) {

	var _id = id; // int
	var _title = title; // String
	var _subtitle = subtitle; // String
	var _creator = creator; // int
	var _isPublic = isPublic; // Boolean

	var _songs = []; // array of songid's

	this.setId = function(id) {
		_id = id;
		model.notifyObservers();
	}

	this.getId = function() { return _id; }

	this.setTitle = function(title) {
		_title = title;
		model.notifyObservers();
	}

	this.getTitle = function() { return _title; }

	this.setSubtitle = function(subtitle) {
		_subtitle = subtitle;
		model.notifyObservers();
	}

	this.getSubtitle = function() { return _subtitle; }

	this.addSong = function(songid) {
		_songs.push(songid);
		console.log("Song " + songid + " added to collection " + this.getId());
		model.notifyObservers();
	}

	this.removeSong = function(songid) {
		var index = _songs.indexOf(songid);
		if(index > -1) {
			_songs.splice(index,1);
			console.log("Song " + songid + " removed from collection " + this.getId());
			model.notifyObservers();
		}
	}

	this.clearSongs = function() {
		_songs = [];
		model.notifyObservers();
	}

	this.getSongs = function() { return _songs;	}

	this.setCreator = function(creator) {
		_creator = creator;
		model.notifyObservers();
	}

	this.getCreator = function() { return _creator; }

	this.setIsPublic = function(isPublic) {
		_isPublic = isPublic;
		model.notifyObservers();
	}

	this.getIsPublic = function() { return _isPublic; }

	this.clear = function() {
		this.setName = "";
		this.clearSongs();
		this.setCreator = "";
		this.setIsPublic = false;
		model.notifyObservers();
	}
}

/***************************************
Users
***************************************/

// This is the User constructor
// If you want to create a new collection call
// var user = new User("Username", "Firstname", "Surname", "2014-03-14", "Password")
function User(id, username, firstname, surname, joined, password) {

	var _id = id; // id
	var _username = username; // String
	var _firstname = firstname; // String
	var _surname = surname; // String
	var _joined = joined; // Timestamp
	var _password = password; // String (so secure)

	var _collections = [];

	this.setId = function(id) {
		_id = id;
		model.notifyObservers();
	}

	this.getId = function() { return _id; }

	this.setUsername = function(username) {
		_username = username;
		model.notifyObservers();
	}

	this.getUsername = function() { return _username; }

	this.setFirstname = function(firstname) {
		_firstname = firstname;
		model.notifyObservers();
	}

	this.getFirstname = function() { return _firstname;	}

	this.setSurname = function(surname) {
		_surname = surname;
		model.notifyObservers();
	}

	this.getSurname = function() { return _surname;	}

	this.joined = function() { return _joined; }

	this.setPassword = function(password) {
		_password = password;
		model.notifyObservers;
	}

	this.getPassword = function() {	return _password; }

	// used to add a collectionid to this user
	this.addCollection = function(collectionid) {
		_collections.push(collectionid);
		console.log("Collection " + collectionid + " added to user " + this.getUsername());
		model.notifyObservers();
	}

	// used to remove a collectionid from this user
	this.removeCollection = function(collectionid) {
		var index = _collections.indexOf(collectionid);
		if(index > -1) {
			_collections.splice(index,1);
			console.log("Collection " + collectionid + " removed from user " + this.getUsername());
			model.notifyObservers();
		}
	}

	this.getCollections = function() { return _collections; }
}

/***************************************
Model
***************************************/

// this is the main model that holds information about all songs,
// and collections as well as the collection that the user is currently
// working on.

function Model () {
	this.songs = [];
	this.collections = [];
	this.users = [];

	this.addSong = function (id, title, lyrics, melody, composer, type){
		var _melody;
		var _composer;
		if(!id || !title || !lyrics) {
			return;
		}
		// default values
		_melody = (melody ? melody : "Okänd");
		_composer = (composer ? composer : "Okänd");

		var song = new Song(id, title, lyrics, _melody, _composer, type);
		this.songs.push(song);
		this.notifyObservers();

		// SAVE THIS TO DATABASE!
	}

	this.addCollection = function (id, title, subtitle, creator, isPublic) {
		var _subtitle;
		var _creator;
		var _isPublic;
		if(!id || !title) {
			return;
		}
		// default values
		_subtitle = (subtitle ? subtitle : "");
		_creator = (creator ? creator : 0);
		_isPublic = (isPublic ? isPublic : true);

		var collection = new Collection(id, title, _subtitle, _creator, _isPublic);
		this.collections.push(collection);
		this.notifyObservers();

		// SAVE THIS TO DATABASE!
	}

	this.addSongToCollection = function (collectionid, songid) {
		var i = 0;
		while (this.collections[i] != null) {
			if (this.collections[i].getId() === collectionid) {
				this.collections[i].addSong(songid);
				break; // song added, we can take a break, chill and stuff.
			} 
			i++;
		}

		// SAVE THIS TO DATABASE!
	}

	this.removeSongFromCollection = function (collectionid, songid) {
		var i = 0;
		while (this.collections[i] != null) {
			if (this.collections[i].getId() === collectionid) {
				this.collections[i].removeSong(songid);
				break; // song removed, we can take a break, chill and stuff.
			} 
			i++;
		}

		// SAVE THIS TO DATABASE!
	}

	this.addCollectionToUser = function (userid, collectionid) {
		var i = 0;
		while (this.users[i] != null) {
			if (this.users[i].getId() === userid) {
				this.users[i].addCollection(collectionid);
				break; // collection added, we can take a break, chill and stuff.
			} 
			i++;
		}

		// SAVE THIS TO DATABASE!
	}

	this.removeCollectionFromUser = function (userid, collectionid) {
		var i = 0;
		while (this.users[i] != null) {
			if (this.users[i].getId() === userid) {
				this.users[i].removeCollection(collectionid);
				break; // collection added, we can take a break, chill and stuff.
			} 
			i++;
		}

		// SAVE THIS TO DATABASE!
	}

	this.addUser = function (id, username, firstname, surname, password) {
		if(!id || !username || !firstname || !surname || !password) { // all fields are required for users.
			return;
		}
		var now = new Date();
		var user = new User(id, username, firstname, surname, now, password);
		this.users.push(user);
		this.notifyObservers;

		// SAVE THIS TO DATABASE!
	}

	this.clearModel = function () {
		this.songs = [];
		this.users = [];
		this.collections = [];

		this.notifyObservers();

		// SAVE THIS TO DATABASE!
	}

	//*** OBSERVABLE PATTERN ***
	var listeners = [];
	
	this.notifyObservers = function (args) {
		    for (var i = 0; i < listeners.length; i++){
			        listeners[i].update(args);
		    }
	};
	
	this.addObserver = function (listener) {
		    listeners.push(listener);
	};
	//*** END OBSERVABLE PATTERN ***
}

// this is the instance of the main model
var model = new Model();
createTestData();

// This method can be used to create some test data and test your implementation
// This should not be used in the final version.
function createTestData() {

	console.log("Creating mockup data via JSON files!");

	// import JSON and add songs to model
	$.getJSON( "./db/songs.json", function( songs ) {
		//console.log(songs);
		var i = 0;
		while(songs.songs[i] != null) {
			var song = songs.songs[i];
			model.addSong(song.songid, song.title, song.lyrics, song.melody, song.composer, song.type);
			i++;
			//console.log(song.songid + ": " + song.title + " added!");
		}
	});

	$.getJSON( "./db/users.json", function( users ) {
		//console.log(users);
		var i = 0;
		while(users.users[i] != null) {
			var user = users.users[i];
			model.addUser(user.userid, user.username, user.firstname, user.surname, user.password);
			i++;
			//console.log(user.userid + ": " + user.username + " added!");
		}
	});

	$.getJSON( "./db/collections.json", function( collections ) {
		//console.log(collections);
		var i = 0;
		while(collections.collections[i] != null) {
			var collection = collections.collections[i];
			model.addCollection(collection.collectionid, collection.title, collection.subtitle, collection.creator, collection.ispublic);
			i++;
			//console.log(collection.collectionid + ": " + collection.title + " added!");
		}
	});

	$.getJSON( "./db/cslinks.json", function( cslinks ) {
		//console.log(cslinks);
		var i = 0;
		while(cslinks.cslinks[i] != null) {
			var cslink = cslinks.cslinks[i];
			model.addSongToCollection(cslink.collectionid, cslink.songid);
			i++;
		}
	});

	$.getJSON( "./db/uclinks.json", function( uclinks ) {
		//console.log(uclinks);
		var i = 0;
		while(uclinks.uclinks[i] != null) {
			var uclink = uclinks.uclinks[i];
			model.addCollectionToUser(uclink.userid, uclink.collectionid);
			i++;
		}
	});
}