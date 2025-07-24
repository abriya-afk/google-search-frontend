document.addEventListener('DOMContentLoaded', function() {
    const advancedSearchForm = document.getElementById('advanced-search-form');

    advancedSearchForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const query = document.getElementById('query').value;
        const exactPhrase = document.getElementById('exact-phrase').value;
        const excludeWords = document.getElementById('exclude-words').value;
        const siteOrDomain = document.getElementById('site-or-domain').value;

        const searchParams = new URLSearchParams({
            q: query,
            exact: exactPhrase,
            exclude: excludeWords,
            site: siteOrDomain
        });

        const searchUrl = `https://www.google.com/search?${searchParams.toString()}`;
        window.location.href = searchUrl;
    });
});