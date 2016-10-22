
  /* SCROLL TO TOP */
$('.scroll-to-home').click(function() {
	$('html, body').animate({scrollTop: $("#home").offset().top}, 'slow');
	return false;
});
$('.scroll-to-experience').click(function() {
	$('html, body').animate({scrollTop: $("#experience").offset().top}, 'slow');
	return false;
});
$('.scroll-to-portfolio').click(function() {
	$('html, body').animate({scrollTop: $("#portfolio").offset().top}, 'slow');
	return false;
});
$('.scroll-to-contact').click(function() {
	$('html, body').animate({scrollTop: $("#contact").offset().top}, 'slow');
	return false;
});


    /* GOOGLE ANALYTICS */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-78205507-1', 'auto');
ga('send', 'pageview');
