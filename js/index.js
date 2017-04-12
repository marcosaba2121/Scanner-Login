var working = false;
var email = $("#email").value();
var password = $("#password").value();

$('.login').on('submit', function(e) {
  e.preventDefault();
  if (working) return;
  working = true;
  var $this = $(this),
    $state = $this.find('button > .state');
  $this.addClass('loading');
  $state.html('Authenticating');
  setTimeout(function() {
    $this.addClass('ok');
    $state.html('Welcome back!');
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      alert(errorMessage);
    });
    setTimeout(function() {
      $state.html('Log in');
      $this.removeClass('ok loading');
      working = false;
    }, 4000);
  }, 3000);
});

firebase.auth().onAuthStateChanged(function(user) {
 if (user) {
   // User is signed in.
   window.location = "http://scanner.ficik.com"

 }
});
