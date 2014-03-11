$(document).ready(function () {
	globdata = '';
	$('#longdrinks').toggle();
	$('#shortdrinks').toggle();
	$('#cocktails').toggle();
	$('#shots').toggle();
	$('#classics').toggle();
	$('#news').toggle();
	$('#nonalcoholic').toggle();

	$.getJSON( "./resources/songs.json", function( data ) {
		console.log(data);
		globdata = data;
		var i = 0;
		while(data.categories[i] != null) {
			var cur = data.categories[i];
			console.log(cur.name);

			if(cur.name === "longdrinks") {
				var j = 0;
				while(cur.drinks[j] != null) {
					$('#longdrinks').append("<li>"+cur.drinks[j].name+"<span class=\"price\">"+cur.drinks[j].price+"</span></li>");
					j++;
				}
			}
			/*else if(cur.name === "shortdrinks") {
				var j = 0;
				while(cur.drinks[j] != null) {
					$('#shortdrinks').append("<li>"+cur.drinks[j].name+"</li>");
					j++;
				}
			}*/
			else if(cur.name === "cocktails") {
				var j = 0;
				while(cur.drinks[j] != null) {
					$('#cocktails').append("<li>"+cur.drinks[j].name+"<span class=\"price\">"+cur.drinks[j].price+"</span></li>");
					j++;
				}
			}
			else if(cur.name === "shots") {
				var j = 0;
				while(cur.drinks[j] != null) {
					$('#shots').append("<li>"+cur.drinks[j].name+"<span class=\"price\">"+cur.drinks[j].price+"</span></li>");
					j++;
				}
			}
			else if(cur.name === "classics") {
				var j = 0;
				while(cur.drinks[j] != null) {
					$('#classics').append("<li>"+cur.drinks[j].name+"<span class=\"price\">"+cur.drinks[j].price+"</span></li>");
					j++;
				}
			}
			else if(cur.name === "news") {
				var j = 0;
				while(cur.drinks[j] != null) {
					$('#news').append("<li>"+cur.drinks[j].name+"<span class=\"price\">"+cur.drinks[j].price+"</span></li>");
					j++;
				}
			}
			else if(cur.name === "nonalcoholic") {
				var j = 0;
				while(cur.drinks[j] != null) {
					$('#nonalcoholic').append("<li>"+cur.drinks[j].name+"<span class=\"price\">"+cur.drinks[j].price+"</span></li>");
					j++;
				}
			}
			i++;
		}
	});
});