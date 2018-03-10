$(window).load(function () {
	var slide = $(".slide.first");
	var current = 1;
	$(".slide.first").css("visibility", "visible");
	$(".slide.second").css("visibility", "visible");
	$(".slide.third").css("visibility", "visible");
	slide.animate({ "opacity": "1" }, 500, function () {
	});
	$(".point.first").click(ClickFirst);
	$(".point.second").click(ClickSecond);
	$(".point.third").click(ClickThird);
	function ClickFirst() {
		if (current != 1) {
			$(".slide.first").css("opacity", "1");
			current = 1;
			slide.animate({ "opacity": "0" }, 500, function () {
				slide = $(".slide.first");
			});
			$(".point.indicator").css("left", "455px");
		}
	}
	function ClickSecond() {
		if (current != 2) {
			if (current < 2) {
				current = 2;
				$(".slide.second").animate({ "opacity": "1" }, 500, function () {
					slide.css("opacity", "0");
					slide = $(".slide.second");
				});
			} else {
				$(".slide.second").css("opacity", "1");
				current = 2;
				slide.animate({ "opacity": "0" }, 500, function () {
					slide = $(".slide.second");
				});
			}
			$(".point.indicator").css("left", "475px");
		}
	}
	function ClickThird() {
		if (current != 3) {
			current = 3;
			$(".slide.third").animate({ "opacity": "1" }, 500, function () {
				slide.css("opacity", "0");
				slide = $(".slide.third");
			});
			$(".point.indicator").css("left", "495px");
		}
	}
	var slideTimer = setInterval(function () {
		var next = current + 1;
		if (next > 3) {
			next = 1;
		}
		if (next == 1) {
			ClickFirst();
		} else if (next == 2) {
			ClickSecond();
		} else if (next == 3) {
			ClickThird();
		}
	}, 5000);
});
