/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

// Wait until the DOM is loaded before executing code

document.addEventListener('DOMContentLoaded', function() {

  /**
   * Define Global Variables
   * 
  */
  /*eslint-env browser*/


  /**
   * End Global Variables
   * Start Helper Functions
   * 
  */

  // Get sections from the DOM
  function getSections() {
      return document.querySelectorAll('section');
    }

  /**
   * End Helper Functions
   * Begin Main Functions
   * 
  */

  // build the nav

  // Query the DOM for UL with id="navbar__list"
  const navList = document.getElementById('navbar__list');

  // Iterate through the section elements and create a nav menu item for each
  getSections().forEach(section => {

      // Get the id and data-nav attributes of the section element
      const id = section.getAttribute('id');
      const navText = section.getAttribute('data-nav');

      // Create the list item element
      const li = document.createElement('li');

      // Create the link element, href,  text, class
      const a = document.createElement('a');
      a.setAttribute('href', `#${id}`);
      a.textContent = navText;
      a.setAttribute('class', 'menu__link')

      // Add the link to the list item
      li.appendChild(a);
    
      // Add the list item to the nav list
      navList.appendChild(li);
  });

  /**
   * End Main Functions
   * Begin Events
   * 
  */

  // Select the a elements and the sections
  const links = document.querySelectorAll('a');

  // Create an intersection observer
  const observer = new IntersectionObserver((entries) => {
    // Loop through the entries
    entries.forEach((entry) => {
      // Check if the entry is intersecting with the viewport
      if (entry.isIntersecting) {
        // Get the target element
        const target = entry.target;

        // Loop through the links
        links.forEach((link) => {
          // If the link corresponds to the target element, set its class to "active"
          if (link.hash === `#${target.id}`) {
            link.classList.add('active');
          } else {
            // Otherwise, remove active class
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
      //defines how much of section should be in viewport.  25% looked good on all device sizes
      threshold: 0.25,
  });

  // Observe each section
  getSections().forEach((section) => {
    observer.observe(section);
  });

  // Scroll to anchor ID using scrollTO event

  // Add a click event listener to each link
  links.forEach((link) => {
      link.addEventListener('click', (event) => {
        // Prevent the default link behavior
        event.preventDefault();
    
        // Get the target element
        const targetId = link.hash;
        const target = document.querySelector(targetId);
    
        // Smoothly scroll to the target element using ScrollTo
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth',
        });
      });
    });
});