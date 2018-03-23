
/* SCROLL TO SECTION */
$('.scroll-to-home').click(function () {
	$('html, body').animate({ scrollTop: $('#home').offset().top }, 'slow');
	return false;
});
$('.scroll-to-experience').click(function () {
	$('html, body').animate({ scrollTop: $('#experience').offset().top }, 'slow');
	return false;
});
$('.scroll-to-portfolio').click(function () {
	$('html, body').animate({ scrollTop: $('#portfolio').offset().top }, 'slow');
	return false;
});
$('.scroll-to-contact').click(function () {
	$('html, body').animate({ scrollTop: $('#contact').offset().top }, 'slow');
	return false;
});


/* HELPER FUNCTIONS */
function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


/* GITHUB */
function getGithubData() {
	$.ajax({
		type: 'GET',
		url: 'https://api.github.com/users/belax8',
		dataType: 'JSON',
		success: function (data) { renderGithubData(data); },
		error: function (error) { console.log('Error getting Github data!'); }
	});
}
function renderGithubData(data) {
	var githubDiv = $('#githubData');
	var html = '';
	html += '<p>Company: ' + data.company + '</p>';
	html += '<p>Public Repos: ' + numberWithCommas(data.public_repos) + '</p>';
	html += '<p>Followers: ' + numberWithCommas(data.followers) + '</p>';
	html += '<p>See my Github Portfolio <a href="https://www.github.com/belax8">here</a>.</p>';
	githubDiv.html(html);
}
// getGithubData();


/* CODEWARS */
function getCodeWarsData() {
	$.ajax({
		type: 'GET',
		url: 'https://cors-anywhere.herokuapp.com/https://www.codewars.com/api/v1/users/Belax8',
		// url: 'https://crossorigin.me/https://www.codewars.com/api/v1/users/Belax8',
		dataType: 'JSON',
		jsonpCallback: 'callback',
		success: function (data) { renderCodeWarsData(data); },
		error: function (error) { console.log('Error getting Code Wars data!'); }
	});
}
function renderCodeWarsData(data) {
	var codeWarsDiv = $('#codeWarsData');
	var html = '';
	html += '<p>Overall Rank: ' + data.ranks.overall.name + '</p>';
	html += '<p>Leaderboard Position: #' + numberWithCommas(data.leaderboardPosition) + '</p>';
	html += '<p>Total Katas Completed: ' + numberWithCommas(data.codeChallenges.totalCompleted) + '</p>';
	html += '<p>JavaScript Score: ' + numberWithCommas(data.ranks.languages.javascript.score) + '</p>';
	html += '<p>Python Score: ' + numberWithCommas(data.ranks.languages.python.score) + '</p>';
	html += '<p>SQL Score: ' + numberWithCommas(data.ranks.languages.sql.score) + '</p>';
  html += '<p>PHP Score: ' + numberWithCommas(data.ranks.languages.php.score) + '</p>';
	html += '<p>See my Codewars Portfolio <a href="https://www.codewars.com/users/Belax8">here</a>.</p>';
	codeWarsDiv.html(html);
}
// getCodeWarsData();


/* GOOGLE ANALYTICS */
if (window.location.hostname != '' && window.location.hostname != 'belax-website-belax-8.c9users.io') {
	(function (i, s, o, g, r, a, m) {
	i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
		(i[r].q = i[r].q || []).push(arguments)
	}, i[r].l = 1 * new Date(); a = s.createElement(o),
		m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
	})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

	ga('create', 'UA-78205507-1', 'auto');
	ga('send', 'pageview');
}
