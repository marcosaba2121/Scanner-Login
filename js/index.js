var working = false;
var email = $("#email").val();
var password = $("#password").val();

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
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      $state.html('¡Incorrecto!');
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
