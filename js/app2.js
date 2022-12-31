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

const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('a');
const hrefs = document.querySelectorAll('href');

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
  
    /**
     * @description adds active class to section and nav menu when it is in viewport
     * @returns {NodeList} of all sections
     */
    
    // Add class 'active' to section when it is near top of viewport
    function makeActive() {
        for (const section of sections) {
            const box = section.getBoundingClientRect();
            // You can play with the values in the "if" condition to further make it more accurate. 
            if (box.top <= 150 && box.bottom >= 150) {
            // Apply active state on the current section and the corresponding Nav link.
                section.classList.add('your-active-class');
                const navLink = document.querySelector(`a[href="#${section.id}"]`);
                navLink.classList.add('active');
            } else {
            // Remove active state from other section and corresponding Nav link.
                section.classList.remove('your-active-class');
                const navLink = document.querySelector(`a[href="#${section.id}"]`);
                navLink.classList.remove('active');
            }
        }
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
    sections.forEach(section => {
  
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
    window.addEventListener('scroll', makeActive);
  });