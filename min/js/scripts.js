(function ($) {
  "use strict"; // Start of use strict

  if (
    new Date().getTime() < new Date("2021-05-21T08:00:00Z").getTime() ||
    new Date().getTime() > new Date("2021-05-23T08:00:00Z").getTime()
  ) {
    $("a.presale-now").html("$PEPE, Presale coming soon!");
    console.log("wtf");
    appendError(`Presale Address on Website Only! Stay in Tune!`, 1e4);
    appendError(`Plz follow our official twitter account`, 1e4 + 1e3);
  }

  // Smooth scrolling using anime.js
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        anime({
          targets: "html, body",
          scrollTop: target.offset().top - 72,
          duration: 1000,
          easing: "easeInOutExpo",
        });
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 75,
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict
