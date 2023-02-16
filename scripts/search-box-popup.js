$(document).ready(function(){
    // Function to toggle popup search box
    $(".search").click(function(){
      $(".searchpopup").toggleClass("shown");
      $('body').css('overflow-y', 'hidden'); //prevent the vertical scrolling bar when pop up is open */
      event.preventDefault(); // prevents the # empty link from jumping to the top of screen
    });

    $(".exitsearchbutton").click(function(){
      $(".searchpopup").toggleClass("shown");
      $('body').css('overflow-y', 'auto'); //allow the vertical scrolling bar when pop up is closed */
      event.preventDefault(); // prevents the # empty link from jumping to the top of screen
    });
});
