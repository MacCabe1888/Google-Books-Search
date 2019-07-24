# Google-Books-Search
A React-powered Google Books search app.

### Visit
You can visit the deployed site at the following URL: https://reactbooksearch1888.herokuapp.com

### Overview
This app provides a user-friendly UI which allows the user to search Google Books and save books of interest in a list for later viewing.

### Technical Approach
Google Books Search is a MERN stack (MongoDB, Express, React.js, Node.js) app built using MVC (model-view-controller) architecture. It makes use of the following technologies:
* MongoDB / Mongoose
    - The Mongoose npm package is used to create the *model* of the MVC architecture. The Book model includes information about the book (title, author, description, image, etc.) that may be of interest to the user as well as the link to the book's Google Books page.
* Express
    - A Node.js-Express server handles the *controller* component of the app structure – i.e., the routes and functions by which the app retrieves search results from Google Books, stores the retrieved data in the format defined by the Book model, and saves or deletes books per the user's request.
* React.js
    - React handles the *view* component of the app structure. React components are organized into two categories: "pages" (the home page, the saved books page, and the 404 page) and "components" (components in the strict sense – i.e., components contained within the scope of a page's HTML). React facilitates the reuse without repetition – i.e., dry code – of components that appear multiple times and on multiple pages – e.g., the "view" button that links to a given book's Google Books page.
* Axios
    - Axios is used to retrieve a list of books – i.e., search results – from Google Books based on the user's search term(s).

### User Guide
1. In the "Book Search" section near the top of the home page, enter the title of a book in the input field. Then press the "enter"/"return" key or click the "search" button beneath the input field.
2. Scroll down to peruse the search results.
3. Each book in the results list has a "view" button and a "save" button.
    * Click "view" to immediately open the link to the given book's Google Books page in a new browser tab.
    * Click "save" to transfer the given book from the search results list to the list of saved books on the "saved" page.
4. To view the list of saved books, click "Saved" on the navigation bar at the top of the page.
5. Each book in the saved books list has a "view" button and a "delete" button.
    * Click "view" to immediately open the link to the given book's Google Books page in a new browser tab.
    * Click "delete" to remove the given book from the saved books list. It is now eligible once again to appear in future search results on the home page.
6. To search for more books after viewing the list of saved books, click "Search" on the navigation bar at the top of the page.
