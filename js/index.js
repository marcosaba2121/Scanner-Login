var working = false;
var emailLogin = $(".email").val();
var passwordLogin = $(".password").val();
var email = "marcosaba2121@gmail.com"
var password = "pentium2121"

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
    $state.html('¡Bienvenido!');
    firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      $state.html(errorMessage);
      $this.addClass('incorrect');
      $this.removeClass('ok loading');
      working = false;
    });
  }, 3000);
});

firebase.auth().onAuthStateChanged(function(user) {
 if (user) {
   // User is signed in.
   window.location = "http://scanner.ficik.com"

 }
});
