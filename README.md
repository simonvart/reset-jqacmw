reset-jqacmw
============

Reset Jquery Accordion Menu Widget

- A client was using the Jquery Accordion Menu Widget on its site. But the menu was using a cookie to store the active states of the menu.

- Also, this client has pages that wasn't visible in the menu, so the menu cannot store values for those invisible pages.

- The client has a custom "home" button that didn't reset the cookie, so the result was messy.

- When a visitor came to the site directly to a inner page, the problem was the same and the menu presented the wrong active items.


So my solution was to desactivate the cookie in the widget options, grab the id of the widget, use a array of url fragments identifiers associate to their position in the menu, check the url for fragment, and change the menu active items dynamically.

This is a lot of processing for something tht could have been done in pure CSS, but this was the constraints.

I don't know, maybe you'll run into the same situation one day, so I share.
