/**
 * @todo Make bookmarklet compilable
 * @body Integrate Bookmarklet with Roolup or switch to Webpack to make the compiling of bookmarklet easy.
 */
(function bookmarklet() {
    window.location = 'https://issue-reporter.ilicmarko05.now.sh/?ua='
        + encodeURIComponent(window.navigator.userAgent)
        + '&r=' + screen.width + 'x' + screen.height
        + '&l=' + encodeURIComponent(window.location.href);
}());