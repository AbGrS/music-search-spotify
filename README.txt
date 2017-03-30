This Application uses fetches albums of artist 'keane'

If you input 'Keane' or any of his album's name, results will be produced.


In absence of availibilty of all the APIs on spotify I took, the following ids was taken:

'41MnTivkwTO3UUJ8DrqEJJ','6JWc4iAiJ9FjyK0B59ABb4','6UXCm6bOO4gFlDQZV5yL37', which returned some response.
Generally, all the APIs produced 401(unAuthorised Access)


/* Code Explanation */

This is an angular JS app with serive, controller, route.
For CSS, no external library has been used.
Bootstrap has been used only for the purpose of creating Modal.

/* File Structure */
CSS--- CssFile.cs (contains all the CSS including media queries)

JS--- fetchSearchResultsServive.js (fetches JSON response from spotify app)
  --- musicSearchController.js (angular controller of this app)
  --- route.js (starting js point. In case of making this app SPA, all the states can be further appended)

index.html (HTML for the app)