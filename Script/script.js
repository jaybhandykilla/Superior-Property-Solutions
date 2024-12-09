const pages = [
    { title: 'Reviews', url: 'reviews.html' },
    { title: 'Pictures', url: 'pictures.html' },
    { title: 'Contacts', url: 'contacts.html' },
    { title: 'Form', url: 'form.html' },
    { title: 'Certifications', url: 'certifications.html' },
];
function searchSite() {
    const searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
    const resultsList = document.getElementById("searchResults");
    resultsList.innerHTML = '';

    if (searchTerm) {
        const results = pages.filter(page => page.title.toLowerCase().includes(searchTerm));

        if (results.length > 0) {
            results.forEach(result => {
                const li = document.createElement("li");
                const a = document.createElement("a");
                a.href = result.url;
                a.textContent = result.title;
                li.appendChild(a);
                resultsList.appendChild(li);
            });
        } else {
            const li = document.createElement("li");
            li.className = 'no-results';
            li.textContent = 'No results found.';
            resultsList.appendChild(li);
        }
    }
}
