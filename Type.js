document.addEventListener("DOMContentLoaded", function() {
    // Define options for the Typed.js plugin
    var options = {
      strings: ['Data Scientist', 'Programmer', 'Student Athlete', 'Husband'], // Array of strings to display
      typeSpeed: 85, // Typing speed in milliseconds
      loop: true // Whether to loop through the strings indefinitely
    };

    // Initialize Typed.js with the provided options
    var typed = new Typed('.typed', options);
  });