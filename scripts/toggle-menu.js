$(document).ready(function(){

  // Function to toggle responsive menu
  $(".hamburger").click(function(){
    $("nav").toggleClass("responsive");
    event.preventDefault(); // prevents the # empty link from jumping to the top of screen
  });

});
