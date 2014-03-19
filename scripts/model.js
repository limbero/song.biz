//JavaScript Document

/***************************************
Songs
***************************************/

//This is the song constructor
//If you want to create a new song call
// var song = new Song("song title", "det här är en fin sång", "valfri", "snapsvisa")
//The type is allowed to be null
function Song(title, lyrics, melody, composer, type){
	var _title = title; //String
	var _lyrics = lyrics; //String
	var _melody = melody; //String
	var _composer = composer; //String
	var _type = type; //String or enum (?)


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

//This is the Collection constructor
//If you want to create a new collection call
// var collection = new Collection("My Collection", [], user.getName(), true)
function Collection(name, songs, creator, isPublic) {

	var _name = name; //String
	var _songs = songs; //Array of Song
	var _creator = creator; // String
	var _isPublic = isPublic; // Boolean

	this.setName = function(name){
		_name = name;
		model.notifyObservers();
	}

	this.getName = function(){
		return _name;
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

	this.getSongs = function(){
		return _songs;
	}

	this.setCreator = function(creator){
		_creator = creator;
		model.notifyObservers();
	}

	this.getCreator = function(){
		return _creator;
	}

	this.setIsPublic = function(isPublic){
		_isPublic = isPublic;
		model.notifyObservers();
	}

	this.getIsPublic = function(){
		return _isPublic;
	}

	this.clear = function(){
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

//This is the User constructor
//If you want to create a new collection call
// var user = new User("Username", "Firstname", "Surname", "2014-03-14", "Password")
function User(username, firstname, surname, joined, password) {

	var _username = username; //String
	var _firstname = firstname; //String
	var _surname = surname; //String
	var _joined = joined; //timestamp
	var _password = password; // String (so secure)

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

// this is the main model that holds information about alla songs,
// and collections as well as the collection that the user is currently
// working on.

function Model() {
	this.songs = [];
	this.collections = [];
	this.users = [];
	this.workingCollection = new Collection("", [], "", false);

	this.addSong = function (title, lyrics, melody, composer, type){
		var _melody;
		var _composer;
		if(!title){
			return;
		}
		if(!lyrics){
			return;
		}
		if(melody){
			_melody = melody;
		}else{
			_melody = "okänd";
		}
		if(composer){
			_composer = composer;
		} else {
			_composer = "okänd";
		}
		var song = new Song(title,lyrics,_melody,_composer,type);
		this.songs.push(song);
		this.notifyObservers();
	}

	this.addCollection = function () {
		if(!this.workingCollection.getName()) {
			return;
		}
		if(!this.workingCollection.getSongs()) {
			return;
		}
		this.collections.push(this.workingCollection);
		this.workingCollection.clear;
		this.notifyObservers();
	}

	this.addUser = function (username, firstname, surname, password) {
		if(!username || !firstname || !surname || !password) { // all fields are required for users.
			return;
		}
		var now = new Date();
		var newuser = new User(username, firstname, surname, now, password);
		this.users.push(newuser);
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
	model.workingCollection.setName("epic collection");

	$.getJSON( "./db/songs.json", function( songs ) {
		console.log(songs);
		var i = 0;

		while(songs.songs[i] != null) {
			var song = songs.songs[i];
			model.addSong(song.title, song.lyrics, song.melody, song.composer, song.type);
			i++;
		}
	});

	$.getJSON( "./db/users.json", function( users ) {
		console.log(users);
		var i = 0;

		while(users.users[i] != null) {
			var user = users.users[i];
			model.addSong(user.username, user.firstname, user.surname, user.password);
			i++;
		}
	});

	// salladsbar

	model.addSong("Du gamla, du fria", "Du gamla, Du fria, Du fjällhöga nord<br>Du tysta, Du glädjerika sköna!<br>Jag hälsar Dig, vänaste land uppå jord,<br>Din sol, Din himmel, Dina ängder gröna,<br>Din sol, Din himmel, Dina ängder gröna.<br><br>Du tronar på minnen från fornstora dar,<br>då ärat Ditt namn flög över jorden.<br>Jag vet att Du är och Du blir vad du var.<br>Ja, jag vill leva jag vill dö i Norden,<br>Ja, jag vill leva jag vill dö i Norden.", "Nationalsången", "Kungen?", "NationalAnthems");
	model.addSong("Min Titel", "Du gamla du fria du smällfeta ko", "nationalsången", "Mattias", "SexySongs");
	model.addSong("Tvåan", "My wiener takes it all", "The winner takes it all", "Henrik på S", "SexySongs");
	model.workingCollection.addSong(model.songs[1]);
	model.workingCollection.addSong(model.songs[0]);
	model.addCollection();
	
	/*console.log("Song 2 is: " + model.songs[1].getTitle());
	console.log("The lyrics of Song 1 is: " + model.songs[0].getLyrics());
	console.log("Length of Collection 1 is: " + model.collections[0].getSongs().length);
	console.log("This should be 0 and is: " + model.workingCollection.getSongs.length);*/

	var songs = model.collections[0].getSongs();

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


	// $.each(ActivityType,function(index,type){
	// 	console.log("Day '" + ActivityType[index] + "' Length: " +  model.days[0].getLengthByType(index) + " min");
	// });
}
