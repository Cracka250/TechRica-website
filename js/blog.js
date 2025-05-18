const data = [
    "Artificial Intelligence",
    "Web Development",
    "Cybersecurity",
    "Cloud Computing & Services",
    "Machine Learning",
    "Tech Trends",
    "E-Commerce Solutions",
    "App Development",
    "Graphic Design",
    "Online Training",
    "Online Business Optimization",
    "Programming Languages",
    "Lifestyle"
];

function searchFunction() {
    let input =
    document.getElementById("search-box").value.toLowerCase();
    let resultContainer = 
    document.getElementById("search-results");
    resultContainer.innerHTML = ""; //clear previous results

    data.forEach(item => {
        if (item.toLowerCase().includes(input) ||
        isSimilar(item.toLowerCase(), input)) {
            let listItem = document.createElement("li");
            listItem.textContent = item;
            resultContainer.appendChild(listItem);
        }
            });
}

function isSimilar(word, query) {
    return word.startsWith(query) ||
    word.includes(query.substring(0, query.length - 1));
}