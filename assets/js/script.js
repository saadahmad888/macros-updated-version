/* =======================================================================
Sticky Nav
========================================================================== */
window.addEventListener('scroll', function() {
  myFunction();
});

var navbar = document.getElementById("main-nav");

function myFunction() {
  if (window.scrollY >= 100) {
    navbar.classList.add("colored");
  } else {
    navbar.classList.remove("colored");
  }
}





// // Show the preloader
// function showPreloader() {
//   document.getElementById('loader').style.display = 'flex';

//   // Delay hiding the preloader by 2 seconds
//   setTimeout(hidePreloader, 2000);
// }

// // Hide the preloader
// function hidePreloader() {
//   document.getElementById('loader').style.display = 'none';
// }

// // Call showPreloader function to show the preloader for at least 2 seconds
// showPreloader();


// Show the preloader
function showPreloader() {
  // Disable scrolling
  document.body.style.overflow = 'hidden';

  document.getElementById('loader').style.display = 'flex';

  // Delay hiding the preloader by 2 seconds
  setTimeout(hidePreloader, 2000);
}

// Hide the preloader
function hidePreloader() {
  // Enable scrolling
  document.body.style.overflow = 'auto';

  document.getElementById('loader').style.display = 'none';
}

// Call showPreloader function to show the preloader for at least 2 seconds
showPreloader();


  setTimeout(function() {
    document.body.style.overflow = 'auto';
  }, 2000); // Your loading transition's length in miliseconds.






// (function () {
//   'use strict';
//   window.addEventListener('load', function () {
//     // Get the forms we want to add validation styles to
//     var forms = document.getElementsByClassName('needs-validation');
//     // Loop over them and prevent submission
//     var validation = Array.prototype.filter.call(forms, function (form) {
//       form.addEventListener('submit', function (event) {
//         if (form.checkValidity() === false) {
//           event.preventDefault();
//           event.stopPropagation();
//         }
//         form.classList.add('was-validated');
//       }, false);
//     });
//   }, false);
// })();








// // Initialize Isotope for filtering
// var $portfolio = $('.portfolio').isotope({
//   itemSelector: '.item',
//   layoutMode: 'fitRows'
// });

// // Filtering function
// $('.filter-button-group').on('click', 'button', function() {
//   var filterValue = $(this).attr('data-filter');
//   $portfolio.isotope({ filter: filterValue });
// });

// // Change is-checked class on buttons
// $('.filter-button-group').each(function(i, buttonGroup) {
//   var $buttonGroup = $(buttonGroup);
//   $buttonGroup.on('click', 'button', function() {
//     $buttonGroup.find('.is-checked').removeClass('is-checked');
//     $(this).addClass('is-checked');
//   });
// });




// // Website Popup

// // Function to open the popup after 2 seconds
// function openPopup() {
//   setTimeout(function () {
//       document.getElementById('popup-container').style.display = 'flex';
//   }, 1000); // 2000 milliseconds = 2 seconds
// }

// // Function to close the popup
// function closePopup() {
//   document.getElementById('popup-container').style.display = 'none';
// }

// // Open the popup when the page is loaded
// window.onload = openPopup;

