
$.webshims.setOptions({
	waitReady: false
})

$(document).ready(function () {

	// ie is lame
	if (!console) {
		console = {
			log: function () {}
		}
	}

	$range = $("input[type='range'].test");
	$inputs = $("#input-event-count");
	$changes = $("#change-event-count");

	// change event
	$range.on("change", function () {;
		var count = parseInt($changes.val()) + 1;
		$changes.val(count);
		console.log("change event count: " + count);
	})

	// input event
	$range.on("input", function () {
		var count = parseInt($inputs.val()) + 1;
		$inputs.val(count);
		console.log("input event count: " + count);
	})

	var webshim = $.query.get()["webshim"] || null

	if (/replaceUI/i.test(webshim)) {
		console.log("Will use Webshim w/replaceUI");
		$.webshims.setOptions("forms-ext", {
			replaceUI: true
		})
	}

	if (webshim) {
		$.webshims.setOptions("forms", {
			fixRangeChange: true
		})
		console.log("Using Webshim...");
		$.webshims.polyfill("forms forms-ext");
	}
})