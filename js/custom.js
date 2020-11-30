$( document ).ready(function() {

  $('.carousel').carousel({
    interval: 0
  })

  var $myCarousel = $('#carousel-example-generic');

  function doAnimations(elems) {
    var animEndEv = 'webkitAnimationEnd animationend';

    elems.each(function () {
      var $this = $(this),
          $animationType = $this.data('animation');

      // Add animate.css classes to
      // the elements to be animated
      // Remove animate.css classes
      // once the animation event has ended
      $this.addClass($animationType).one(animEndEv, function () {
        $this.removeClass($animationType);
      });
    });
  }

  // Select the elements to be animated
  // in the first slide on page load
  var $firstAnimatingElems = $myCarousel.find('.item')
    .find('[data-animation ^= "animate__animated"]');

  // Apply the animation using the doAnimations()function
  doAnimations($firstAnimatingElems);

  // Attach the doAnimations() function to the
  // carousel's slide.bs.carousel event
  $myCarousel.on('slide.bs.carousel', function (e) {
    // Select the elements to be animated inside the active slide
    var $animatingElems = $(e.relatedTarget)
      .find("[data-animation ^= 'animate__animated']");
    doAnimations($animatingElems);
  });

});