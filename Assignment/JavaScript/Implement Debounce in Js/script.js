// Select input box and result list
const searchInput = document.getElementById("searchInput");
const resultsList = document.getElementById("results");

// Debounce function to delay API call
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
}

// Fetch API results
async function fetchResults(query) {
    if (query.trim() === "") {
        resultsList.innerHTML = ""; // Clear results if input is empty
        return;
    }

    try {
        const response = await fetch(`https://api.github.com/search/users?q=${query}`);
        const data = await response.json();
        displayResults(data.items);
    } catch (error) {
        console.error("Error fetching results:", error);
    }
}

// Display fetched results
function displayResults(users) {
    resultsList.innerHTML = "";
    users.slice(0, 5).forEach(user => {
        const li = document.createElement("li");
        li.textContent = user.login;
        resultsList.appendChild(li);
    });
}

// Apply debounce to API call
const debouncedSearch = debounce(fetchResults, 500);

// Listen for input events
searchInput.addEventListener("input", (event) => {
    debouncedSearch(event.target.value);
});
