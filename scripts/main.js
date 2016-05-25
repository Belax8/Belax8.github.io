var portfolio = {
  init: function() {
    this.cacheDom();
    this.bindEvents();
    this.startUp();
  },
  cacheDom: function() {
    //variables in the nav
    this.$nav = $("nav");
    this.$homeAllLi = $('a[href$="#home"');
    this.$homeLi = this.$nav.find("li#home-li");
    this.$experienceLi = this.$nav.find("#experience-li");
    this.$portfolioLi = this.$nav.find("#portfolio-li");
    this.$contactLi = this.$nav.find("#contact-li");
    this.$allLi = this.$nav.find("li");
    //variable in the body
    this.$el = $("#page-wrap");
    this.$home = this.$el.find("#home");
    this.$experience = this.$el.find("#experience");
    this.$portfolio = this.$el.find("#portfolio");
    this.$contact = this.$el.find("#contact");
    this.$allTabs = this.$el.find(".tabs");
  },
  startUp: function() {
    this.$allTabs.hide();
    this.$home.fadeIn();
  },
  bindEvents: function() {
    this.$homeAllLi.on("click", this.homeActive.bind(this));
    this.$experienceLi.on("click", this.experienceActive.bind(this));
    this.$portfolioLi.on("click", this.portfolioActive.bind(this));
    this.$contactLi.on("click", this.contactActive.bind(this));
  },
  homeActive: function(e) {
    e.preventDefault();
    this.$allLi.removeClass("active");
    this.$allTabs.hide();
    this.$homeLi.addClass("active");
    this.$home.fadeIn();

  },
  experienceActive: function(e) {
    e.preventDefault();
    this.$allLi.removeClass("active");
    this.$allTabs.hide();
    this.$experienceLi.addClass("active");
    this.$experience.fadeIn();
  },
  portfolioActive: function(e) {
    e.preventDefault();
    this.$allLi.removeClass("active");
    this.$allTabs.hide();
    this.$portfolioLi.addClass("active");
    this.$portfolio.fadeIn();
  },
  contactActive: function(e) {
    e.preventDefault();
    this.$allLi.removeClass("active");
    this.$allTabs.hide();
    this.$contactLi.addClass("active");
    this.$contact.fadeIn();
  }







};


$(document).ready(function () {
  portfolio.init();
});


/* GOOGLLE ANALYTICS */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-78205507-1', 'auto');
ga('send', 'pageview');
