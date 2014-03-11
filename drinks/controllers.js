$(document).ready(function () {
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