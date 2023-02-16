$(document).ready(function () {

  $(window).scroll(function () {
    // fade in the back-to-top-wrapper when the scrolling reaches 45% of the document height and fade out when it's less than 45%. you can also use a number for scrolling height in pixels e.g. 300
      if ($(this).scrollTop() > $(document).height()*0.45) {
          $('.back-to-top-wrapper').fadeIn();
      } else {
          $('.back-to-top-wrapper').fadeOut();
      }
  });

  // scroll to top when clicked, with 100ms time delay
  $('.back-to-top-wrapper').click(function () {
      $("html, body").animate({
          scrollTop: 0
      }, 500);
      return false;
  });


 });
