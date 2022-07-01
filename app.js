// set date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear()

// close links in the nav-bar as the window size decreases
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    // adding the class 'show-links' in case the height is hard-coded can cause newly added links to not appear, or extra space in case links are removed
    // linksContainer.classList.toggle("show-links");

    // element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport
    // gets the height of the links-container, which is 0 in case of decreased window size
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;

    // gets the height of all the links combined
    const linksHeight = links.getBoundingClientRect().height;

    // click the hamburger-menu to open the linksContainer giving it the height of all the links
    if (linksContainerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    }

    // if the hamburger-menu is open, click to close it
    else {
        linksContainer.style.height = 0;
    }
})

const navBar = document.getElementById("nav");
const topLinkBtn = document.querySelector(".top-link");

// fixed navbar after scrolling past the fixed height of the nav-bar
window.addEventListener("scroll", function () {
    // pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically

    // shows real-time height as we scroll up and down
    // console.log(window.pageYOffset()) 

    const scrollHeight = window.pageYOffset;

    // height of the nav bar is assigned to a variable to be compared to scrollHeight
    const navBarHeight = navBar.getBoundingClientRect().height;

    if (scrollHeight > navBarHeight) {
        navBar.classList.add("fixed-nav");
    }
    else {
        navBar.classList.remove("fixed-nav");
    }

    // top-link button is hidden by default, show-link class in CSS is added to the class to display it 
    // arbitrarily add a scrollHeight beyond which the top-btn will appear
    if (scrollHeight > 500) {
        topLinkBtn.classList.add("show-link");
    }
    else {
        topLinkBtn.classList.remove("show-link");
    }

});

// smooth scroll
// in the decreased window size mode, clicking on the links of the hamburger menu takes to the part of the page but remains open and hides page content
// top portion of sections are missed when clicked
// the class of the links 'scroll-link' assigned to a variable
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        // the default smooth-scroll in the CSS is prevented 
        event.preventDefault();

        // navigate to specific spot dynamically
        // getAttribute() from a currentTarget gets the href attribute of the class 
        // slice is used because href attribute contains the '#', the id variable is made to match the id attribute in the sections
        const id = event.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        // calculate the heights of nav
        const navBarHeight = navBar.getBoundingClientRect().height;
        const linksContainerHeight = linksContainer.getBoundingClientRect().height;

        // offsetTop - A Number, representing the top position of the element, in pixels
        // the position of the section is assigned in the variable position
        // the section is off by the height of the navBar and the top portion is not seen, so the value of the navBarheight is subtracted
        let position = element.offsetTop - navBarHeight;
        console.log(position)

        // check if the navbar has the class of fixed-nav in the classList
        const fixedNav = navBar.classList.contains("fixed-nav");

        // for increased window size, if the navBar is not present, the value is still subtracted for first navigation
        // this is done so that navigation makes it to the actual section
        if (!fixedNav) {
            position = position - navBarHeight;
        }

        // the navHeight is very high in case of the decreased window, it is equal to total height of links and links-container; so subtracting this value will cause the section to appear very below
        if (navBarHeight > 82) {
            position = position + linksContainerHeight;
        }

        // this scrolls to the assigned position with the click
        window.scrollTo({
            left: 0,
            top: position,
        });

        // close the links in decreased window size after navigating to the clicked section
        linksContainer.style.height = 0;
    });
});
