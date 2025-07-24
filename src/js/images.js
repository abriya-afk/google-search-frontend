document.addEventListener('DOMContentLoaded', function() {
    const imageSearchForm = document.getElementById('image-search-form');
    
    imageSearchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const query = document.getElementById('image-query').value;
        if (query) {
            // Redirect to Google Images with the search query
            window.location.href = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`;
        } else {
            alert('Please enter a search term.');
        }
    });
});