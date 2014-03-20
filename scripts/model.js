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
function Collection(id, name, description, creator, isPublic) {

	/*
	TODO: HAS TO BE REDONE TO BE ABLE TO ADD SONGS TO AN EXISTING COLLECTION
	WE SHOULD PROBABLY PASS COLLECTION ID WITH COLLECTION FUNCTIONS ?
	*/

	var _id = id; // int
	var _name = name; // String
	var _description = description; // String
	var _creator = creator; // int
	var _isPublic = isPublic; // Boolean

	this.setId = function(id) {
		_id = id;
		model.notifyObservers();
	}

	this.getId = function() {
		return _id;
	}

	this.setName = function(name) {
		_name = name;
		model.notifyObservers();
	}

	this.getName = function() {
		return _name;
	}

	this.setDescription = function(description) {
		_description = description;
		model.notifyObservers();
	}

	this.getDescription = function() {
		return _description;
	}

	this.addSong = function(song) {
		_songs.push(song);
		model.notifyObservers();
	}

	this.removeSong = function(song) {
		var index = _songs.indexOf(song);
		if(index > -1) {
			_songs.splice(index,1);
			model.notifyObservers();
		}
	}

	this.clearSongs = function() {
		_songs = [];
		model.notifyObservers();
	}

	this.getSongs = function() {
		return _songs;
	}

	this.setCreator = function(creator) {
		_creator = creator;
		model.notifyObservers();
	}

	this.getCreator = function() {
		return _creator;
	}

	this.setIsPublic = function(isPublic) {
		_isPublic = isPublic;
		model.notifyObservers();
	}

	this.getIsPublic = function() {
		return _isPublic;
	}

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

	this.setId = function(id){
		_id = id;
		model.notifyObservers();
	}

	this.getId = function(){
		return _id;
	}

	this.setUsername = function(username){
		_username = username;
		model.notifyObservers();
	}

	this.getUsername = function(){
		return _username;
	}

	this.setFirstname = function(firstname){
		_firstname = firstname;
		model.notifyObservers();
	}

	this.getFirstname = function(){
		return _firstname;
	}

	this.setSurname = function(surname){
		_surname = surname;
		model.notifyObservers();
	}

	this.getSurname = function(){
		return _surname;
	}

	this.joined = function(){
		return _joined;
	}

	this.setPassword = function(password){
		_password = password;
		model.notifyObservers;
	}

	this.getPassword = function(){
		return _password;
	}
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
		if(melody) {
			_melody = melody;
		} else {
			_melody = "Okänd";
		}
		if(composer) {
			_composer = composer;
		} else {
			_composer = "Okänd";
		}
		var song = new Song(id, title, lyrics, _melody, _composer, type);
		this.songs.push(song);
		this.notifyObservers();
	}

	this.addCollection = function (id, name, description, creator, isPublic) {
		var _description;
		var _creator;
		var _isPublic;
		if(!id || !name) {
			return;
		}
		_description = (description ? description : "");
		_creator = (creator ? creator : 0);
		_isPublic = (isPublic ? isPublic : true);

		this.collections.push(collection);
		this.notifyObservers();
	}

	this.addSongToCollection = function (collectionid, songid) {

	}

	this.removeSongFromCollection = function (collectionid, songid) {
		
	}

	this.addUser = function (id, username, firstname, surname, password) {
		if(!id || !username || !firstname || !surname || !password) { // all fields are required for users.
			return;
		}
		var now = new Date();
		var user = new User(id, username, firstname, surname, now, password);
		this.users.push(user);
		this.notifyObservers;
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
function createTestData(){

	// import JSON and add songs to model
	$.getJSON( "./db/songs.json", function( songs ) {
		console.log(songs);
		var i = 0;
		while(songs.songs[i] != null) {
			var song = songs.songs[i];
			model.addSong(song.songid, song.title, song.lyrics, song.melody, song.composer, song.type);
			i++;
			console.log(song.songid + ": " + song.title + " added!");
		}
	});

	$.getJSON( "./db/users.json", function( users ) {
		console.log(users);
		var i = 0;
		while(users.users[i] != null) {
			var user = users.users[i];
			model.addUser(user.userid, user.username, user.firstname, user.surname, user.password);
			i++;
			console.log(user.userid + ": " + user.title + " added!");
		}
	});
	
	/*console.log("Song 2 is: " + model.songs[1].getTitle());
	console.log("The lyrics of Song 1 is: " + model.songs[0].getLyrics());
	console.log("Length of Collection 1 is: " + model.collections[0].getSongs().length);
	console.log("This should be 0 and is: " + model.workingCollection.getSongs.length);*/

	//var songs = model.collections[0].getSongs();

	/*console.log("");
	console.log("Info om alla sånger som finns i den collectionen som skapats: ");
	console.log("");*/

	for (var i = songs.length - 1; i >= 0; i--) {
		var song = songs[i];
		/*console.log("Song Title: " + song.getTitle());
		console.log("Song Lyrics: " + song.getLyrics());
		console.log("Song Melody: " + song.getMelody());
		console.log("Song Composer: " + song.getComposer());
		console.log("Song Type: " + song.getType());
		console.log("");*/
	};
}
