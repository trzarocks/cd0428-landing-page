
// listen for DOMContentLoaded event 
document.addEventListener("DOMContentLoaded", function () {

    // variables that end up getting reused


    // Get section elements and make them an array

    function listSections() {
        const sections = Array.from(document.querySelectorAll('section'));
        return sections.map((section) => ({
            id: section.id,
            nav: section.data-nav,
        }));
    }

    // Create the menu

    const navigation = document.getElementsByClassName('navbar__list');
    const sections = Array.from(document.querySelectorAll('section'));
    for (const section of sections) {
        const link = document.createElement('a');
        link.href = '#${section.id}';
        link.textContent = section.querySelector('h2').textContent;
        navigation.appendChild(link);
    }

    // Create an IntersectionObserver for seach Section

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // change the navbar link to ::active
        }
        });
    });
    
    sections.forEach((section) => observer.observe(section));


    console.log("DOM is loaded");
  });

