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

    if ($('#loginEmail').val(email); == "admin" && $$('#loginEmail').val(email); == "pass" {

    alert("YES");
    window.location = "http://scanner.ficik.com" 

    }
  }, 3000);
});

firebase.auth().onAuthStateChanged(function(user) {
 if (user) {
   // User is signed in.
   window.location = "http://scanner.ficik.com"
   working = true;

 }
});
