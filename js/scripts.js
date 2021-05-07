/*!
 * Start Bootstrap - Creative v6.0.4 (https://startbootstrap.com/theme/creative)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
 */
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
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

  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict


var pic = 0;
$('#pic').click(
  function () {
    if (pic == 0) {
      $(this).find('div').stop(true, true).animate({
        'top': '-=400px'
      }, 200);
      pic = 1;
    } else {
      $(this).find('div').stop(true, true).animate({
        'top': '+=400px'
      }, 200);
      pic = 0;

    }
  }); // End of use strict

var pic2 = 0;
$('#pic2').click(
  function () {
    if (pic2 == 0) {
      $(this).find('div').stop(true, true).animate({
        'top': '-=400px'
      }, 200);
      pic2 = 1;
    } else {
      $(this).find('div').stop(true, true).animate({
        'top': '+=400px'
      }, 200);
      pic2 = 0;

    }
  }); // End of use strict

var pic3 = 0;
$('#pic3').click(
  function () {
    if (pic3 == 0) {
      $(this).find('div').stop(true, true).animate({
        'top': '-=400px'
      }, 200);
      pic3 = 1;
    } else {
      $(this).find('div').stop(true, true).animate({
        'top': '+=400px'
      }, 200);
      pic3 = 0;

    }
  }); // End of use strict

var pic4 = 0;
$('#pic4').click(
  function () {
    if (pic4 == 0) {
      $(this).find('div').stop(true, true).animate({
        'top': '-=400px'
      }, 200);
      pic4 = 1;
    } else {
      $(this).find('div').stop(true, true).animate({
        'top': '+=400px'
      }, 200);
      pic4 = 0;

    }
  }); // End of use strict
document.addEventListener("DOMContentLoaded", function () {
  // make it as accordion for smaller screens
  if (window.innerWidth > 992) {

    document.querySelectorAll('.navbar .nav-item').forEach(function (everyitem) {

      everyitem.addEventListener('mouseover', function (e) {

        let el_link = this.querySelector('a[data-bs-toggle]');

        if (el_link != null) {
          let nextEl = el_link.nextElementSibling;
          el_link.classList.add('show');
          nextEl.classList.add('show');
        }

      });
      everyitem.addEventListener('mouseleave', function (e) {
        let el_link = this.querySelector('a[data-bs-toggle]');

        if (el_link != null) {
          let nextEl = el_link.nextElementSibling;
          el_link.classList.remove('show');
          nextEl.classList.remove('show');
        }


      })
    });

  }
  // end if innerWidth
});

function searchbar() {
  var input, filter, section, i;
  input = document.getElementById("myInput");

  filter = input.value.toLowerCase();
  console.log(filter);
  body = document.getElementById("page-top");
  section = body.getElementsByTagName("section")
  console.log(section)
  for (i = 0; i < section.length; i++) {
    idValue = section[i].id;
    console.log(section[i].id)
    console.log(idValue.toLowerCase().indexOf(filter))
    if (idValue.toLowerCase().indexOf(filter) > -1) {
      section[i].style.display = "";
      console.log("hi")
    } else {
      section[i].style.display = "none";
    }
  }
}

function noEnglish() {
  alert("il y a not English my frèro");
}


const inViewport = (entries, observer) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
  });
};

const backimg = [

  "/assets/img/spa.jpg",
  "/assets/img/sale-resto.jpg",
  "/assets/img/front_hotel_versail.jpg",
  "/assets/img/hotel-luxe-paris.jpg",
]

const node = document.getElementsByClassName("masthead")[0];

const cycleImages = (images, container, step) => {
  images.forEach((image, index) => (
    setTimeout(() => {
      container.style.background = `linear-gradient(to bottom, rgba(92, 77, 66, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%),url(${image})`;
      container.style.backgroundPosition = `center`;
      container.style.backgroundRepeat = `no-repeat`;
      container.style.backgroundAttachment = `scroll`;
      container.style.backgroundSize = `cover`;
    }, step * (index + 1))
  ))
  setTimeout(() => cycleImages(images, container, step), step * images.length)
}

cycleImages(backimg, node, 5000)


var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}