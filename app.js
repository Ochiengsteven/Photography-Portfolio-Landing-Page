// your-js-file.js

// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Function to animate the "about" section
    function animateAbout() {
      gsap.to(".about-section", {
        duration: 1,
        opacity: 1,
        x: 0,
        ease: "power2.inOut",
      });
    }
  
    // Function to reset the "about" section
    function resetAbout() {
      gsap.to(".about-section", {
        duration: 1,
        opacity: 0,
        x: -1000,
        ease: "power2.inOut",
      });
    }
  
    // Add click event listeners for each section
    document.getElementById("about").addEventListener("click", animateAbout);
    document.getElementById("profile").addEventListener("click", animateProfile);
    document.getElementById("contact").addEventListener("click", animateContact);
  
    // Optionally, you can define animateProfile and animateContact functions similarly
  
    // Initialize the "about" section with hidden content
    resetAbout();
});
