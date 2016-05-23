var portfolio = {
  init: function() {
    this.cacheDom();
    this.bindEvents();
    this.startUp();
  },
  cacheDom: function() {
    //variables in the nav
    this.$nav = $("nav");
    this.$homeLi = $('a[href$="#home"');
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
    this.$homeLi.on("click", this.homeActive.bind(this));
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
