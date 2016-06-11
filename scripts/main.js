
    /* CONTACT FORM */
var $el = $(".container");
var $name = $el.find("#name");
var $email = $el.find("#email");
var $subject = $el.find("#subject");
var $message = $el.find("#message");
var $submit = $el.find("#submit");
var $formStatus = $el.find(".form-status");

$submit.on("click", sendMessage);

function sendMessage() {
  var messageInfo = {
    name: $name.val(),
    email: $email.val(),
    subject: $subject.val(),
    message: $message.val()
  };

  $.ajax({
    type: "POST",
    url: "http://rest.learncode.academy/api/aTjPn7InWo8BlqrR/mB2974BuosGlyUks",
    data: messageInfo,
    success: function(newMessage) {
      //console.log(newMessage);
      $formStatus.html('<div class="alert alert-success" role="alert">Your message has been sent!</div>');
    },
    error: function() {
      alert("An error occurred while sending your message!");
    }
  });

  $name.val("");
  $email.val("");
  $subject.val("");
  $message.val("");

}


    /* GOOGLE ANALYTICS */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-78205507-1', 'auto');
ga('send', 'pageview');
