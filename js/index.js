var working = false;
var email = $("#loginEmail").val();
var password = $("#loginPassword").val();
var email2 = "marcosaba2121@gmail.com"
var password2 = "pentium2121"

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
    firebase.auth().signInWithEmailAndPassword($("#loginEmail").val(), $("#loginPassword").val()).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
  }, 3000);
});

firebase.auth().onAuthStateChanged(function(user) {
 if (user) {
   // User is signed in.
   window.location = "http://scanner.ficik.com"
   working = true;

 }
});
