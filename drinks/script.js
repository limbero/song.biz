$(document).ready(function () {
	globdata = '';
	$('#longdrinks').toggle();
	$('#shortdrinks').toggle();
	$('#cocktails').toggle();
	$('#shots').toggle();
	$('#classics').toggle();
	$('#news').toggle();
	$('#nonalcoholic').toggle();

	$.getJSON( "drinks.json", function( data ) {
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

    //.clone().children().remove().end().text()

	$('#longdrinkh2').click(function () {
		$('#longdrinks').toggle();
		if($('#longdrinkh2 .arrow').html() === "▼") {
			$('#longdrinkh2 .arrow').html("►");
		}
		else {
			$('#longdrinkh2 .arrow').html("▼");
		}
	});

	$('#cocktailh2').click(function () {
		$('#cocktails').toggle();
		if($('#cocktailh2 .arrow').html() === "▼") {
			$('#cocktailh2 .arrow').html("►");
		}
		else {
			$('#cocktailh2 .arrow').html("▼");
		}
	});

	$('#shoth2').click(function () {
		$('#shots').toggle();
		if($('#shoth2 .arrow').html() === "▼") {
			$('#shoth2 .arrow').html("►");
		}
		else {
			$('#shoth2 .arrow').html("▼");
		}
	});

	$('#classich2').click(function () {
		$('#classics').toggle();
		if($('#classich2 .arrow').html() === "▼") {
			$('#classich2 .arrow').html("►");
		}
		else {
			$('#classich2 .arrow').html("▼");
		}
	});

	$('#newh2').click(function () {
		$('#news').toggle();
		if($('#newh2 .arrow').html() === "▼") {
			$('#newh2 .arrow').html("►");
		}
		else {
			$('#newh2 .arrow').html("▼");
		}
	});

	$('#nonalcoholich2').click(function () {
		$('#nonalcoholic').toggle();
		if($('#nonalcoholich2 .arrow').html() === "▼") {
			$('#nonalcoholich2 .arrow').html("►");
		}
		else {
			$('#nonalcoholich2 .arrow').html("▼");
		}
	});

	$('#longdrinks').on('click', 'li', function () {
		console.log($(this).html());
		$('li').removeClass('selected');
		$(this).addClass('selected');

		var i = 0;

		var cur = globdata.categories[0];

		while(cur.drinks[i].name != $(this).clone().children().remove().end().text() && cur.drinks[i] != null) {
			i++;
		}
		var curdrink = cur.drinks[i];
		console.log(curdrink);

		var rightpane = "<div id=\"floater\"><h1>"+curdrink.name+"</h1>";
		rightpane += "<h3>"+curdrink.subtitle+"</h3>";
		rightpane += "<table><tbody>";

		i = 0;
		while(curdrink.ingredients[i] != null) {
			rightpane += "<tr><td>"+curdrink.ingredients[i].amount+"</td><td>"+curdrink.ingredients[i].name+"</td></tr>";
			i++;
		}

		rightpane += "</tbody></table></div>";

		$('#rightpane').html(rightpane);
	});

	/*$('#shortdrinks').on('click', 'li', function () {
		console.log($(this).html());
		$('li').removeClass('selected');
		$(this).addClass('selected');

		var rightpane = "<div id=\"floater\"><h1>"+$(this).html()+"</h1>"+"<table><tbody>";

		var i = 0;

		var cur = globdata.categories[1];

		while(cur.drinks[i].name != $(this).html() && cur.drinks[i] != null) {
			i++;
		}
		var curdrink = cur.drinks[i];
		console.log(curdrink);

		i = 0;
		while(curdrink.ingredients[i] != null) {
			rightpane += "<tr><td>"+curdrink.ingredients[i].amount+"</td><td>"+curdrink.ingredients[i].name+"</td></tr>";
			i++;
		}

		rightpane += "</tbody></table></div>";

		$('#rightpane').html(rightpane);
	});*/

	$('#cocktails').on('click', 'li', function () {
		console.log($(this).html());
		$('li').removeClass('selected');
		$(this).addClass('selected');

		var i = 0;

		var cur = globdata.categories[2];

		while(cur.drinks[i].name != $(this).clone().children().remove().end().text() && cur.drinks[i] != null) {
			i++;
		}
		var curdrink = cur.drinks[i];
		console.log(curdrink);

		var rightpane = "<div id=\"floater\"><h1>"+curdrink.name+"</h1>";
		rightpane += "<h3>"+curdrink.subtitle+"</h3>";
		rightpane += "<table><tbody>";

		i = 0;
		while(curdrink.ingredients[i] != null) {
			rightpane += "<tr><td>"+curdrink.ingredients[i].amount+"</td><td>"+curdrink.ingredients[i].name+"</td></tr>";
			i++;
		}

		rightpane += "</tbody></table></div>";

		$('#rightpane').html(rightpane);
	});

	$('#shots').on('click', 'li', function () {
		console.log($(this).html());
		$('li').removeClass('selected');
		$(this).addClass('selected');

		var i = 0;

		var cur = globdata.categories[3];

		while(cur.drinks[i].name != $(this).clone().children().remove().end().html() && cur.drinks[i] != null) {
			i++;
		}
		var curdrink = cur.drinks[i];
		console.log(curdrink);

		var rightpane = "<div id=\"floater\"><h1>"+curdrink.name+"</h1>";
		rightpane += "<h3>"+curdrink.subtitle+"</h3>";
		rightpane += "<table><tbody>";

		i = 0;
		while(curdrink.ingredients[i] != null) {
			rightpane += "<tr><td>"+curdrink.ingredients[i].amount+"</td><td>"+curdrink.ingredients[i].name+"</td></tr>";
			i++;
		}

		rightpane += "</tbody></table></div>";

		$('#rightpane').html(rightpane);
	});

	$('#classics').on('click', 'li', function () {
		console.log($(this).html());
		$('li').removeClass('selected');
		$(this).addClass('selected');

		var i = 0;

		var cur = globdata.categories[4];

		while(cur.drinks[i].name != $(this).clone().children().remove().end().text() && cur.drinks[i] != null) {
			i++;
		}
		var curdrink = cur.drinks[i];
		console.log(curdrink);

		var rightpane = "<div id=\"floater\"><h1>"+curdrink.name+"</h1>";
		rightpane += "<h3>"+curdrink.subtitle+"</h3>";
		rightpane += "<table><tbody>";

		i = 0;
		while(curdrink.ingredients[i] != null) {
			rightpane += "<tr><td>"+curdrink.ingredients[i].amount+"</td><td>"+curdrink.ingredients[i].name+"</td></tr>";
			i++;
		}

		rightpane += "</tbody></table></div>";

		$('#rightpane').html(rightpane);
	});

	$('#news').on('click', 'li', function () {
		console.log($(this).html());
		$('li').removeClass('selected');
		$(this).addClass('selected');

		var i = 0;

		var cur = globdata.categories[5];

		while(cur.drinks[i].name != $(this).clone().children().remove().end().text() && cur.drinks[i] != null) {
			i++;
		}
		var curdrink = cur.drinks[i];
		console.log(curdrink);

		var rightpane = "<div id=\"floater\"><h1>"+curdrink.name+"</h1>";
		rightpane += "<h3>"+curdrink.subtitle+"</h3>";
		rightpane += "<table><tbody>";

		i = 0;
		while(curdrink.ingredients[i] != null) {
			rightpane += "<tr><td>"+curdrink.ingredients[i].amount+"</td><td>"+curdrink.ingredients[i].name+"</td></tr>";
			i++;
		}

		rightpane += "</tbody></table></div>";

		$('#rightpane').html(rightpane);
	});

	$('#nonalcoholic').on('click', 'li', function () {
		console.log($(this).html());
		$('li').removeClass('selected');
		$(this).addClass('selected');

		var i = 0;

		var cur = globdata.categories[6];

		while(cur.drinks[i].name != $(this).clone().children().remove().end().text() && cur.drinks[i] != null) {
			i++;
		}
		var curdrink = cur.drinks[i];
		console.log(curdrink);

		var rightpane = "<div id=\"floater\"><h1>"+curdrink.name+"</h1>";
		rightpane += "<h3>"+curdrink.subtitle+"</h3>";
		rightpane += "<table><tbody>";

		i = 0;
		while(curdrink.ingredients[i] != null) {
			rightpane += "<tr><td>"+curdrink.ingredients[i].amount+"</td><td>"+curdrink.ingredients[i].name+"</td></tr>";
			i++;
		}

		rightpane += "</tbody></table></div>";

		$('#rightpane').html(rightpane);
	});

	$(document).keydown(function(e){
		$('li:first-child').addClass('firstchild');
		$('li:last-child').addClass('lastchild');

		if (e.keyCode == 38) {
			e.preventDefault();

			$temp = $('li.selected');
			console.log($temp.prev());

			if(!$temp.hasClass('firstchild')) {
				$temp.prev().addClass('selected');
				$temp.removeClass('selected');
				$temp.prev().click();
			}

			console.log( "up pressed" );

			return false;
		}
		else if (e.keyCode == 40) {
			e.preventDefault();

			$temp = $('li.selected');

			if(!$temp.hasClass('lastchild')) {
				$temp.next().addClass('selected');
				$temp.removeClass('selected');
				$temp.next().click();
			}

			console.log( "down pressed" );

			return false;
		}
	});

});