document.addEventListener('DOMContentLoaded', function() {
    const advancedSearchForm = document.getElementById('advanced-search-form');

    advancedSearchForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get values from the correct input IDs
        const exactPhrase = document.getElementById('exact-phrase').value;
        const anyWords = document.getElementById('any-words').value;
        const noneWords = document.getElementById('none-words').value;
        const siteOrDomain = document.getElementById('site-or-domain').value;

        // Build the Google advanced search URL
        const url = `https://www.google.com/search?as_epq=${encodeURIComponent(exactPhrase)}&as_oq=${encodeURIComponent(anyWords)}&as_eq=${encodeURIComponent(noneWords)}&as_sitesearch=${encodeURIComponent(siteOrDomain)}`;

        window.location.href = url;
    });
});