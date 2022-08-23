VIEW THE PROJECT HERE: https://cozy-heliotrope-ed0568.netlify.app/


Instead of using toggles of the button for closing links in the nav-bar as the window size decreases, this is done dynamically. Adding the class 'show-links' with the height is hard-coded can cause newly added links to not appear, or extra space in case links are removed. 

'element.getBoundingClientRect()'' method returns the size of an element and its position relative to the viewport. The height of the links-container is obtained by 'linksContainer.getBoundingClientRect().height.' It is 0 in case of decreased window size. The height of all the links combined is obtained as well. The hamburger-menu to open the linksContainer giving it the height of all the links. This is done by assigning the height of all the links combined to the links-container;  linksContainer.style.height = `${linksHeight}px`, and assigned to a value of 0 to close it. 

After scrolling past the fixed height of the nav-bar, the navbar position needs to be fixed. This is done by the 'scroll' attribute in the 'window.addEventListener' method. pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically. The height of the nav-bar is assigned to a variable to be compared to scrollHeight. Beyond the height of the nav-bar, the class 'fixed-nav' is added. Top-link button is hidden by default, show-link class in CSS is added to the class to display it. A scrollHeight is added arbitrarily beyond which the top-btn will appear. 

With the default set-up, in the decreased window size mode, clicking on the links of the hamburger menu takes to the part of the page but remains open and hides page content; top portion of sections are missed when clicked. All the links are selected within a single variable and checked for 'click'. 
In order to navigate to specific spot dynamically, the default smooth-scroll in the CSS is prevented. getAttribute() from a currentTarget gets the href attribute of the class. 'slice(1)' is used because 'href' attribute contains the '#', the id variable is made to match the id attribute in the sections. 
'offsetTop' - A Number, representing the top position of the element, in pixels. 
For increased window size, if the navBar is not present, the value is still subtracted for first navigationThe position of the section is assigned to a variable. The section is off by the height of the navBar and the top portion is not seen so the value of the navBarheight is subtracted from the scroll pixels. 
The navHeight is very high in case of the decreased window, it is equal to total height of links and links-container; so subtracting this value will cause the section to appear very below. So containerHeight is added to scroll is to the assigned position. 

The links in decreased window size is closed after navigating to the clicked section.

Dynamic date setting - Date().getFullYear().
